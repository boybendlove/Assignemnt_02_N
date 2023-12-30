const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  type: String,
  city: String,
  address: String,
  distance: Number,
  photos: [String],
  desc: String,
  rating: Number,
  featured: Boolean,
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
});

module.exports = mongoose.model('Hotel', hotelSchema);
