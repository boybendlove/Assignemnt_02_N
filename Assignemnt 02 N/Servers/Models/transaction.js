const mongoose = require('../db');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
  dateStart: Date,
  dateEnd: Date,
  price: Number,
  payment: String,
  status: { type: String, enum: ['Booked', 'Checkin', 'Checkout'], default: 'Booked' },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;