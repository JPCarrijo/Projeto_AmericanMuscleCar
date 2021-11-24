const db = require('../../config/db')

module.exports = {
  getByIdUsuario,
}

function getByIdUsuario (text, callback) {
  db.query(`select * from usuario where nome = ${text}`, callback)
}