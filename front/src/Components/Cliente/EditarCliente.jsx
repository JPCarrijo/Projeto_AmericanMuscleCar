import React from 'react';
import { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const formatChars = {

  '9': '[0-9]',
  '*': '[0-9xX]',
  '#': '[9]',
  'A': '[A-Za-z]',
  '0': '[0-9]',
  '&': '[0-9A-Ja-j]'
}

// Máscara de entrada
const cpfMask = '999.999.999-99'
const cepMask = '99.999-999'
const celularMask = '(99)#9999-9999'
const fixoMask = '(99)9999-9999'

export default function EditarCliente() {

  const params = useParams();

  const history = useHistory();

  const [usuario, setUsuario] = useState({
    id: '',
    nome: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    cpf: '',
    fixo: '',
    celular: '',
  })

  const [errorUsuario, setErrorUsuario] = useState({
    nome: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    cpf: '',
    fixo: '',
    celular: '',
  })

  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: 'Cliente editado com sucesso.'
  })

  function handleInputChange(event, property) {
    event.preventDefault()
    const usuarioTemp = { ...usuario }

    if (event.target.id) property = event.target.id

    if ((property === 'cpf') || (property === 'fixo') || (property === 'celular') || (property === 'cep')) {
      usuarioTemp[property] = event.target.value
    }
    else if ((property === 'estado')) {
      usuarioTemp[property] = event.target.value.toUpperCase()
    }
    else {
      usuarioTemp[property] = event.target.value
    }
    setUsuario(usuarioTemp)
    validateUsuario(usuarioTemp)
  }

  function validateUsuario(data) {

    const errorUsuarioTemp = {
      nome: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      cpf: '',
      fixo: '',
      celular: '',
    }

    let isValid = true

    // Validação do campo nome
    if (data.nome.trim() === '') {     // trim(): retira os espaços em branco do início e do final de uma string
      errorUsuarioTemp.nome = 'O nome deve ser preenchido'
      isValid = false
    }

    // Validação do campo logradouro
    if (data.logradouro.trim() === '') {
      errorUsuarioTemp.logradouro = 'O logradouro deve ser preenchido'
      isValid = false
    }

    // Validação do campo numero
    if (data.numero.trim() === '' || Number(data.numero) <= 0 || isNaN(data.numero)) {
      errorUsuarioTemp.numero = 'Somente números'
      isValid = false
    }

    // Validação do campo bairro
    if (data.bairro.trim() === '') {
      errorUsuarioTemp.bairro = 'O bairro deve ser preenchido'
      isValid = false
    }
    // Validação do campo cidade
    if (data.cidade.trim() === '') {
      errorUsuarioTemp.cidade = 'A cidade deve ser preenchida'
      isValid = false
    }

    // Validação do campo estado
    if (data.estado.trim() === '') {
      errorUsuarioTemp.estado = 'Escolha um estado'
      isValid = false
    }

    // Validação do campo cep
    if (data.cep.trim() === '' || data.cep.includes('_')) {
      errorUsuarioTemp.cep = 'Somente números'
      isValid = false
    }

    // Validação do campo cpf
    if (data.cpf.trim() === '' || data.cpf.includes('_')) {
      errorUsuarioTemp.cpf = 'Somente números'
      isValid = false
    }

    // Validação do campo fone fixo
    if (data.fixo.trim() === '' || data.fixo.includes('_')) {
      errorUsuarioTemp.fixo = 'O telefone fixo deve ser preenchido'
      isValid = false
    }

    // Validação do campo celular
    if (data.celular.trim() === '' || data.celular.includes('_')) {
      errorUsuarioTemp.celular = 'O celular deve ser preenchido'
      isValid = false
    }

    setErrorUsuario(errorUsuarioTemp)
    return isValid
  }


  useEffect(() => {

    if (params.id) {
      getData(params.id)
    }
  }, [])

  function saveDataUsuario() {
    try {
      if (params.id) {
        axios.put(`http://localhost:3001/usuario/update/${params.id}`, {
          nome: usuario.nome,
          logradouro: usuario.logradouro,
          numero: usuario.numero,
          bairro: usuario.bairro,
          cidade: usuario.cidade,
          estado: usuario.estado,
          cep: usuario.cep,
          cpf: usuario.cpf,
          fixo: usuario.fixo,
          celular: usuario.celular,
        })
      }
      setSnack({
        open: true,
        severity: 'success',
        message: 'Cliente editado com sucesso.'
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
  async function getData(id) {
    try {
      await axios.get(`http://localhost:3001/usuario/localizar/${id}`)
        .then(response => setUsuario(response.data))
    }
    catch (error) {
      setSnack({
        open: true,
        severity: 'error',
        message: 'Não foi possível carregar os dados para edição.'
      })
    }
  }

  function handleSubmit(event) {

    event.preventDefault()
    if (validateUsuario(usuario)) saveDataUsuario()

  }

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack({ ...snack, open: false })

    history.push('/cliente')
  }
  const Alert = React.forwardRef(function Alert(props, ref) { // Snack do evento delete
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  return (
    <>
      <Stack>
        <Snackbar
          open={snack.open}
          autoHideDuration={4000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity={snack.severity}
            sx={{
              width: '100%'
            }}>
            {snack.message}
          </Alert>
        </Snackbar>
      </Stack>
      <section
        className="vh-100"
        style={{
          backgroundColor: 'rgba(6, 36, 21, 0.78)',
        }}>
        <div
          className="container py-5 h-100" >
          <div
            className="row d-flex align-items-center h-100" >
            <div
              className="col col-xl-12" >
              <div
                role="main"
                className="card my-4 py-3"
                style={{
                  borderRadius: '1rem',
                  boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)',
                  backgroundColor: '  rgba(350, 240, 190, 0.75)',
                  padding: '2vw'
                }}>
                <h1
                  className="h1 text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}> Editar Cliente </h1>
                <form onSubmit={handleSubmit}>
                  <div
                    className="row mt-2">
                    <div
                      className="col-md-12 my-2">
                      <TextField
                        id="nome"
                        label="Nome"
                        name="nome"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        value={usuario.nome}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        autoFocus
                        error={errorUsuario.nome !== ''}
                        helperText={errorUsuario.nome}
                      />
                    </div>
                    <div
                      className="col-md-8 my-2">
                      <TextField
                        id="logradouro"
                        label="Logradouro"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        name="logradouro"
                        value={usuario.logradouro}
                        onChange={handleInputChange}
                        fullWidth
                        error={errorUsuario.logradouro !== ''}
                        helperText={errorUsuario.logradouro}
                      />
                    </div>
                    <div
                      className="col-md-4 my-2">
                      <TextField
                        id="numero"
                        label="Número"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        name="numero"
                        value={usuario.numero}
                        onChange={handleInputChange}
                        fullWidth
                        error={errorUsuario.numero !== ''}
                        helperText={errorUsuario.numero} />
                    </div>
                    <div
                      className="col-md-3 my-2">
                      <TextField
                        id="bairro"
                        label="Bairro"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        name="bairro"
                        value={usuario.bairro}
                        onChange={handleInputChange}
                        fullWidth
                        error={errorUsuario.bairro !== ''}
                        helperText={errorUsuario.bairro}
                      />
                    </div>
                    <div
                      className="col-md-3 my-2">
                      <TextField
                        id="cidade"
                        label="Cidade"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        name="cidade"
                        value={usuario.cidade}
                        onChange={handleInputChange}
                        fullWidth
                        error={errorUsuario.cidade !== ''}
                        helperText={errorUsuario.cidade}
                      />
                    </div>
                    <div
                      className="col-md-3 my-2">
                      <TextField
                        id="estado"
                        label="Estado"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        name="estado"
                        value={usuario.estado}
                        onChange={event => handleInputChange(event, 'estado')}
                        select
                        fullWidth
                        error={errorUsuario.estado !== ''}
                        helperText={errorUsuario.estado}
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
                        value={usuario.cep}
                        onChange={event => handleInputChange(event, 'cep')}
                      >
                        {() => <TextField
                          label="CEP"
                          variant="standard"
                          InputProps={{
                            style: {
                              fontSize: '12pt'
                            }
                          }}
                          name="cep"
                          fullWidth
                          error={errorUsuario.cep !== ''}
                          helperText={errorUsuario.cep}
                        />}
                      </InputMask>
                    </div>
                    <div
                      className="col-md-4 my-2">
                      <InputMask
                        formatChars={formatChars}
                        mask={cpfMask}
                        id="cpf"
                        value={usuario.cpf}
                        onChange={event => handleInputChange(event, 'cpf')}
                      >
                        {() => <TextField
                          label="CPF"
                          variant="standard"
                          InputProps={{
                            style: {
                              fontSize: '12pt'
                            }
                          }}
                          fullWidth
                          name="cpf"
                          required
                          error={errorUsuario.cpf !== ''}
                          helperText={errorUsuario.cpf}
                        />}
                      </InputMask>
                    </div>
                    <div
                      className="col-md-4 my-2">
                      <InputMask
                        formatChars={formatChars}
                        mask={fixoMask}
                        id="fixo"
                        value={usuario.fixo}
                        onChange={event => handleInputChange(event, 'fixo')}
                      >
                        {() => <TextField
                          label="Telefone Residencial"
                          variant="standard"
                          InputProps={{
                            style: {
                              fontSize: '12pt'
                            }
                          }}
                          fullWidth
                          name="fixo"
                          required
                          error={errorUsuario.fixo !== ''}
                          helperText={errorUsuario.fixo}
                        />}
                      </InputMask>
                    </div>
                    <div
                      className="col-md-4 my-2">
                      <InputMask
                        formatChars={formatChars}
                        mask={celularMask}
                        id="celular"
                        value={usuario.celular}
                        onChange={event => handleInputChange(event, 'celular')}
                      >
                        {() => <TextField
                          label="Celular"
                          variant="standard"
                          InputProps={{
                            style: {
                              fontSize: '12pt'
                            }
                          }}
                          fullWidth
                          name="celular"
                          required
                          error={errorUsuario.celular !== ''}
                          helperText={errorUsuario.celular}
                        />}
                      </InputMask>
                    </div>
                    <div className="row my-2">
                      <div
                        className="col-md-6 d-sm-flex justify-content-end">
                        <button
                          type="button"
                          className="btn btn-dark btn-xl my-2"
                          name="buttonVoltar"
                          onClick={() => history.push(`/cliente`)}
                          style={{
                            fontStyle: 'oblique',
                            fontWeight: 'bold'
                          }}> Voltar
                        </button>
                      </div>
                      <div
                        className="col-sm-6 ">
                        <button
                          type="submit"
                          className="btn btn-dark btn-xl my-2"
                          name="buttonUsuario"
                          style={{
                            fontStyle: 'oblique',
                            fontWeight: 'bold'
                          }}>
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer
            className="footer navbar-fixed-bottom text-center pt-4">
            <p
              style={{
                textAlign: 'center',
                color: 'white',
              }}>&copy; 2022 autotech.com.br
            </p>
          </footer>
        </div>
      </section>
    </>
  )
}