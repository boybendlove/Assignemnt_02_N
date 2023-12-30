// server/routes/search.js
const express = require('express');
const router = express.Router();
const Hotel = require('../Models/Hotel');
const Transaction = require('../Models/transaction');

// Tìm kiếm khách sạn phù hợp
const search_hotels =  async (req, res) => {
  const { city, startDate, endDate, numRooms, numPeople } = req.query;

  try {
    // Lấy danh sách khách sạn thỏa mãn điều kiện
    const hotels = await Hotel.find({
      city,
      'rooms': { $elemMatch: { 'roomNumbers': { $size: { $gte: numRooms } } } },
    });

    // Lọc khách sạn có phòng trống trong khoảng thời gian cần tìm kiếm
    const availableHotels = await Promise.all(hotels.map(async (hotel) => {
      const existingTransactions = await Transaction.find({
        hotel: hotel._id,
        $or: [
          { $and: [{ dateStart: { $gte: startDate } }, { dateStart: { $lt: endDate } }] },
          { $and: [{ dateEnd: { $gt: startDate } }, { dateEnd: { $lte: endDate } }] },
        ],
      });

      const totalRooms = hotel.rooms.reduce((total, room) => total + room.roomNumbers.length, 0);
      const availableRooms = totalRooms - existingTransactions.length;

      if (availableRooms >= numRooms) {
        return { ...hotel._doc, availableRooms };
      } else {
        return null;
      }
    }));

    // Lọc khách sạn có đủ số người
    const filteredHotels = availableHotels.filter((hotel) => {
      return hotel && hotel.availableRooms >= numRooms && hotel.rooms.some((room) => room.maxPeople >= numPeople);
    });

    res.json(filteredHotels);
  } catch (error) {
    console.error('Error searching hotels', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {search_hotels};
