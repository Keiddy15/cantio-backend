const express = require ('express');
const router = new express.Router();
const variablesController = require('./variables.controllers')
const db = require('../database');

router.put('/editar', variablesController.editarVariables);
router.get('/obtener', variablesController.obtenerVariables);

module.exports = router;