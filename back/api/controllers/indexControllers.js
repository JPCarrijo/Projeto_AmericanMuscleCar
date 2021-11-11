const db = require('../../config/db.js');

module.exports = {
    indexControllers
}

function indexControllers(req, res)  {
    console.log('Rota Raiz Encontrada!');
    res.json('Rota Raiz Encontrada!');
};

