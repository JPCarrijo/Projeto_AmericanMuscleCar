const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  userGetAll,
  userLogin
}

function userGetAll(require, response) {
  console.log('Listar Users { M O D E L S }!');

  const sqlGet = "SELECT * FROM  users"
  db.query(sqlGet, (err, result) => {
    if (err) {
      throw err;
    } else {
      response.send(result);
    }
  });
}

function userLogin(require, response) {
  console.log("Rota Insert User Encontrada!");

  const nome = require.body.nomeUsuario;
  const senha = require.body.senhaUsuario;
  console.log(nome)
  console.log(senha)

  const sqlInsert = "SELECT * FROM cadastro WHERE nome = ? AND senha = ?";
  db.query(sqlInsert, [nome, senha], (err, result) => {
    if (err) {
      response.send({ err: err });
    }
    if (result.length > 0) {
      response.send(result);
      console.log(result);
    } else {
      response.send({ message: `Usuário/Senha não encontrado!` })
    }
  })
}
