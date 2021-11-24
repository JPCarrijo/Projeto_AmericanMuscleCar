/*
const http = require('http');
const servidor = require('./config/aplicativo');

http.createServer(servidor).listen(servidor.get('porta'), function() {
    console.log(`\nServidor Rodando na Porta ${server.get('url')}`);
})
*/

const express = require("express");
const consign = require("consign");
//const moment = require("moment")
const cors = require("cors");

// Iniciando o Servidor Express
server = express();
server.use(cors());
server.use(express.urlencoded())
server.use(express.json())

const port = process.env.PORT || 3001
server.set('porta', 3001);
server.set('url', 'https://localhost:3001')

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

/*
server.post("/insert", (req, res) => {
  res.send("Olá Mundo!")

  const usuario = req.body.usuario;
  const senha = req.body.senha;

  const m_sql = "insert into users (nomeUsuario, senha) values (?,?)";
  db.query(m_sql, [usuario, senha], (err, result) => {
    console.log(result);
  })
})
*/
server.listen(port, function() {
  console.log(`Servidor rodando na porta ${port}`);
  //let data = moment().format(`DD/MM/YYYY`)
  //console.log(data);
})

//module.exports = server;