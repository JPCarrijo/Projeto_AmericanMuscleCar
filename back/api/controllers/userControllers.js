const userModels = require('../models/userModels.js');


module.exports = {
  userMenu,
  userGetAll
}

function userMenu(req, res) {
  console.log('Rota User Encontrada!');
  res.json('Rota User Encontrada!');
};

function userGetAll(req, res) {
  console.log('Listar Users { M O D E L S }!');
  //res.json('Listar Usuario { M O D E L S }!')
  userModels.getAllUser(function (err, resposta) {
    console.log(`Retorno de Users { M O D E L S }`);

    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  })
}
