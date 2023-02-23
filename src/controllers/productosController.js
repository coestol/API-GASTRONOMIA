const db = require('../database/models'); 
//const {validationResult} = require('express-validator')


const productosController = {
    listar: (req, res) => {
        db.Product.findAll()
        .then(productos => {
            return res.status(200).json({
                count: productos.length,
                countByCategory: 1,
                productos: productos,
                status: 200
            })
        })
    },
    producto: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(producto => {
            return res.status(200).json({
                data: producto,
                status: 200
            })
        })
    }
}

module.exports = productosController;