const controllersServico = require('../controllers/servicoControllers.js');


server.post('/servico/listar', controllersServico.servicoCadastro);

server.post('/servico/insert', controllersServico.servicoInsert);