const controllersAgenda = require('../controllers/agendaControllers.js');


server.get('/agenda/listar', controllersAgenda.agendaGetAll);

server.post('/agenda/insert', controllersAgenda.agendaInsert);