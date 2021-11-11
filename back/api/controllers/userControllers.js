const userModels = require('../models/userModels.js');
const db = require('../../config/db')

module.exports = {
  userMenu,
  userGetAll,
  userInsert
}

function userMenu(req, res) {
  console.log('Rota User Encontrada!');
  res.json('Rota User Encontrada!');
};

function userGetAll(req, res) {
  console.log('Listar Users { M O D E L S }!');

  const sqlGet = "SELECT * FROM  users"
  db.query(sqlGet, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
}

  function userInsert(req, res) {
    console.log("Rota Insert User Encontrada!");

    const nome = req.body.nomeUsuario;
    const senha = req.body.emailUsuario;
    const sqlInsert = "INSERT INTO users (nomeUsuario, senha)VALUES (?,?)";
    db.query(sqlInsert, [nome, senha], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    })
  }
