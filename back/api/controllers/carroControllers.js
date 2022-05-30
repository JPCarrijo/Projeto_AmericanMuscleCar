//const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  carroCadastro,
  carroInsert,
  carroLocalizar,
  carroUpdate,
  carroDelete
}

function carroCadastro(require, response) {
  console.log("Rota Carro Encontrada!!!");

  const sqlGet = `SELECT * FROM carro `

  db.query(sqlGet, (err, result) => {
    if(err) {
      throw err
    } else {
      response.send(result)
    }
  })
}

function carroInsert(require, response) {
  console.log("Rota Insert Encontrada!!!");

  const usuarioId = require.body.codigo;
  const marca = require.body.marca;
  const modelo = require.body.modelo;
  const cor = require.body.cor;
  const ano = require.body.ano;
  const placa = require.body.placa;
  const km = require.body.km;

  const sqlInsert = "INSERT INTO carro (usuarioId,marca,modelo,cor,ano,placa,km) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlInsert, [usuarioId,marca,modelo,cor,ano,placa,km], (err, result) => {
    if (err) {
      throw err;
    }
     response.json(result)
  })
}

function carroLocalizar(require, response) {
  const id = require.params.id;
  console.log(`Id do localizar = ${id}`)

  const sqlGet = `SELECT * FROM carro WHERE id = ${id}`;

  db.query(sqlGet, id, (err, result) => {
    if (err) {
      throw err
    }
    response.json(result[0])
    console.log(result[0])
  })
}

function carroUpdate(require, response) {
  
  const id = require.params.id;
  const marca = require.body.marca;
  const modelo = require.body.modelo;
  const cor = require.body.cor;
  const ano = require.body.ano;
  const placa = require.body.placa;
  const km = require.body.km;

  const sqlPut = `UPDATE carro SET  marca = ?, modelo = ?, cor = ?, ano = ?, placa = ?, km = ? WHERE id = ${id}`;

  db.query(sqlPut, [marca, modelo, cor, ano, placa, km, id], (err, result) => {
    if (err) {
      throw err
    }
    response.json(result)
  })
}

function carroDelete(require, response) {
  console.log("Rota Delete Encontrada!!!");
  const id = require.params.id
  console.log(`Este é o id: ${id}`);
  const sqlDelete = `DELETE FROM carro WHERE id = ${id}`;
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      throw err
    }
    response.json(result)
  })
}
