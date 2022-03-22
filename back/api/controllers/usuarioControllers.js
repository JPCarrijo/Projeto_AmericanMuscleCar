//const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  usuarioCadastro,
  usuarioGetAll,
  usuarioInsert,
  usuarioLocalizar
}

function usuarioCadastro(require, response) {
  console.log("Rota Usuario Encontrada!!!");
  response.send("Rota Usuario Encontrada!!!")
}

function usuarioGetAll(require, response) {
  
  const sqlGet = `SELECT * FROM usuario `;
  db.query(sqlGet, (err, result) => {
    if(err) {
      throw err;
    }  
    response.send(result)
  })
}

function usuarioInsert(require, response) {
  console.log("Rota Insert Encontrada!!!");
  //response.json("Rota Insert Encontrada!!!")

  const nome = require.body.nome;
  const logradouro = require.body.logradouro;
  const numero = require.body.numero;
  const bairro = require.body.bairro;
  const cidade = require.body.cidade;
  const estado = require.body.estado;
  const cep = require.body.cep;
  //const rg = require.body.rg;
  const cpf = require.body.cpf;
  const fixo = require.body.fixo;
  const celular = require.body.celular;
  //const civil = require.body.civil;

  const sqlInsert = "INSERT INTO usuario (nome,logradouro,numero,bairro,cidade,estado,cep,cpf,fixo,celular) VALUES (?,?,?,?,?,?,?,?,?,?)";
  db.query(sqlInsert, [nome, logradouro, numero, bairro, cidade, estado, cep, cpf, fixo, celular], (err, result) => {
    if (err) {
      throw err;
    }
     response.json(result)
  })
}

function usuarioLocalizar(require, response) {
  const text = require.params.nome
  console.log(text);
  const sqlGet = `SELECT * FROM usuario where nome = ${text}`;
  db.query(sqlGet, text, (err, result) => {
    if(err) throw err
    response.send(result)  
  })
}
