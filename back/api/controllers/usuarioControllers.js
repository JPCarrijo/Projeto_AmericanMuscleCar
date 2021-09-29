const usuarioModels = require('../models/usuarioModels.js');

module.exports = {
    usuarioMenu,
    usuarioGetAll,
}

function usuarioMenu(req, res)  {
    console.log('Rota Usuário Encontrada!');
    res.json('Rota Usuário Encontrada!');
};

function usuarioGetAll(req, res) {
    console.log('Listar Usuario { M O D E L S }!');
    //res.json('Listar Usuario { M O D E L S }!')
    usuarioModels.getAllUsuario(function(err, resposta) {
        console.log(`Retorno de Usuario { M O D E L S }`);
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
