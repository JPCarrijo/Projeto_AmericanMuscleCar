const express = require("express");
const consign = require("consign");
const cors = require("cors")
// Iniciando o Servidor Express
server = express();
server.use(cors());

server.set('porta', 3001);

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;