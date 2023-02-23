var express = require('express');
var router = express.Router();
const productosController = require('../controllers/productosController');

/* GET users listing. */
router.get('/productos', productosController.listar);
router.get('/productos/:id', productosController.producto);


module.exports = router;