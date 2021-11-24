const controllersCadastro = require('../controllers/cadastroControllers.js');


server.get('/cadastro/listar/:id', controllersCadastro.cadastroGetAll);

server.post('/cadastro/insert', controllersCadastro.cadastroInsert);