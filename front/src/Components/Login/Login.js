import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cars from '../../img/musclecars.png';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Input, FilledInput, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Login() {

  const [usuario, setUsuario] = useState("");
  const [value, setValue] = useState({
    password: '',
    showPassword: false,
  });
  const [loginStatus, setLoginStatus] = useState("");

  const history = useHistory()


  const handleSubmit = async () => {
    await axios.post("http://localhost:3001/login/users", {
      nomeUsuario: usuario,
      senhaUsuario: value.password,
    }).then(response => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(history.push('/home'))
      }
    })
  }

  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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
                    className="col-md-6 col-lg-7 d-flex align-items-center" style={{ marginTop: '3vh' }}>
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
                          className="col-md-12"
                          style={{ marginTop: '2vh' }}>
                          <FormControl sx={{ width: '45ch' }} variant="standard">
                            <TextField
                              id="nome"
                              label="Usuário"
                              variant="standard"
                              InputProps={{ style: { fontSize: '17pt' } }}
                              name="nome"
                              onChange={(e) => setUsuario(e.target.value)}
                              fullWidth
                            />
                          </FormControl>
                        </div>
                        <div
                          className="col-md-12"
                          style={{ marginTop: '2vh' }}>
                          <FormControl
                            sx={{ width: '25ch' }} variant="standard"
                          >
                            <InputLabel
                              htmlFor="standard-adornment-password"
                            > Senha
                            </InputLabel>
                            <Input
                              id="standard-adornment-password"
                              type={value.showPassword ? 'text' : 'password'}
                              value={value.password}
                              onChange={handleChange('password')}
                              endAdornment={
                                <InputAdornment
                                  position="end"
                                >

                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {value.showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>}
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div >
                        <h4
                          lassName="h4"
                          style={{ fontFamily: 'Kanit', marginTop: '3vh', color: 'red' }}> {loginStatus} </h4>
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
    </>
  )
}