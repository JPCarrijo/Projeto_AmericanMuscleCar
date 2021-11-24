//const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  carroCadastro,
  carroInsert
}

function carroCadastro(require, response) {
  console.log("Rota Carro Encontrada!!!");
  const id = require.params.id
  const sqlGet = `SELECT marca, modelo FROM carro where carroId = ${id}`
  console.log(`Este é a placa: ${id}`);
  db.query(sqlGet, [id], (err, result) => {
    if(err) {
      throw err
    } else {
      response.send(result)
    }
  })
}

function carroInsert(require, response) {
  console.log("Rota Insert Encontrada!!!");
  //response.json("Rota Insert Encontrada!!!")

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
