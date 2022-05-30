const controllersCarro = require('../controllers/carroControllers.js');


server.get('/carro/listar', controllersCarro.carroCadastro);

server.post('/carro/insert', controllersCarro.carroInsert);

server.get('/carro/localizar/:id', controllersCarro.carroLocalizar);

server.put('/carro/update/:id', controllersCarro.carroUpdate);

server.delete('/carro/delete/:id', controllersCarro.carroDelete);