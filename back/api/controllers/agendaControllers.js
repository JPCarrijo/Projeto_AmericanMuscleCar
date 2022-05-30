const db = require('../../config/db')

module.exports = {
  agendaGetAll,
  agendaInsert,
  agendaDelete
}

function agendaGetAll(require, response) {
  console.log("Rota Agenda Encontrada!!!");

  const sqlGet = `SELECT id, date_format(dataAgendamento, '%d/%m/%Y') AS dataAgendamento, nome, cpf, email, marca, modelo, ano FROM agendamento`;

  db.query(sqlGet, (err, result) => {
    if (err) {
      throw err
    } else {
      response.send(result)
      console.log(result);
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

function agendaDelete(require, response) {

  const id = require.params.id

  const sqlGet = "DELETE FROM agendamento WHERE id = ?";

  db.query(sqlGet, [id], (err, result) => {

    if (err) {
      throw err
    } else {
      response.send(result)
    }
  })
}