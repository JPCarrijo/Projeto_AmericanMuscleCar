const conexao = require('../../config/conexao.js');
const { cadastroGetAll } = require('../controllers/cadastroControllers.js');

module.exports = {
    getAllCadastro,
    postCadastro
}

function getAllCadastro(callback) {
    conexao.query(`select * from cadastro`, callback);
}

function postCadastro(customer, callback) {
  const m_sql = 'INSERT INTO cadastro (nome, logradouro, numero, bairro, cidade, estado, cep, rg, cpf, nascimento, fixo, celular, civil, marca, modelo, cor, ano, placa, km) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'; 
  conexao.query(m_sql, callback);
}