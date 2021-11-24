const db = require('../../config/db')


module.exports = {
  agendaGetAll,
  agendaInsert
}

function agendaGetAll(require, response) {
  console.log("Rota Agenda Encontrada!!!");
  //const id = require.params.id
  //let model = ''

  const sqlGet = `SELECT * FROM agendamento`;

  db.query(sqlGet, (err, result) => {
    //model = result[0].dataAgendamento
    //console.log(model)
    if (err) {
      throw err
    } else {
      response.send(result)
    }
  })
  
}

function agendaInsert(require, response) {
  console.log("Rota Agenda Encontrada!!!");

  const data = require.body.data
  const nome = require.body.nome
  const cpf = require.body.cpf
  const email = require.body.email
  const marca = require.body.marca
  const modelo = require.body.modelo
  const ano = require.body.ano


  const sqlGet = "INSERT INTO agendamento (dataAgendamento,nome,cpf,email,marca,modelo,ano) VALUES (?,?,?,?,?,?,?)";

  db.query(sqlGet, [data, nome, cpf, email, marca, modelo, ano], (err, result) => {

    if (err) {
      throw err
    } else {
      response.send(result)
    }
  })
}

