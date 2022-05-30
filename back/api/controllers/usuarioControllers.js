//const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  usuarioCadastro,
  usuarioGetAll,
  usuarioInsert,
  usuarioLocalizar,
  usuarioUpdate,
  usuarioDelete
}

function usuarioCadastro(require, response) {
  console.log("Rota Usuario Encontrada!!!");
  response.send("Rota Usuario Encontrada!!!")
}

function usuarioGetAll(require, response) {

  const sqlGet = `SELECT * FROM usuario `;
  db.query(sqlGet, (err, result) => {
    if (err) {
      throw err;
    }
    response.send(result)
  })
}

function usuarioInsert(require, response) {
  console.log("Rota Insert Encontrada!!!");

  const nome = require.body.nome;
  const logradouro = require.body.logradouro;
  const numero = require.body.numero;
  const bairro = require.body.bairro;
  const cidade = require.body.cidade;
  const estado = require.body.estado;
  const cep = require.body.cep;
  const cpf = require.body.cpf;
  const fixo = require.body.fixo;
  const celular = require.body.celular;

  const sqlInsert = "INSERT INTO usuario (nome,logradouro,numero,bairro,cidade,estado,cep,cpf,fixo,celular) VALUES (?,?,?,?,?,?,?,?,?,?)";
  db.query(sqlInsert, [nome, logradouro, numero, bairro, cidade, estado, cep, cpf, fixo, celular], (err, result) => {
    if (err) {
      throw err;
    }
    response.json(result)
  })
}

function usuarioLocalizar(require, response) {
  const id = require.params.id
  console.log(`Localizar: ${id}`);

  const sqlGet = `SELECT * FROM usuario WHERE id = ${id}`;
  db.query(sqlGet, id, (err, result) => {

    if (err) throw err
    response.json(result[0])
    console.log(result);
  })
}

function usuarioUpdate(require, response) {
  console.log("Rota UpDate Encontrada!!!");

  const id = require.params.id;
  const nome = require.body.nome;
  const logradouro = require.body.logradouro;
  const numero = require.body.numero;
  const bairro = require.body.bairro;
  const cidade = require.body.cidade;
  const estado = require.body.estado;
  const cep = require.body.cep;
  const cpf = require.body.cpf;
  const fixo = require.body.fixo;
  const celular = require.body.celular;

  const sqlPut = "UPDATE usuario SET nome = ?, logradouro = ?, numero = ?, bairro = ?, cidade = ?, estado = ?, cep = ?, cpf = ?, fixo = ?, celular = ? WHERE id = ?";
  db.query(sqlPut, [nome, logradouro, numero, bairro, cidade, estado, cep, cpf, fixo, celular, id], (err, result) => {
    if (err) {
      throw err;
    }
    response.json(result)
  })
}

function usuarioDelete(require, response) {
  const id = require.params.id
  console.log(id);
  const sqlDelete = `DELETE FROM usuario WHERE id = ${id}`;

  db.query(sqlDelete, id, (err, result) => {
    if (err) throw err
    response.send(result)
    console.log(result);
  })
}