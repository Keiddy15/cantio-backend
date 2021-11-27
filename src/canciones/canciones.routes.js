const express = require ('express');
const router = new express.Router();
const cancionesController = require('./canciones.controllers')
const db = require('../database');

router.get('/obtenerNombres', cancionesController.obtenerNombres);
router.get('/obtenerCanciones/:id', cancionesController.obtenerUsuariosCancionesPorId);
router.post('/reproducirCanciones', cancionesController.reproducirCancion);


module.exports = router;