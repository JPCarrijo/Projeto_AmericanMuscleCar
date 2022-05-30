const controllersUsuario = require('../controllers/usuarioControllers.js');


server.get('/usuario', controllersUsuario.usuarioCadastro);

server.get('/usuario/listar', controllersUsuario.usuarioGetAll);

server.post('/usuario/insert', controllersUsuario.usuarioInsert);

server.get('/usuario/localizar/:id', controllersUsuario.usuarioLocalizar);

server.put('/usuario/update/:id', controllersUsuario.usuarioUpdate);

server.delete('/usuario/delete/:id', controllersUsuario.usuarioDelete);