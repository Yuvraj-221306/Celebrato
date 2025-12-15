const  express = require("express");
const router = express.Router();
const Booking = require("../models/booking.js");
const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn } = require("../middleware.js");

const bookingController = require("../controllers/booking.js");

// 1. User bookings (view and create)
router
.route('/myBookings')
.get( isLoggedIn , wrapAsync(bookingController.showBookings))
.post( isLoggedIn , wrapAsync(bookingController.createBooking));

// 2. Payment page (GET for direct access, POST for form submission)
router
.route('/payment')
.get( isLoggedIn, wrapAsync(bookingController.renderPaymentPage))
.post( isLoggedIn, wrapAsync(bookingController.renderPaymentPage));

// 3. Payment success page
router.get('/payment-success', isLoggedIn, wrapAsync(bookingController.paymentSuccess));

// 4. Host bookings (view all bookings for host's listings)
router.get('/hostBookings', isLoggedIn, wrapAsync(bookingController.hostBookings));

// 5. Host actions: confirm/cancel booking
router.post('/:id/confirm', wrapAsync(bookingController.confirmBooking));
router.post('/:id/cancel', wrapAsync(bookingController.cancelBooking));

module.exports = router;