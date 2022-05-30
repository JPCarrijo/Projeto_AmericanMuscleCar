import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  tbody: {
    fontSize: '12pt',
  },
  dataGrid: {
    backgroundColor: 'rgb(255, 254, 125)',
    borderRadius: '20px',
    fontSize: '12pt',
  },
  paper: {
    border: '1px solid',
    boxShadow: '0 0 2em black'
  }
}))
export default function ListaServicos() {

  const classes = useStyles();

  const [listaServicos, setListaServicos] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      getServicos()
    }, 1000)
  }, [])

  async function getServicos() {
    fetch(`http://localhost:3001/servico/listar`)
      .then((response) => response.json())
      .then((response) => setListaServicos(response))
  }

  console.log(listaServicos)

  function voltarRelatorio() {
    history.push('/relatorio')
  }

  const servicoRow: GridColDef[] = [
    {
      field: 'id',
      headerClassName: 'super-app-theme--header',
      headerName: 'ID',
      align: 'center',
      width: 120,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'dataEntrada',
      headerName: 'Data Entrada',
      align: 'center',
      width: 180,
    },
    {
      field: 'dataSaida',
      headerName: 'Data Saída',
      align: 'center',
      width: 163,
    },
    {
      field: 'carroId',
      headerName: 'CarroID',
      align: 'center',
      width: 140,
    },
    {
      field: 'placa',
      headerName: 'Placa',
      align: 'center',
      width: 130,
    },
    {
      field: 'km',
      headerName: 'KM',
      align: 'center',
      width: 140,
    },
    {
      field: 'descricao1',
      headerName: 'Descrição',
      align: 'center',
      width: 160,
    },
    {
      field: 'valorUnit1',
      headerName: 'Unitário',
      align: 'center',
      width: 142,
    },
    {
      field: 'qtd1',
      headerName: 'Quantidade',
      align: 'center',
      width: 170,
    },
    {
      field: 'valor1',
      headerName: 'Total',
      align: 'center',
      width: 140,
    },
    {
      field: 'descricao2',
      headerName: 'Descrição',
      align: 'center',
      width: 160,
    },
    {
      field: 'valorUnit2',
      headerName: 'Unitário',
      align: 'center',
      width: 142,
    },
    {
      field: 'qtd2',
      headerName: 'Quantidade',
      align: 'center',
      width: 170,
    },
    {
      field: 'valor2',
      headerName: 'Total',
      align: 'center',
      width: 140,
    },
    {
      field: 'descricao3',
      headerName: 'Descrição',
      align: 'center',
      width: 160,
    },
    {
      field: 'valorUnit3',
      headerName: 'Unitário',
      align: 'center',
      width: 142,
    },
    {
      field: 'qtd3',
      headerName: 'Quantidade',
      align: 'center',
      width: 170,
    },
    {
      field: 'valor3',
      headerName: 'Total',
      align: 'center',
      width: 140,
    },
    {
      field: 'descricao4',
      headerName: 'Descrição',
      align: 'center',
      width: 160,
    },
    {
      field: 'valorUnit4',
      headerName: 'Unitário',
      align: 'center',
      width: 142,
    },
    {
      field: 'qtd4',
      headerName: 'Quantidade',
      align: 'center',
      width: 170,
    },
    {
      field: 'valor4',
      headerName: 'Total',
      align: 'center',
      width: 140,
    },
    {
      field: 'descricao5',
      headerName: 'Descrição',
      align: 'center',
      width: 160,
    },
    {
      field: 'valorUnit5',
      headerName: 'Unitário',
      align: 'center',
      width: 142,
    },
    {
      field: 'qtd5',
      headerName: 'Quantidade',
      align: 'center',
      width: 170,
    },
    {
      field: 'valor5',
      headerName: 'Total',
      align: 'center',
      width: 140,
    },
    {
      field: 'somaqtd',
      headerName: 'Soma Quant.',
      align: 'center',
      width: 190,
    },
    {
      field: 'valorTotal',
      headerName: 'Soma Total',
      align: 'center',
      width: 190,
    },
    {
      field: 'pagamento',
      headerName: 'Pagamento',
      align: 'center',
      width: 180,
    },
  ]

  return (
    <>
      <section
        className="vh-100"
        style={{
          backgroundColor: 'rgba(6, 36, 21, 0.78)',
          minHeight: '100vh'
        }}>
        <div
          className="container py-5 h-100" >
          <div
            className="row d-flex justify-content-center align-items-center h-100" >
            <div
              className="col col-xl-12" >
              <div
                role="main"
                className="card my-4 py-3"
                style={{
                  borderRadius: '1rem',
                  boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)',
                  padding: '2vw'
                }}>
                <div
                  className="row"
                  style={{
                    borderBottom: '1px ridge',
                    paddingBottom: '2vh'
                  }}>
                  <div
                    className="col-md-12 ">
                    <button
                      type="button"
                      className="btn btn-dark btn-xl my-2"
                      name="buttonUsuario"
                      style={{
                        fontStyle: 'oblique',
                        fontWeight: 'bold'
                      }}
                      onClick={voltarRelatorio}>
                      Voltar Relatório
                    </button>
                  </div>
                  <Paper
                    className={classes.paper}
                    elevation={50}
                  >
                    <DataGrid
                      className={classes.dataGrid}
                      rows={listaServicos}
                      columns={servicoRow}
                      pageSize={5}
                      autoHeight={true}
                      disableSelectionOnClick={true} />
                  </Paper>
                </div>
              </div>
            </div>
          </div>
          <footer
            className="footer navbar-fixed-bottom text-center">
            <p
              style={{
                textAlign: 'center',
                color: 'white',
                marginTop: '2.5vh'
              }}>&copy; 2022 autotech.com.br
            </p>
          </footer>
        </div>
      </section>
    </>
  )
}