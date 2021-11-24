const express = require ('express');
const router = new express.Router();
const promocionController = require('./promocion.controllers')
const db = require('../database');

router.post('/crear', promocionController.crearPromocion);
router.put('/editar', promocionController.editarPromocion);
router.delete('/eliminar', promocionController.eliminarPromocion);
router.get('/obtener', promocionController.obtenerPromocion);

module.exports = router;