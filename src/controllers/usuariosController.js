const db = require('../database/models'); 
//const {validationResult} = require('express-validator')


const usuariosController = {
    listar: (req, res) => {
        db.Users.findAll()
        .then(usuarios => {

            return res.status(200).json({
                count: usuarios.length,
                usuarios: usuarios,
                status: 200
            })
        })
    },
    usuario: (req, res) => {
        db.Users.findByPk(req.params.id)
        .then(usuario => {

            return res.status(200).json({
                usuario: {
                    "id_user": usuario.id_user,
                    "name": usuario.last_name + ' ' + usuario.name,
                    "email": usuario.email,
                    "detail": 'No se'
                },
                status: 200
            })
        })
    }
}

module.exports = usuariosController;