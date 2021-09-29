const conexao = require('../../config/conexao.js');

module.exports = {
    getAllUsuario
}

function getAllUsuario (callback) {
    conexao.query(`select * from usuario `, callback);
}