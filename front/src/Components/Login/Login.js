import { useState } from 'react';
import { Link } from 'react-router-dom';
import cars from '../../img/musclecars.png';
import axios from 'axios';

export default function Login() {

const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');


const handleSubmit = () => {
      axios.post("http://localhost:3001/insert/users", {
      nomeUsuario: usuario,
      senhaUsuario: senha,
  }).then(() => {
    alert("Successful Insert!")
  })
}

    return (
      <>
        <section className="vh-100" style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', marginTop: '-30px' }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src={cars}
                        alt="login form"
                        className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <form style={{ paddingLeft: '40px', width: '50vw' }} onSubmit="">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                          <span className="h1 fw-bold mb-0" style={{ fontFamily: 'Permanent Marker' }}> American MuscleCar </span>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="text" id="usuario" className="form-control form-control-lg" style={{ width: '27vw' }} name="usuario" onChange={(e) => setUsuario(e.target.value)}/>
                          <label className="form-label" for="form2Example17"> Nome Usuário </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="senha" className="form-control form-control-lg" style={{ width: '27vw' }} name="senha" onChange={(e) => setSenha(e.target.value)}/>
                          <label className="form-label" for="form2Example27"> Senha </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit" style={{ width: '5.9vw', padding: '2px' }} onClick={handleSubmit}> Login </button>
                        </div>
                        <Link className="small text-muted" to="/recuperar">Esqueceu a senha?</Link>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Não tem uma conta? <Link to="/cadastro" style={{ color: '#393f81' }}>Registre agora.</Link></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer navbar-fixed-bottom text-center">
              <p style={{ textAlign: 'center', marginTop: '2.5vh', color: 'white' }}>&copy; 2021 American MuscleCar.com</p>
            </footer>
          </div>
        </section>
      </>
    )
  }