const express = require('express');
const router = express.Router();
const control = require('../controllers/api.controllers');

router
    .post('/', control.listar)
    .post('/detail', control.song)

module.exports = router;