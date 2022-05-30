const express = require("express");
const consign = require("consign");
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

server.listen(port, function() {
  console.log(`Servidor rodando na porta ${port}`);
})