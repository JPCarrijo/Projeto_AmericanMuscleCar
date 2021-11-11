//const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  carroCadastro,
  carroInsert
}

function carroCadastro(require, response) {
  console.log("Rota Carro Encontrada!!!");
  const sqlGet = "SELECT * FROM  carro";
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
  //response.json("Rota Insert Encontrada!!!")

  const marca = require.body.marca;
  const modelo = require.body.modelo;
  const cor = require.body.cor;
  const ano = require.body.ano;
  const placa = require.body.placa;
  const km = require.body.km;

  const sqlInsert = "INSERT INTO carro (marca,modelo,cor,ano,placa,km) VALUES (?,?,?,?,?,?)";
  db.query(sqlInsert, [marca,modelo,cor,ano,placa,km], (err, result) => {
    if (err) {
      throw err;
    }
     response.json(result)
  })
}
