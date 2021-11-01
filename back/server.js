const http = require('http');
const servidor = require('./config/aplicativo');

http.createServer(servidor).listen(servidor.get('porta'), function() {
    console.log(`\nServidor Rodando na Porta ${server.get('porta')}`);
})


