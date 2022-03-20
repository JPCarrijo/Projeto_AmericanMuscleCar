import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import MuiAlert from '@material-ui/core/Alert';
import { Snackbar } from '@material-ui/core';

const formatChars = {

  '9': '[0-9]',
  '*': '[0-9xX]',
  '#': '[9]',
  'A': '[A-Za-z]',
  '0': '[0-9]',
  '&': '[0-9A-Ja-j]'
}

const celularMask = '(99)#9999-9999';
const cepMask = '99999-999'
export default function Cadastro() {

  const [cadastro, setCadastro] = useState({
    id: null,
    nome: '',
    email: '',
    senha: '',
    cidade: '',
    estado: '',
    cep: '',
    celular: ''
  })

  // Constantes de erro
  const [error, setError] = useState({
    nome: '',
    email: '',
    senha: '',
    cidade: '',
    estado: '',
    cep: '',
    celular: '',
  })

  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: 'Usuário salvo com sucesso.'
  })

  const history = useHistory()

  function handleInputChange(event, property) {
    event.preventDefault()
    const cadastroTemp = { ...cadastro }

    if (event.target.id) property = event.target.id

    if (property === 'email' || property === 'estado' || property === 'cep' || property === 'celular') {
      cadastroTemp[property] = event.target.value
    } else {
      cadastroTemp[property] = event.target.value
    }
    console.log(cadastroTemp[property]);

    setCadastro(cadastroTemp)
    validate(cadastroTemp)
  }

  function validate(data) {

    const errorTemp = {
      nome: '',
      email: '',
      senha: '',
      cidade: '',
      estado: '',
      cep: '',
      celular: ''
    }

    let isValid = true

    if (data.nome.trim() === '' || Number(data.nome)) {
      errorTemp.nome = `O nome deve ser preenchido!`
      isValid = false
    }

    if (data.email.trim() === '' || !data.email.includes('@')) {
      errorTemp.email = `E-mail deve ser válido!`
      isValid = false
    }

    if (data.senha.trim() === '') {
      errorTemp.senha = `A senha deve ser preenchida!`
      isValid = false
    }

    if (data.cidade.trim() === '' || Number(data.cidade)) {
      errorTemp.cidade = `A cidade deve ser preenchida!`
      isValid = false
    }

    if (data.estado.trim() === '') {
      errorTemp.estado = `O estado deve ser preenchido!`
      isValid = false
    }

    if (data.cep.trim() === '' || data.cep.includes('_')) {
      errorTemp.cep = `O CEP deve ser preenchido!`
      isValid = false
    }

    if (data.celular.trim() === '' || data.celular.includes('_')) {
      errorTemp.celular = 'O celular deve ser preenchido'
      isValid = false
    }

    setError(errorTemp)
    return isValid
  }

  function saveData() {
    try {
      axios.post("http://localhost:3001/cadastro/insert", {
        nome: cadastro.nome,
        email: cadastro.email,
        senha: cadastro.senha,
        cidade: cadastro.cidade,
        estado: cadastro.estado,
        cep: cadastro.cep,
        celular: cadastro.celular,
      })
      setSnack({
        open: true,
        severity: 'success',
        message: 'Usuário salvo com sucesso!'
      })
    }
    catch (error) {
      setSnack({
        open: true,
        severity: 'error',
        message: 'ERRO: ' + error.message
      })
    }
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function handleSnack(event, reason) {
    if (reason === 'clickway') return
    setSnack({ ...snack, open: false })
    history.push('/')
  }

  return (
    <>
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleSnack}
      >
        <Alert
          onClose={handleSnack}
          severity={snack.severity}>
          {snack.message}
        </Alert>
      </Snackbar>
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
                className="card my-5 py-5"
                style={{
                  borderRadius: '1rem',
                  boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)',
                  backgroundColor: '  rgba(350, 240, 190, 0.75)',
                  padding: '5vw'
                }}>
                {/* Nav */}
                <h1
                  className="h1 text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}> Auto Tech
                </h1>
                <h4
                  className="h4 text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}> Cadastro de Usuários
                </h4>
                <form >
                  <div
                    className="form-group">
                    <div
                      className="row">
                      <div
                        className="col-md-12 my-2">
                        <TextField
                          id="nome"
                          label="Nome"
                          name="nome"
                          variant="standard"
                          value={cadastro.nome}
                          InputProps={{
                            style: {
                              fontSize: '17pt'
                            }
                          }}
                          onChange={handleInputChange}
                          fullWidth
                          required
                          error={error.nome !== ''}
                          helperText={error.nome}
                        />
                      </div>
                      <div
                        className="col-md-8 my-2">
                        <TextField
                          id="email"
                          label="E-mail"
                          name="email"
                          variant="standard"
                          value={cadastro.email}
                          InputProps={{
                            style: {
                              fontSize: '17pt'
                            }
                          }}
                          onChange={event => handleInputChange(event, 'email')}
                          fullWidth
                          required
                          error={error.email !== ''}
                          helperText={error.email}
                        />
                      </div>
                      <div
                        className="col-md-4 my-2">
                        <TextField
                          id="senha"
                          label="Senha"
                          name="senha"
                          variant="standard"
                          value={cadastro.senha}
                          InputProps={{
                            style: {
                              fontSize: '17pt'
                            }
                          }}
                          onChange={handleInputChange}
                          fullWidth
                          required
                          error={error.senha !== ''}
                          helperText={error.senha}
                        />
                      </div>
                      <div
                        className="col-md-3 my-2">
                        <TextField
                          id="cidade"
                          label="Cidade"
                          name="cidade"
                          variant="standard"
                          value={cadastro.cidade}
                          InputProps={{
                            style: {
                              fontSize: '17pt'
                            }
                          }}
                          onChange={handleInputChange}
                          fullWidth
                          required
                          error={error.cidade !== ''}
                          helperText={error.cidade}
                        />
                      </div>
                      <div
                        className="col-md-3 my-2">
                        <TextField
                          id="estado"
                          label="Estado"
                          variant="standard"
                          name="estado"
                          value={cadastro.estado}
                          InputProps={{
                            style: {
                              fontSize: '17pt'
                            }
                          }}
                          onChange={event => handleInputChange(event, 'estado')}
                          select
                          fullWidth
                          error={error.estado !== ''}
                          helperText={error.estado}
                        >
                          <MenuItem value="AC"> AC </MenuItem>
                          <MenuItem value="AL"> AL </MenuItem>
                          <MenuItem value="AP"> AP </MenuItem>
                          <MenuItem value="AM"> AM </MenuItem>
                          <MenuItem value="BA"> BA </MenuItem>
                          <MenuItem value="CE"> CE </MenuItem>
                          <MenuItem value="ES"> ES </MenuItem>
                          <MenuItem value="GO"> GO </MenuItem>
                          <MenuItem value="MA"> MA </MenuItem>
                          <MenuItem value="MT"> MT </MenuItem>
                          <MenuItem value="MS"> MS </MenuItem>
                          <MenuItem value="MG"> MG </MenuItem>
                          <MenuItem value="PA"> PA </MenuItem>
                          <MenuItem value="PB"> PB </MenuItem>
                          <MenuItem value="PR"> PR </MenuItem>
                          <MenuItem value="PE"> PE </MenuItem>
                          <MenuItem value="PI"> PI </MenuItem>
                          <MenuItem value="RJ"> RJ </MenuItem>
                          <MenuItem value="RN"> RN </MenuItem>
                          <MenuItem value="RS"> RS </MenuItem>
                          <MenuItem value="RO"> RO </MenuItem>
                          <MenuItem value="RR"> RR </MenuItem>
                          <MenuItem value="SC"> SC </MenuItem>
                          <MenuItem value="SP"> SP </MenuItem>
                          <MenuItem value="SE"> SE </MenuItem>
                          <MenuItem value="TO"> TO </MenuItem>
                          <MenuItem value="DF"> DF </MenuItem>
                        </TextField>
                      </div>
                      <div
                        className="col-md-3 my-2">
                        <InputMask
                          formatChars={formatChars}
                          mask={cepMask}
                          id="cep"
                          value={cadastro.cep}
                          onChange={event => handleInputChange(event, 'cep')}>
                          {() => <TextField
                            label="CEP"
                            variant="standard"
                            fullWidth
                            name="cep"
                            InputProps={{
                              style: {
                                fontSize: '17pt'
                              }
                            }}
                            required
                            error={error.cep !== ''}
                            helperText={error.cep} />}
                        </InputMask>
                      </div>
                      <div
                        className="col-md-3 my-2">
                        <InputMask
                          formatChars={formatChars}
                          mask={celularMask}
                          id="celular"
                          value={cadastro.celular}
                          onChange={event => handleInputChange(event, 'celular')}>
                          {() => <TextField
                            label="Celular"
                            variant="standard"
                            fullWidth
                            name="celular"
                            InputProps={{
                              style: {
                                fontSize: '17pt'
                              }
                            }}
                            required
                            error={error.celular !== ''}
                            helperText={error.celular} />}
                        </InputMask>
                      </div>
                    </div>
                    <div
                      className="row my-2">
                      <div
                        className="col-md-6 d-sm-flex justify-content-end" >
                        <Link
                          to="/">
                          <button
                            type="button"
                            className="btn btn-dark btn-xl my-2" name="buttonVoltar"
                            style={{
                              fontStyle: 'oblique',
                              fontWeight: 'bold'
                            }}> Voltar
                          </button>
                        </Link>
                      </div>
                      <div
                        className="col-md-6" >
                        <button
                          type="button"
                          className="btn btn-dark btn-xl my-2"
                          name="buttonCarro"
                          style={{
                            fontStyle: 'oblique',
                            fontWeight: 'bold'
                          }}
                          onClick={() => {
                            if (validate(cadastro)) {
                              saveData()
                            }
                          }
                          }> Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
            }}> &copy; 2022 autotech.com
          </p>
        </footer>
        </div>
      </section>

    </>
  )
}