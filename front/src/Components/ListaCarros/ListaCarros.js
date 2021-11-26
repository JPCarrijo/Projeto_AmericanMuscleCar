import { useEffect, useState } from "react";
import { useHistory } from "react-router";
export default function ListaCarros() {

  const [listaCarros, setListaCarros] = useState([])

  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:3001/carro/listar`)
      .then((response) => response.json())
      .then((response) => setListaCarros(response))
  }, [])

  //console.log(listaCarros);
  function voltarServico() {
    history.push('/servico2')
  }

  return (
    <>
      <section
        className="container-fluid h-100 d-inline-block"
        style={{ paddingTop: '11.5vh', paddingBottom: '10.2vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', minHeight: '97.5vh' }}>
        <div
          className="container py-5 h-100" >
          <div
            className="row d-flex justify-content-center align-items-center h-100" >
            <div
              className="col col-xl-12" >
              <div
                role="main"
                className="card"
                style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>
                <div
                  className="row">
                  <div
                    className="col-md-12 "
                    style={{ textAlign: 'right', marginBottom: '1vh' }}>
                    <button
                      type="button"
                      className="btn btn-dark me-md-6 btn-lg" name="buttonUsuario"
                      style={{ fontStyle: 'oblique', fontWeight: 'bold' }}
                      onClick={voltarServico}>
                      Voltar Serviços </button>
                  </div>
                  <div
                    className="col-md-8"
                    style={{ paddingTop: '1vh', paddingLeft: '3.3vw' }}></div>
                  <table
                    className="table table-hover"
                    style={{ fontSize: '17pt' }}>
                    <thead
                      className="">
                      <tr style={{ textAlign: 'left' }}>
                        <th scope="col"> Cód. Carro </th>
                        <th scope="col"> Cód. Cliente </th>
                        <th scope="col"> Marca </th>
                        <th scope="col"> Modelo </th>
                        <th scope="col"> Ano </th>
                        <th scope="col"> Placa </th>
                        <th scope="col"> Cor </th>
                        <th scope="col"> Km </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listaCarros.map((car) =>
                        <tr style={{ textAlign: 'left' }}>
                          <th scope="row" key={car.id} style={{ textAlign: 'center' }}> {car.carroId} </th>
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
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="footer navbar-fixed-bottom text-center">
        <p
          style={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>&copy; 2021 American MuscleCar.com</p>
      </footer>
    </>
  )
}