const controllersServico = require('../controllers/servicoControllers.js');


server.get('/servico/listar', controllersServico.servicoListar);

server.post('/servico/insert', controllersServico.servicoInsert);

server.post('/servico/imprimir', controllersServico.servicoImprimir);