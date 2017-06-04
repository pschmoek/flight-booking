const express = require('express');
const router = express.Router();
const backend = require('../services/code');

router.get('/:id', async (req, res) => {
  try {
    const code = await backend.findCodeById(req.params.id);
    res.json(code);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.get('/', async (req, res) => {
  const codes = await backend.getCodes();
  res.json(codes);
});

router.post('/', async (req, res) => {
  try {
    const code = await backend.addCode(req.body);
    res.json(code);
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
