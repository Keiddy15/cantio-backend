const express = require ('express');
const router = new express.Router();
const usuarioController = require('./usuario.controllers')
const db = require('../database');

router.post('/registro', usuarioController.registro);
router.post('/login', usuarioController.login);
router.patch('/editarUsuario', usuarioController.editarUsuario);
router.get('/obtenerUsuarioPorToken/:token', usuarioController.obtenerUsuarioPorToken);

module.exports = router;