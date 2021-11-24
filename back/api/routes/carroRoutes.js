const controllersCarro = require('../controllers/carroControllers.js');


server.get('/carro/listar/:id', controllersCarro.carroCadastro);

server.post('/carro/insert', controllersCarro.carroInsert);