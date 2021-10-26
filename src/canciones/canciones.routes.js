const express = require ('express');
const router = new express.Router();
const cancionesController = require('./canciones.controllers')
const db = require('../database');

router.get('/obtenerNombres', cancionesController.obtenerNombres);


module.exports = router;