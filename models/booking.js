const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  listing: {
    type: Schema.Types.ObjectId,
    ref: "Listing",
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },


  contact: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Contact must be a valid 10-digit number']
  },

   startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  amount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  },

   razorpayOrderId: {
    type: String,
    default: null
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

bookingSchema.pre('validate', function (next) {
  if (this.startDate && this.endDate && this.startDate > this.endDate) {
    this.invalidate('endDate', 'End date must be after start date.');
  }
  next();
});

module.exports = mongoose.model("Booking", bookingSchema);
