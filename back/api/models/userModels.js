const conexao = require('../../config/conexao.js');

module.exports = {
  getAllUser,
    //postCadastro
}

function getAllUser(callback) {
    conexao.query(`select * from users`, callback);
}

//function postCadastro()