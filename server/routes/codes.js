const express = require('express');
const router = express.Router();
const codeService = require('../services/code');

router.get('/', async (req, res) => {
  const codes = await codeService.getAll();
  res.json(codes);
});

router.post('/', async (req, res) => {
  try {
    const code = await codeService.addCode(req.body);
    res.status(201).json(code);
  } catch (e) {
    res.status(400).json(e);
  }
});

router.delete('/:id', async (req,res) => {
  try {
    const code = await codeService.delete(req.params.id);
    res.json(code);
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
