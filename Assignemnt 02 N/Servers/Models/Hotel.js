const mongoose = require('../db');
const Room = require('./Room.js');

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
  rooms: [Room.schema], // Thêm reference đến Room schema
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
