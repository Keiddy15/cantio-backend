const express = require ('express');
const router = new express.Router();
const pagosController = require('./pagos.controllers')
const db = require('../database');

router.post('/guardar', pagosController.guardarInformacionPago);
router.get('/obtenerIdUltimoPago', pagosController.obtenerIdUltimoPago);

module.exports = router;