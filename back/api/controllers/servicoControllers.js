const db = require('../../config/db')

module.exports = {
  servicoCadastro,
  servicoInsert,
  servicoImprimir
}

function servicoCadastro(require, response) {
  //const placa = require.body.placa
  //let placa = ''
  //console.log(placa);

  const sqlGet = `SELECT  * FROM  carro`

  db.query(sqlGet, (err, result) => {
 //   placa = result[0].placa;
 //   console.log(placa);
    if(err) throw err
    response.send(result)
  })
}

function servicoInsert(require, response) {
  console.log("Rota Seerviço Encontrada!");
  const entrada = require.body.entrada;
  const saida = require.body.saida;
  const carroId = require.body.carroId;
  const placa = require.body.placa;
  const km = require.body.km;
  const descricao1 = require.body.descricao1;
  const unitario1 = require.body.unitario1;
  const quantidade1 = require.body.quantidade1;
  const total1 = require.body.total1;
  const descricao2 = require.body.descricao2;
  const unitario2 = require.body.unitario2;
  const quantidade2 = require.body.quantidade2;
  const total2 = require.body.total2;
  const descricao3 = require.body.descricao3;
  const unitario3 = require.body.unitario3;
  const quantidade3 = require.body.quantidade3;
  const total3 = require.body.total3;
  const descricao4 = require.body.descricao4;
  const unitario4 = require.body.unitario4;
  const quantidade4 = require.body.quantidade4;
  const total4 = require.body.total4;
  const descricao5 = require.body.descricao5;
  const unitario5 = require.body.unitario5;
  const quantidade5 = require.body.quantidade5;
  const total5 = require.body.total5;
  const quantidadetotal = require.body.quantidadetotal;
  const totalsoma = require.body.totalsoma;

  const sqlPost = `INSERT INTO servico (dataEntrada, dataSaida, carroId, placa, km, descricao1, valorUnit1, qtd1, valor1, descricao2, valorUnit2, qtd2, valor2, descricao3, valorUnit3, qtd3, valor3, descricao4, valorUnit4, qtd4, valor4, descricao5, valorUnit5, qtd5, valor5, somaqtd, valorTotal) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

  db.query(sqlPost, [entrada, saida, carroId, placa ,km, descricao1, unitario1, quantidade1, total1, descricao2, unitario2, quantidade2, total2, descricao3, unitario3, quantidade3, total3, descricao4, unitario4, quantidade4, total4, descricao5, unitario5, quantidade5, total5, quantidadetotal, totalsoma], (err, result) => {
    if(err) throw err
    response.json(result)
  })
}

function servicoImprimir(require, response) {
  const id = require.body.carro
  console.log(`O id é ${id}`);
  const sqlGet = `SELECT * FROM  servico where servicoId = ?`
  db.query(sqlGet, [id], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      response.json(result)
    }
  })
}