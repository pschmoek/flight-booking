/**
 * @param {SocketIO.Server} io
 * @return {Router}
 */
module.exports = (io) => {

  const express = require('express');
  const router = express.Router();
  const bookingService = require('../services/booking');

  router.post('/', async (req, res) => {
    try {
      const booking = await bookingService.addBooking(req.body);
      res.status(201).json(booking);
      io.emit('new-booking', booking);
    } catch(e) {
      res.status(400).json(e);
    }
  });

  return router;
}
