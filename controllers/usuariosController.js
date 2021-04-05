const usuariosController = {
    index:(req, res) => {
        res.send('Estou exibindo essa mensagem através do controller!');
    }
}

module.exports = usuariosController;