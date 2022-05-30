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
const placaMask = 'AAA-0&00'

export default function EditarCliente() {

  const params = useParams();

  const history = useHistory();

  const [carro, setCarro] = useState({
    id: '',
    usuarioId: '',
    marca: '',
    modelo: '',
    cor: '',
    ano: (new Date()).getFullYear(),  // Ano corrente
    placa: '',
    km: ''
  });

  // Constantes de erro
  const [errorCarro, setErrorCarro] = useState({
    marca: '',
    modelo: '',
    cor: '',
    ano: '',
    placa: '',
    km: ''
  })

  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: 'Automóvel editado com sucesso.'
  })

  function handleInputChange(event, property) {
    event.preventDefault()
    const carroTemp = { ...carro }

    if (event.target.id) property = event.target.id

    if (property === 'placa') {
      carroTemp[property] = event.target.value.toUpperCase()
    } else if ((property === 'cor') || (property === 'km')) {
      carroTemp[property] = event.target.value
    } else {
      carroTemp[property] = event.target.value
    }

    setCarro(carroTemp)
    validateCarro(carroTemp)
  }

  function validateCarro(data) {

    const errorCarroTemp = {
      marca: '',
      modelo: '',
      cor: '',
      placa: '',
      km: ''
    }

    let isValid = true

    // Validação do campo marca
    if (data.marca.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorCarroTemp.marca = 'A marca deve ser preenchida'
      isValid = false
    }

    // Validação do campo modelo
    if (data.modelo.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorCarroTemp.modelo = 'A modelo deve ser preenchido'
      isValid = false
    }

    // Validação do campo cor
    if (data.cor.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorCarroTemp.cor = 'Escolha uma cor'
      isValid = false
    }

    // Validação do campo placa
    if (data.placa.trim() === '' || data.placa.includes('_')) {
      errorCarroTemp.placa = 'A placa deve ser preenchida'
      isValid = false
    }

    if (Number(data.km) <= 0 || isNaN(data.km)) {
      errorCarroTemp.km = 'KM maior que zero'
      isValid = false
    }

    setErrorCarro(errorCarroTemp)
    return isValid
  }

  function saveDataCarro() {
    try {
      if (params.id) {
        axios.put(`http://localhost:3001/carro/update/${params.id}`, {
          marca: carro.marca,
          modelo: carro.modelo,
          cor: carro.cor,
          ano: carro.ano,
          placa: carro.placa,
          km: carro.km
        })
        setSnack({
          open: true,
          severity: 'success',
          message: 'Automóvel editado com sucesso!'
        })
      }
    }
    catch (error) {
      setSnack({
        open: true,
        severity: 'error',
        message: 'ERRO: ' + error.message
      })
    }
  }

  useEffect(() => {

    if (params.id) {
      getData(params.id)
    }
  }, [])

  async function getData(id) {
    try {
      await axios.get(`http://localhost:3001/carro/localizar/${id}`)
        .then(response => setCarro(response.data))
    }
    catch (error) {
      setSnack({
        open: true,
        severity: 'error',
        message: 'Não foi possível carregar os dados para edição.'
      })
    }
  }
  console.log(carro)

  function handleSubmit(event) {

    event.preventDefault()
    if (validateCarro(carro)) saveDataCarro()

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

  function years() {
    let result = []
    for (let i = (new Date()).getFullYear(); i >= 1970; i--) result.push(i)
    return result
  }

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
                  }}> Editar Automóvel </h1>
                <form onSubmit={handleSubmit}>
                  <div
                    className="row ">
                    <div
                      className="col-md-12 my-3">
                      <TextField
                        id="codigo"
                        label="Código do Cliente"
                        name="codigo"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        value={carro.usuarioId}
                        required
                      />
                    </div>
                    <div
                      className="col-md-6 my-2">
                      <TextField
                        id="marca"
                        label="Marca"
                        name="marca"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        value={carro.marca}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        error={errorCarro.marca !== ''}
                        helperText={errorCarro.marca} />
                    </div>
                    <div
                      className="col-md-6 my-2">
                      <TextField
                        id="modelo"
                        label="Modelo"
                        name="modelo"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        value={carro.modelo}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        error={errorCarro.modelo !== ''}
                        helperText={errorCarro.modelo} />
                    </div>
                    <div
                      className="col-md-6 my-2">
                      <TextField
                        id="cor"
                        label="Cor"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        name="cor"
                        value={carro.cor}
                        onChange={event => handleInputChange(event, 'cor')}
                        select fullWidth
                        error={errorCarro.cor !== ''}
                        helperText={errorCarro.cor} >
                        <MenuItem
                          value="Amarelo"> Amarelo
                        </MenuItem>
                        <MenuItem
                          value="Azul"> Azul
                        </MenuItem>
                        <MenuItem
                          value="Bege"> Bege
                        </MenuItem>
                        <MenuItem
                          value="Branco"> Branco
                        </MenuItem>
                        <MenuItem
                          value="Cinza"> Cinza
                        </MenuItem>
                        <MenuItem
                          value="Dourado"> Dourado
                        </MenuItem>
                        <MenuItem
                          value="Laranja"> Laranja
                        </MenuItem>
                        <MenuItem
                          value="Marrom"> Marrom
                        </MenuItem>
                        <MenuItem
                          value="Prata"> Prata
                        </MenuItem>
                        <MenuItem
                          value="Preto"> Preto
                        </MenuItem>
                        <MenuItem
                          value="Roxo"> Roxo
                        </MenuItem>
                        <MenuItem
                          value="Verde"> Verde
                        </MenuItem>
                        <MenuItem
                          value="Vermelho"> Vermelho
                        </MenuItem>
                      </TextField>
                    </div>
                    <div
                      className="col-md-6 my-2">
                      <TextField
                        id="ano"
                        label="Ano Fabricação"
                        name="ano"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        value={carro.ano}
                        onChange={event => handleInputChange(event, 'ano')}
                        select
                        fullWidth >
                        {years().map(year => <MenuItem
                          value={year}
                          key={year}>{year}
                        </MenuItem>)}
                      </TextField>
                    </div>
                    <div
                      className="col-md-6 my-2">
                      <InputMask
                        formatChars={formatChars}
                        mask={placaMask}
                        id="placa"
                        value={carro.placa}
                        onChange={event => handleInputChange(event, 'placa')}>
                        {() => <TextField
                          label="Placa"
                          variant="standard"
                          InputProps={{
                            style: {
                              fontSize: '12pt'
                            }
                          }}
                          fullWidth
                          name="placa"
                          required
                          error={errorCarro.placa !== ''}
                          helperText={errorCarro.placa} />}
                      </InputMask>
                    </div>
                    <div
                      className="col-md-6 my-2">
                      <TextField
                        id="km"
                        label="KM"
                        name="km"
                        variant="standard"
                        InputProps={{
                          style: {
                            fontSize: '12pt'
                          }
                        }}
                        value={carro.km}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        error={errorCarro.km !== ''}
                        helperText={errorCarro.km} />
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
                        className="col-md-6">
                        <button
                          type="submit"
                          className="btn btn-dark btn-xl my-2"
                          name="buttonCarro"
                          style={{
                            fontStyle: 'oblique',
                            fontWeight: 'bold'
                          }}> Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                </form >
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