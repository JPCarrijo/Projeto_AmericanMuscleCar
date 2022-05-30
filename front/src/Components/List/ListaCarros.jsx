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
export default function ListaCarros() {

  const classes = useStyles()

  const [listaCarros, setListaCarros] = useState([])

  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:3001/carro/listar`)
      .then((response) => response.json())
      .then((response) => setListaCarros(response))
  }, [])


  function voltarServico() {
    history.push('/servico')
  }

  const carroRow: GridColDef[] = [
    {
      field: 'id',
      headerClassName: 'super-app-theme--header',
      headerName: 'CarroID',
      align: 'center',
      width: 140,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'usuarioId',
      headerName: 'UsuárioID',
      align: 'center',
      width: 170,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'marca',
      headerName: 'Marca',
      width: 140,
    },
    {
      field: 'modelo',
      headerName: 'Modelo',
      width: 140,
    },
    {
      field: 'cor',
      headerName: 'Cor',
      width: 140,
    },
    {
      field: 'ano',
      headerName: 'Ano',
      width: 120,
      sortComparator: (v1, v2) => Number(v1) > Number(v2) ? 1 : -1
    },
    {
      field: 'placa',
      headerName: 'Placa',
      width: 150,
    },
    {
      field: 'km',
      headerName: 'Km',
      width: 120
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
                      onClick={voltarServico}>
                      Voltar Serviços
                    </button>
                  </div>
                  <Paper
                    className={classes.paper}
                    elevation={50}
                  >
                    <DataGrid
                      className={classes.dataGrid}
                      rows={listaCarros}
                      columns={carroRow}
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