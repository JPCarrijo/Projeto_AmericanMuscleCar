import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cars from '../../img/musclecars2.png';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Input, FilledInput, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import { useHistory } from 'react-router';
import Progress from './Progress';

const button = {
  fontStyle: 'oblique',
  fontWeight: 'bold',
  backgroundColor: 'rgb(80, 80, 80)',
}

export default function Login() {

  const [usuario, setUsuario] = useState("");
  const [value, setValue] = useState({
    password: '',
    showPassword: false,
  });
  const [loginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async () => {
    setLoading(true);
    await axios.post("http://localhost:3001/login/users", {
      nomeUsuario: usuario,
      senhaUsuario: value.password,
    }).then(response => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
        setLoading(false);
      } else {
        setLoginStatus(history.push('/home'))
        setLoading(false);
      }
    })
  }

  const loadingSubmit = () => {
    setLoading(true);
    setTimeout(() => handleSubmit(), 3300)
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
        style={{
          backgroundColor: 'rgba(6, 36, 21, 0.78)'
        }}>
        <div
          className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="col col-xl-10">
              <div
                className="card mb-5"
                style={{
                  borderRadius: '1rem',
                  boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)'
                }}>
                <div
                  className="row">
                  <div
                    className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      style={{
                        borderRadius: '1rem 0 0 1rem'
                      }}
                      src={cars}
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="col-md col-lg-6 align-items-center my-4">
                    <form className="container mx-auto">
                      <div
                        className="align-items-center mb-4">
                        
                        <h1 className="text-center">
                          <span
                            className="fw-bold"
                            style={{
                              fontFamily: 'Permanent Marker'
                            }}>
                            Auto Tech
                          </span>
                        </h1>
                      </div>
                      <div
                        className="row">
                        <div
                          className="col-md-12 ms-3 mt-4">
                          <FormControl
                            sx={{
                              maxWidth: '25vw'
                            }}
                            variant="standard">
                            <TextField
                              id="nome"
                              label="Usuário"
                              variant="standard"
                              InputProps={{
                                style: {
                                  fontSize: '17pt'
                                }
                              }}
                              name="nome"
                              onChange={(e) => setUsuario(e.target.value)}
                              fullWidth
                            />
                          </FormControl>
                        </div>
                        <div
                          className="col-md-12 ms-3"
                          style={{
                            marginTop: '2vw'
                          }}>
                          <FormControl
                            sx={{
                              width: '20vw'
                            }}
                            variant="standard"
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
                          className="h4 pt-3 ms-3"
                          style={{
                            fontFamily: 'Kanit',
                            color: 'red'
                          }}> {loginStatus}
                        </h4>
                      </div>
                      <div
                        className="pt-3 mb-5 ">
                        <button
                          type="button"
                          className="col-12 btn btn-dark btn-xl" name="buttonLogin"
                          style={button}
                          onClick={loadingSubmit}
                          disabled={loading}>
                          {loading ? <Progress /> : 'ENTRAR'}
                        </button>
                      </div>
                      <h6
                        className="mb-2 pb-lg-2 h6">
                        <Link
                          style={{
                            color: '#393f81',
                            fontFamily: 'Kanit'
                          }}
                          to="/recuperar"> Esqueceu a senha?
                        </Link>
                      </h6>
                      <h6
                        className="mb-3 pb-lg-2 h6"
                        style={{
                          color: '#393f81',
                          fontFamily: 'Kanit'
                        }}>
                        Não tem uma conta?
                        <Link to="/cadastro"
                          style={{ color: '#393f81' }}>
                          Registre agora.
                        </Link>
                      </h6>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer
            className="footer navbar-fixed-bottom text-center">
            <p
              style={{
                textAlign: 'center',
                marginTop: '2.5vh',
                color: 'white'
              }}>&copy; 2022 autotech.com.br
            </p>
          </footer>
        </div>
      </section>
    </>
  )
}