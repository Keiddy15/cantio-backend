const express = require ('express');
const router = new express.Router();
const cancionesController = require('./canciones.controllers')
const db = require('../database');

router.get('/obtenerNombres', cancionesController.obtenerNombres);
router.get('/obtenerCanciones/:id', cancionesController.obtenerUsuariosCancionesPorId);
router.get('/obtenerCancionesParaRegalar/:id', cancionesController.obtenerUsuariosCancionesParaRegalarPorId);
router.post('/reproducirCanciones', cancionesController.reproducirCancion);
router.post('/regalarCanciones', cancionesController.regalarCanciones);

module.exports = router;