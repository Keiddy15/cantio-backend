const express = require ('express');
const router = new express.Router();
const pagosController = require('./pagos.controllers')
const db = require('../database');

router.post('/guardar', pagosController.guardarInformacionPago);

module.exports = router;