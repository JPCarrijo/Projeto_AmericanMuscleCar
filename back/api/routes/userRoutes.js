const controllersUser = require('../controllers/userControllers.js');

server.get('/user', controllersUser.userMenu);

server.get('/user/listar', controllersUser.userGetAll);

server.post('/insert/users', controllersUser.userInsert);
