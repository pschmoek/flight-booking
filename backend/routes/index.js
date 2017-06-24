/**
 * @param {SocketIO.Server} io
 * @return {Router}
 */
module.exports = (io) => {
  
  const express = require('express');
  const router = express.Router();
  const bodyParser = require('body-parser');

  const flightRoutes = require('./flights')(io);
  const codeRoutes = require('./codes')(io);
  const bookingRoutes = require('./bookings')(io);

  router.use(bodyParser.json({ type: 'application/json' }));

  router.use('/flights', flightRoutes);
  router.use('/codes', codeRoutes);
  router.use('/bookings', bookingRoutes);

  return router;
}
