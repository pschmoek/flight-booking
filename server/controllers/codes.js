const backend = require('../services/code');

module.exports = (app) => {
  app.get('/api/codes/:id', (req, res) => {
    backend.findCodeById(req.params.id)
      .then(c => res.json(c), e => res.status(404).json(e));
  });

  app.get('/api/codes', (req, res) => {
    backend.getCodes().then(c => res.json(c));
  });
};
