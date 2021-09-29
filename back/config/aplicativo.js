const express = require('express');
const consign = require('consign');

// Iniciando o Servidor Express
server = express();

server.set('porta', 3003);

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;