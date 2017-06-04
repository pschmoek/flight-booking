const express = require('express');
const router = express.Router();
const backend = require('../services/flight');

router.get('/', async (req, res) => {
  try {
    const flights = await backend.getFlights(req.query.from, req.query.to, req.query.date);
    res.json(flights);
  } catch(e) {
    res.status(404).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const flight = await backend.findFlight(req.params.id);
    res.json(flight);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const flight = await backend.addFlight(req.body);
    res.status(201).location(`${req.baseUrl}/${flight.id}`).json(flight);      
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
