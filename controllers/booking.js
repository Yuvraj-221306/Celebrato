require('dotenv').config();

const Razorpay = require('razorpay');
const Booking = require("../models/booking.js");
const Listing = require("../models/listings.js");
const User = require("../models/users.js");
const crypto = require('crypto');


const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

//Create booking
module.exports.createBooking = async (req, res) => {
  try {
    console.log("Received body:", req.body); 

    const { listingId, contact, startDate, endDate } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: 'User not found' });

    const name = user.name || user.username || user.email; 
    const email = user.email;

    if (!listingId) {
      return res.status(400).json({ error: 'listingId is required' });
    }
    console.log("Received body:", req.body);

    const listing = await Listing.findById(listingId);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });

    const newStartDate = new Date(startDate);
    const newEndDate = new Date(endDate);

    const isConflict = await Booking.findOne({
      listing: listingId,
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        {
          startDate: { $lte: newEndDate },
          endDate: { $gte: newStartDate }
        }
      ]
    });

    if (isConflict) {
      return res.status(400).json({ error: 'This listing is already booked for the selected dates.' });
    }

    const amount = listing.price;
    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: 'Invalid listing price' });
    }

    const receipt = `receipt_${Date.now().toString().slice(-10)}`;

    console.log("Creating Razorpay order with amount:", amount * 100);

    const order = await razorpayInstance.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: receipt,
      payment_capture: 1
    });
    console.log("Razorpay order created:", order);

    const booking = new Booking({
      listing: listingId,
      user: userId,
      name,
      email,
      contact,
      startDate: newStartDate,
      endDate: newEndDate,
      razorpayOrderId: order.id,
      amount,
      status: 'pending'
    });
    await booking.save();

    res.json({
      orderId: order.id,
      amount,
      key: process.env.RAZORPAY_ID_KEY,
      bookingId: booking._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create booking or order' });
  }
}

//Render to payment page
module.exports.renderPaymentPage = async (req, res) => {
  try {
    const { listingId, contact, startDate, endDate } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) return res.status(400).send('User not found');

    const listing = await Listing.findById(listingId);
    if (!listing) return res.status(404).send('Listing not found');

    const amount = listing.price;
    const receipt = `receipt_${Date.now().toString().slice(-10)}`;

    // Create Razorpay order
    const order = await razorpayInstance.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: receipt,
      payment_capture: 1
    });

   // Create and save booking with status 'pending'
    

   res.render('booking/payment', {
      listing,
      user,
      contact,
      startDate,
      endDate,
      amount,
      orderId: order.id,
      key: process.env.RAZORPAY_ID_KEY
    });

    res.render('booking/payment', {
      booking,
      key: process.env.RAZORPAY_ID_KEY
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Could not render payment page');
  }
};

//Confirmation about the payment
module.exports.paymentSuccess = async (req, res) => {
  const { listingId, contact, startDate, endDate, paymentId, orderId } = req.query;
  const userId = req.user._id;

  const listing = await Listing.findById(listingId);
  const user = await User.findById(userId);

  const booking = new Booking({
    listing: listingId,
    user: userId,
    name: user.name || user.username || user.email,
    email: user.email,
    contact,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    razorpayOrderId: orderId,
    razorpayPaymentId: paymentId,
    amount: listing.price,
    status: 'confirmed'
  });
  await booking.save();
  await booking.populate('listing');

  res.render('booking/paymentSuccess', {
    booking,
    paymentId
  });
};

//Showing the bookings for the user made by the user
module.exports.showBookings = async (req, res) => {
  console.log("User ID:", req.user._id);
  const bookings = await Booking.find({ user: req.user._id }).populate('listing').sort({ createdAt: -1 });
  console.log("Bookings:", bookings);
  res.render('booking/myBookings', { bookings });
};

//Host can see the bookings made by the user
module.exports.hostBookings = async (req, res) => {

  const myListings = await Listing.find({ owner: req.user._id });

  const bookings = await Booking.find({ listing: { $in: myListings } }).populate('listing').populate('user').sort({ createdAt: -1 });

  res.render('booking/hostBookings', { bookings });
}

// Confirm booking for the host
module.exports.confirmBooking = async (req, res) => {
  await Booking.findByIdAndUpdate(req.params.id, { status: "confirmed" });
  res.redirect("/booking/hostBookings");
};

// Cancel booking for the host
module.exports.cancelBooking = async (req, res) => {
  await Booking.findByIdAndUpdate(req.params.id, { status: "cancelled" });
  res.redirect("/booking/hostBookings");
};



