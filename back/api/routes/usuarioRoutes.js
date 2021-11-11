const controllersUsuario = require('../controllers/usuarioControllers.js');


server.get('/usuario', controllersUsuario.usuarioCadastro);

server.get('/usuario/listar', controllersUsuario.usuarioGetAll);

server.post('/usuario/insert', controllersUsuario.usuarioInsert);