//const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  cadastroGetAll,
  cadastroInsert
}

function cadastroGetAll(require, response) {
  console.log("Rota Cadastro Encontrada!!!");
  const sqlGet = "SELECT * FROM cadastro";
  db.query(sqlGet, (err, result) => {
    if(err) {
      throw err
    } else {
      response.send(result)
    }
  })
}

function cadastroInsert(require, response) {
  console.log("Rota Cadastro Insert Encontrada!!!");
  //response.json("Rota Insert Encontrada!!!")

  const nome = require.body.nome;
  const email = require.body.email;
  const senha = require.body.senha;
  const cidade = require.body.cidade;
  const estado = require.body.estado;
  const cep = require.body.cep;
  const celular = require.body.celular;

  const sqlInsert = "INSERT INTO cadastro (nome,email,senha,cidade,estado,cep,celular) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlInsert, [nome, email, senha, cidade, estado, cep, celular], (err, result) => {
    if (err) {
      throw err;
    }
     response.json(result)
  })
}
