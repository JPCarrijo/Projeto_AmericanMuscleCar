const controllersUsuario = require('../controllers/usuarioControllers.js');

server.get('/usuario', controllersUsuario.usuarioMenu);

server.get('/usuario/listar', controllersUsuario.usuarioGetAll);


