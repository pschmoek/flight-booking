const backend = require('../services/flight');

module.exports = (app) => {
  app.get('/api/flights/:id', (req, res) => {
    backend.findFlight(req.params.id)
      .then(f => res.json(f), e => res.status(404).json(e));
  });
  
  app.get('/api/flights', (req, res) => {
    backend.getFlights(req.query.from, req.query.to, req.query.date)
      .then(f => res.json(f), e => res.status(404).json(e));
  });

  app.post('/api/flights/:code/:date', (req, res) => {
    const result = backend.addFlight(req.params.code, req.params.date, req.body);

    res.json(result);
  });
};
