const controllersCadastro = require('../controllers/cadastroControllers.js');


server.get('/cadastro', controllersCadastro.cadastroMenu);

server.get('/cadastro/listar', controllersCadastro.cadastroGetAll);

server.post('/cadastro/adicionar', controllersCadastro.cadastroPost);


