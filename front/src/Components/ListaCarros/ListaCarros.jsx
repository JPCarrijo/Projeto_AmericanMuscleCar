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

  //console.log(listaCarros);
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
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'usuarioId',
      //headerClassName: 'super-app-theme--header',
      headerName: 'UsuárioID',
      align: 'center',
      width: 170,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'marca',
      headerName: 'Marca',
      width: 140,
      //flex: true
    },
    {
      field: 'modelo',
      headerName: 'Modelo',
      width: 140,
      //flex: true
    },
    {
      field: 'cor',
      headerName: 'Cor',
      width: 140,
      //flex: true
    },
    {
      field: 'ano',
      headerName: 'Ano',
      width: 120,
      //flex: true,
      sortComparator: (v1, v2) => Number(v1) > Number(v2) ? 1 : -1
    },
    {
      field: 'placa',
      headerName: 'Placa',
      width: 150,
      //flex: true
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
        style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)', minHeight: '100vh' }}>
        <div
          className="container py-5 h-100" >
          <div
            className="row d-flex justify-content-center align-items-center h-100" >
            <div
              className="col col-xl-12" >
              <div
                role="main"
                className="card my-4 py-3"
                style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '2vw' }}>
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
                        fontStyle: 'oblique', fontWeight: 'bold'
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
                  {/* <div
                    className="col-md-8">

                    </div> */}
                  {/* <table
                    className="table table-hover"
                    style={{ fontSize: '14pt' }}>
                    <thead
                      className="">
                      <tr
                        style={{
                          textAlign: 'left'
                        }}>
                        <th
                          scope="col"> Cód. Carro
                        </th>
                        <th
                          scope="col"> Cód. Cliente
                        </th>
                        <th
                          scope="col"> Marca
                        </th>
                        <th
                          scope="col"> Modelo
                        </th>
                        <th
                          scope="col"> Ano
                        </th>
                        <th
                          scope="col"> Placa
                        </th>
                        <th
                          scope="col"> Cor
                        </th>
                        <th
                          scope="col"> Km
                        </th>
                      </tr>
                    </thead>
                    <tbody className={classes.tbody}>
                      {listaCarros.map((car) =>
                        <tr style={{ textAlign: 'left' }}>
                          <th scope="row" key={car.id} style={{ textAlign: 'center' }}> {car.id} </th>
                          <td style={{ textAlign: 'center' }}> {car.usuarioId} </td>
                          <td> {car.marca} </td>
                          <td> {car.modelo} </td>
                          <td> {car.ano} </td>
                          <td> {car.placa} </td>
                          <td> {car.cor} </td>
                          <td> {car.km} </td>
                        </tr>
                      )}
                    </tbody>
                  </table> */}
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
            marginTop: '2.5vh'}}>&copy; 2022 autotech.com.buscaRelatorio</p>
      </footer>
        </div>
      </section>
    </>
  )
}