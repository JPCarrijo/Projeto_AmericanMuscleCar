const controllersCarro = require('../controllers/carroControllers.js');


server.get('/carro/listar', controllersCarro.carroCadastro);

server.post('/carro/insert', controllersCarro.carroInsert);