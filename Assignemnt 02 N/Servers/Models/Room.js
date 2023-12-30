const mongoose = require('../db');

const roomSchema = new mongoose.Schema({
  title: String,
  price: Number,
  maxPeople: Number,
  desc: String,
  roomNumbers: [String],
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
