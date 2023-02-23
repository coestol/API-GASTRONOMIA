var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET users listing. */
router.get('/usuarios', usuariosController.listar);
router.get('/usuarios/:id', usuariosController.usuario);


module.exports = router;