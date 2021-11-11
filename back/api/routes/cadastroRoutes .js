const controllersCadastro = require('../controllers/cadastroControllers.js');


server.get('/cadastro/listar', controllersCadastro.cadastroGetAll);

server.post('/cadastro/insert', controllersCadastro.cadastroInsert);