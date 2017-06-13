/**
 * @param {SocketIO.Server} io
 * @return {Router}
 */
module.exports = (io) => {

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
      io.emit('new-code', code);
      res.status(201).json(code);
    } catch (e) {
      res.status(400).json(e);
    }
  });

  router.delete('/:id', async (req,res) => {
    try {
      const code = await codeService.delete(req.params.id);
      io.emit('deleted-code', code.id);
      res.json(code);
    } catch (e) {
      res.status(400).json(e);
    }
  });

  return router;
}
