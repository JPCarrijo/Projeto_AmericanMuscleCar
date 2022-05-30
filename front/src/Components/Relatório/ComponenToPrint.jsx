import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import logo from '../../img/logo_quem_somos.png';
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { TableBody } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  th: {
    textAlign: 'center',
    width: '33%',
    fontSize: '16pt'
  },
  td: {
    textAlign: 'center',
    width: '33%',
    fontSize: '14pt'
  },
  thdescricao: {
    textAlign: 'left',
    width: '60%',
    fontSize: '16pt'
  },
  thdescricaosoma: {
    textAlign: 'left',
    width: '73.1%',
    fontSize: '16pt'
  },
  th2: {
    textAlign: 'left',
    width: '13%',
    fontSize: '16pt'
  },
  thdescricao2: {
    textAlign: 'left',
    width: '60%',
    fontSize: '14pt'
  },
  td2: {
    textAlign: 'right',
    width: '13%',
    fontSize: '14pt'
  },
  h1: {
    fontSize: 'clamp(0.5em, 0.5em + 1vw, 1em)',
    textAlign: 'left',
  },
  container: {
    paddingTop: '5vh',
  }
}))
const ComponentToPrint = React.forwardRef((props, ref) => {

  const history = useHistory();

  const classes = useStyles();

  const [evento, setEvento] = useState([]);

  const [servico, setServico] = useState([]);

  const buscaRelatorio = async () => {
    await axios.post(`http://localhost:3001/servico/imprimir`, {
      servico,
    })
      .then(response => setEvento(response.data))
  }

  const listaServico = () => {
    history.push('/listaservicos')
  }

  return (
    <>
      <div
        className="row container-fluid">
        <div
          className="col-md-3">
          <TextField
            id="codigo"
            label="Número da Ordem"
            aria-label="Search"
            variant="standard"
            InputProps={{
              style: {
                fontSize: '14pt',
                width: '10vw'
              }
            }}
            onChange={(e) => setServico(e.target.value)} />
          <Button
            variant="text"
            startIcon={<Search />}
            onClick={buscaRelatorio}
          />
        </div>
        <div
          className="col-md-6">
          <button
            type="button"
            className="btn btn-dark btn-xl float-left"
            name="buttonUsuario"
            style={{
              fontStyle: 'oblique',
              fontWeight: 'bold'
            }}
            onClick={listaServico}>
            Lista Serviços
          </button>
        </div>
      </div>
      <div
        className={classes.container}
        ref={ref}>
        <div
          className="row" style={{
            paddingLeft: '2vw',
            paddingRight: '25vw'
          }}>
          <div
            className="col-md-12 img py-4 mx-1">
            <img
              src={logo}
              className="figure-img img-fluid rounded float-start"
              width="200vw"
              alt=""
              style={{
                border: '1px'
              }} />
            <h5
              className={classes.h1}>
              Auto Tech
            </h5>
            <p className={classes.h1}>
              Auto Tech Ltda <br></br>
              CPNJ: 25.457.785.147/0001-54 <br></br>
              Rua: Ferreira Gomez, 1547 - Jd. Palmeiras - São Paulo <br></br>
              Fone: (16) 3705-8214 <br></br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 17 17">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              (16) 98674-4512
            </p>
          </div>
        </div>
        <div
          className="col-md-12 pt-3"
          style={{
            fontFamily: 'Kanit',
            border: '2px groove black',
            borderRadius: '15px'
          }}>
          <table
            className="table table-hover"
            style={{
              fontSize: '16pt'
            }}>
            <thead>
              <th
                scope="col"
                className={classes.th}>
                Data Entrada
              </th>
              <th
                scope="col"
                className={classes.th}>
                Data Saída
              </th>
            </thead>
            <tbody>
              {evento.map((item) =>
                <>
                  <tr>
                    <td
                      className={classes.td}>
                      {item.data_entrada}
                    </td>
                    <td
                      className={classes.td}>
                      {item.data_saida}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <table
            className="table table-hover"
            style={{
              fontSize: '16pt'
            }}>
            <thead>
              <th
                scope="col"
                className={classes.th}>
                Cód. do Carro
              </th>
              <th
                scope="col"
                className={classes.th}>
                Placa
              </th>
              <th
                scope="col"
                className={classes.th}>
                Km
              </th>
            </thead>
            <tbody>
              {evento.map((item) =>
                <tr>
                  <td
                    key={item.id}
                    className={classes.td}>
                    {item.carroId}
                  </td>
                  <td
                    className={classes.td}>
                    {item.placa}
                  </td>
                  <td
                    className={classes.td}>
                    {item.km}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <table
            className="table table-hover">
            <thead>
              <th
                scope="col"
                className={classes.thdescricao}>
                Descrição
              </th>
              <th
                scope="col"
                className={classes.th2}>
                Unitário
              </th>
              <th
                scope="col"
                className={classes.th2}>
                Quant.
              </th>
              <th
                scope="col"
                className={classes.th2}>
                Valor
              </th>
            </thead>
            <tbody>
              {evento.map((item) =>
                <tr>
                  <td
                    className={classes.thdescricao2}>
                    {item.descricao1}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valorUnit1}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.qtd1}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valor1}
                  </td>
                </tr>
              )}
              {evento.map((item) =>
                <tr>
                  <td
                    className={classes.thdescricao2}>
                    {item.descricao2}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valorUnit2}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.qtd2}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valor2}
                  </td>
                </tr>
              )}
              {evento.map((item) =>
                <tr>
                  <td
                    className={classes.thdescricao2}>
                    {item.descricao3}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valorUnit3}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.qtd3}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valor3}
                  </td>
                </tr>
              )}
              {evento.map((item) =>
                <tr>
                  <td
                    className={classes.thdescricao2}>
                    {item.descricao4}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valorUnit4}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.qtd4}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valor4}
                  </td>
                </tr>
              )}
              {evento.map((item) =>
                <tr>
                  <td
                    className={classes.thdescricao2}>
                    {item.descricao5}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valorUnit5}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.qtd5}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valor5}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <table
            className="table table-hover"
            style={{
              fontSize: '14pt'
            }}>
            <tbody>
              {evento.map((item) =>
                <tr>
                  <th
                    scope="col"
                    className={classes.thdescricaosoma}>
                    Soma Total
                  </th>
                  <td
                    className={classes.td2}>
                    {item.somaqtd}
                  </td>
                  <td
                    className={classes.td2}>
                    {item.valorTotal}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <footer
          className="footer navbar-fixed-bottom text-center">
          <p
            style={{
              textAlign: 'center'
            }}>&copy; 2022 autotech.com.br
          </p>
        </footer>
      </div>
    </>
  );
})

export default ComponentToPrint;