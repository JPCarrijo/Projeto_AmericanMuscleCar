const controllersUser = require('../controllers/userControllers.js');

server.get('/user/listar', controllersUser.userGetAll);

server.post('/login/users', controllersUser.userLogin);
