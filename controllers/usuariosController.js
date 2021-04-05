const usuarios = require('../models/usuarios');

const usuariosController = {
    index:(req, res) => {
        res.send(usuarios.listarUsuarios());
    }
}

module.exports = usuariosController;