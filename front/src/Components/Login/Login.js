import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cars from '../../img/musclecars.png';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Login() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory()


  const handleSubmit = async () => {
    await axios.post("http://localhost:3001/login/users", {
      nomeUsuario: usuario,
      senhaUsuario: senha,
    }).then(response => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(history.push('/home'))
      }
    })
  }

  return (
    <>
      <section
        className="vh-100"
        style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>
        <div
          className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="col col-xl-10">
              <div
                className="card"
                style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', marginTop: '-30px' }}>
                <div
                  className="row g-0">
                  <div
                    className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={cars}
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="col-md-6 col-lg-7 d-flex align-items-center">
                    <form >
                      <div
                        className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: '#ff6219' }}></i>
                        <span
                          className="h1 fw-bold mb-0"
                          style={{ fontFamily: 'Permanent Marker' }}> American MuscleCar </span>
                      </div>
                      <div
                        className="row">
                        <div
                          className="col-md-12">
                          <TextField
                            id="nome"
                            label="Usuário"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            name="nome"
                            onChange={(e) => setUsuario(e.target.value)}
                            fullWidth
                          />
                        </div>
                        <div className="col-md-12">
                          <TextField
                            id="senha"
                            label="Senha"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            name="senha"
                            onChange={(e) => setSenha(e.target.value)}
                            fullWidth
                          />
                        </div>
                      </div>
                      <div >
                       <h4 className="h4" style={{fontFamily:'Kanit', marginTop:'3vh', color:'red'}}> {loginStatus} </h4>
                      </div>
                      <div
                        className="pt-1 mb-4">
                        <button
                          type="button"
                          className="btn btn-dark me-md-6 btn-lg" name="buttonLogin"
                          style={{ fontStyle: 'oblique', fontWeight: 'bold', marginTop: '3vh' }}
                          onClick={handleSubmit}                        
                        > Login </button>
                      </div>
                      <h6
                        className="mb-2 pb-lg-2 h6">
                        <Link
                          style={{ color: '#393f81' }}
                          to="/recuperar"> Esqueceu a senha? </Link></h6>
                      <h6
                        className="mb-5 pb-lg-2 h6"
                        style={{ color: '#393f81' }}>Não tem uma conta?
                        <Link to="/cadastro"
                          style={{ color: '#393f81' }}>Registre agora.</Link></h6>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer
            className="footer navbar-fixed-bottom text-center">
            <p
              style={{ textAlign: 'center', marginTop: '2.5vh', color: 'white' }}>&copy; 2021 American MuscleCar.com</p>
          </footer>
        </div>
      </section>

      {/* MODAL */}
      <div
        className="modal fade"
        id="siteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        ria-hidden="true">
        <div
          className="modal-dialog modal-dialog-centered" role="document"  >
          <div
            className="modal-content" >
            <div
              className="modal-header"
              style={{ backgroundColor: 'rgba(6, 36, 21, 0.65)', fontFamily: 'Permanent Marker', color: 'white' }}>
              <h4
                className="modal-title h4"
                id="exampleModalLongTitle" > American MuscleCar </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"><span>&times;</span></button>
            </div>
            <div
              className="modal-body "
              style={{ fontFamily: 'Kanit', backgroundColor: 'rgba(6, 36, 21, 0.2)' }}>
              <h2> {loginStatus} </h2>
            </div>
            <div
              className="modal-footer"
              style={{ backgroundColor: 'rgba(6, 36, 21, 0.65)', color: 'white' }}>
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
                style={{ fontStyle: 'oblique', fontWeight: 'bold' }}> Fechar </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}