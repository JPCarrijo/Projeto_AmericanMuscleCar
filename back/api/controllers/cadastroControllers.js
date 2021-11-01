const cadastroModels = require('../models/cadastroModels.js');

module.exports = {
  cadastroMenu,
  cadastroGetAll,
  cadastroPost
}

function cadastroMenu(req, res) {
  console.log('Rota Cadastro Encontrada!');
  res.json('Rota Cadastro Encontrada!');
};

function cadastroGetAll(req, res) {
  console.log('Listar Cadastro { M O D E L S }!');
  //res.json('Listar Usuario { M O D E L S }!')
  cadastroModels.getAllCadastro(function (err, resposta) {
    console.log(`Retorno de Cadastro { M O D E L S }`);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  })
}

function cadastroPost(req, res) {
  cadastroModels.postCadastro((err, resposta) => {
    if(err) {
      throw err;
    } else {
      res.json(resposta)
    }
  })
}

