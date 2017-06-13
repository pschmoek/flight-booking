/**
 * @param {SocketIO.Server} io
 * @return {Router}
 */
module.exports = (io) => {

  const express = require('express');
  const router = express.Router();
  const flightService = require('../services/flight');

  router.get('/', async (req, res) => {
    try {
      const flights = 
        await flightService.filterFlights(req.query.from, req.query.to,
          req.query.date, req.query.code);
      res.json(flights);
    } catch(e) {
      res.status(404).json(e);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const flight = await flightService.getFlight(req.params.id);
      res.json(flight);
    } catch (e) {
      res.status(404).json(e);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const flight = await flightService.addFlight(req.body);
      io.emit('new-flight', flight);
      res.status(201).location(`${req.baseUrl}/${flight.id}`).json(flight);      
    } catch (e) {
      res.status(400).json(e);
    }
  });

  return router;
}
