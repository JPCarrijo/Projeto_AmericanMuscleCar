import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import logo from '../../img/logo_quem_somos.png';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    th: {
      textAlign: 'center',
      width: '33%'
    },
    td: {
      textAlign: 'center',
      width: '33%'
    }
}))
const ComponentToPrint = React.forwardRef((props, ref) => {

  const classes = useStyles();

  const [evento, setEvento] = useState([])

  const [servico, setServico] = useState([])

  const [dataIn, setDataIn] = useState([])

  const buscaRelatorio = async () => {
    await axios.post(`http://localhost:3001/servico/imprimir`, {
      servico,
    })
      //.then(response => response.data.dataEntrada)
      .then(response => setEvento(response.data))

    await axios.post(`http://localhost:3001/servico/imprimirdata`, {
      servico,
    })
      //.then(response => response.data.dataEntrada)
      .then(response => setDataIn(response.data))
  }

  console.log(evento);
  console.log(dataIn);


  return (
    <>
      <div
        className="row ">
        <div
          className="col-md-12">
          <div
            className="col-md-4">
            <TextField
              id="codigo"
              label="Número da Ordem"
              aria-label="Search"
              variant="standard"
              //value={carro}
              InputProps={{ style: { fontSize: '17pt' } }}
              onChange={(e) => setServico(e.target.value)} />
            <Button
              variant="contained"
              startIcon={<Search />}
              onClick={buscaRelatorio}
            />
          </div>
          <div
            className="col-md-6 text-left"
            style={{ marginTop: '2vh' }}> </div>
        </div>
        <div
          className="row" ref={ref}>
          <div
            className="col-md-12"
            style={{ marginTop: '3vh', fontFamily: 'Kanit' }}>
            <div
              className="row">
              <div
                className="col-md-4 img ">
                <img
                  src={logo}
                  className="rounded mx-auto d-block"
                  width="300vw" alt="Responsive image" />
              </div>
              <div
                className="col-md-8 text-center"
                style={{ marginTop: '3.5vh' }}>
                <h3
                  className="h3"> Auto Tech</h3>
                <h6> Auto Tech Ltda </h6>
                <h6> CPNJ: 25.457.785.147/0001-54 </h6>
                <h6> Ferreira Gomez, 1547 - Jd. Palmeiras - São Paulo </h6>
                <h6 > Fone: (16) 3705-8214 </h6>
                <h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg> (16) 98674-4512</h6>
              </div>
            </div>
          </div>
          <div
            className="col-md-12"
            style={{ marginTop: '5vh', fontFamily: 'Kanit' }}>
            <table
              className="table table-bordered"
              style={{ fontSize: '20pt' }}>
              {/* <thead>
                <th scope="col"> Data Entrada </th>
                <th scope="col"> Data Saída </th>
              </thead>
              <tbody>
                {dataIn.map((item) =>
                  <tr>
                    <td scope="row" key={item.id}> {item.data_entrada} </td>
                    <td> {item.data_saida} </td>
                  </tr>
                )}
              </tbody> */}
              <thead>
                <th scope="row" className={classes.th}> Data Entrada </th>
                <th scope="row" className={classes.th}> Data Saída </th>
              </thead>
              <tbody>
              {dataIn.map((item) =>
                <>
                  <td className={classes.td}>{item.data_entrada}</td>
                  <td className={classes.td}>{item.data_saida}</td>
                </>
              )}
              </tbody>
            </table>
            <table
              className="table table-bordered"
              style={{ fontSize: '20pt' }}>
              <thead>
                <th scope="col" className={classes.th}> Cód. do Carro </th>
                <th scope="col" className={classes.th}> Placa </th>
                <th scope="col" className={classes.th}> Km </th>
              </thead>
              <tbody>
                {evento.map((item) =>
                  <tr>
                    <td scope="row" key={item.id} className={classes.td}> {item.carroId} </td>
                    <td className={classes.td}> {item.placa} </td>
                    <td className={classes.td}> {item.km} </td>
                  </tr>
                )}
              </tbody>
            </table>
            <table
              className="table table-bordered"
              style={{ fontSize: '20pt' }}>
              <thead>
                <th scope="col"> Descrição </th>
                <th scope="col"> Unit. </th>
                <th scope="col"> Quant. </th>
                <th scope="col"> Valor </th>
              </thead>
              <tbody>
                {evento.map((item) =>
                  <tr>
                    <th scope="row" style={{ textAlign: 'left', width: '60%' }}> {item.descricao1} </th>
                    <td> {item.valorUnit1} </td>
                    <td> {item.qtd1} </td>
                    <td> {item.valor1} </td>
                  </tr>
                )}
                {evento.map((item) =>
                  <tr>
                    <th scope="row" style={{ textAlign: 'left', width: '60%' }}> {item.descricao2} </th>
                    <td> {item.valorUnit2} </td>
                    <td> {item.qtd2} </td>
                    <td> {item.valor2} </td>
                  </tr>
                )}
                {evento.map((item) =>
                  <tr>
                    <th scope="row" style={{ textAlign: 'left', width: '60%' }}> {item.descricao3} </th>
                    <td> {item.valorUnit3} </td>
                    <td> {item.qtd3} </td>
                    <td> {item.valor3} </td>
                  </tr>
                )}
                {evento.map((item) =>
                  <tr>
                    <th scope="row" style={{ textAlign: 'left', width: '60%' }}> {item.descricao4} </th>
                    <td> {item.valorUnit4} </td>
                    <td> {item.qtd4} </td>
                    <td> {item.valor4} </td>
                  </tr>
                )}
                {evento.map((item) =>
                  <tr>
                    <th scope="row" style={{ textAlign: 'left', width: '60%' }}> {item.descricao5} </th>
                    <td> {item.valorUnit5} </td>
                    <td> {item.qtd5} </td>
                    <td> {item.valor5} </td>
                  </tr>
                )}
              </tbody>
            </table>
            <table
              className="table table-bordered"
              style={{ fontSize: '20pt' }}>
              <tbody>
                {evento.map((item) =>
                  <tr>
                    <th scope="row" style={{ textAlign: 'left', width: '60%' }}> Soma Total </th>
                    <td style={{ width: '13.3%' }}>  </td>
                    <td style={{ width: '13.5%' }}> {item.somaqtd} </td>
                    <td > {item.valorTotal} </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <footer
            className="footer navbar-fixed-bottom text-center">
            <p style={{ textAlign: 'center' }}>&copy; 2021 Auto Tech.com</p>
          </footer>
        </div>
      </div>
    </>
  );
})

export default ComponentToPrint;