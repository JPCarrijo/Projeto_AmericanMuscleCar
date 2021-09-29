const controllersIndex = require('../controllers/indexControllers.js');

server.get('/', controllersIndex.indexControllers);

