import React from "react";
import { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const useStyles = makeStyles(() => ({
  dataGrid: {
    '& .MuiDataGrid-row button': {       // Esconde os botões na linha de tabela "normal"
      visibility: 'hidden',
    },
    '& .MuiDataGrid-row:hover button': { // Exibe os botões de volta quando o mouse passar por cima
      visibility: 'visible'
    },
    backgroundColor: 'rgb(255, 254, 125)',
    borderRadius: '20px',
    fontSize: '12pt'
    //border: '1px solid'
  },
  paper: {
    border: '1px solid',
    boxShadow: '0 0 2em black'
  },
  dialog: {
    '& .MuiDialog-paper': {
      backgroundColor: 'rgb(72,72,72)',
      width: '25vw',
      color: 'white',
      borderRadius: '15px',
    },
    '& .MuiDialogContentText-root': {
      color: 'white'
    },
    '& .MuiButton-text': {
      color: '#00FF00'
    }
  }
}));

// Máscara como objeto
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
const placaMask = 'AAA-0&00'


export default function Cliente() {

  const classes = useStyles();

  const history = useHistory();

  const params = useParams();

  const [deleteClient, setDeleteClient] = useState();

  const [deleteCarro, setDeleteCarro] = useState();

  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: 'Cliente salvo com sucesso.'
  })

  const [dialogUsuario, setDialogUsuario] = useState(false);

  const [dialogCarro, setDialogCarro] = useState(false);

  const [openList, setOpenList] = useState(false);

  const [severityList, setSeverityList] = useState('success');

  const [messageList, setMessageList] = useState('Cliente excluído com sucesso!');


  const [evento, setEvento] = useState([]);

  const [car, setCar] = useState([]);
  // Recebendo os dados
  const [usuario, setUsuario] = useState({
    id: null,
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
  });

  const [carro, setCarro] = useState({
    id: null,
    codigo: '',
    marca: '',
    modelo: '',
    cor: '',
    ano: (new Date()).getFullYear(),  // Ano corrente
    placa: '',
    km: ''
  });

  // Constantes de erro
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

  const [errorCarro, setErrorCarro] = useState({
    codigo: '',
    marca: '',
    modelo: '',
    cor: '',
    ano: '',
    placa: '',
    km: ''
  })

  /////////////////////////////////////////////////////////////////////////////

  // Parâmetros de Cliente....

  function getData() {
    fetch(`http://localhost:3001/usuario/listar`)
      .then((response) => response.json())
      .then((response) => setEvento(response))
  }

  useEffect(() => {
    setTimeout(() => getData(), 1000)
  }, [])

  function handleInputChange(event, property) {
    event.preventDefault()
    const usuarioTemp = { ...usuario }
    const carroTemp = { ...carro }

    if (event.target.id) property = event.target.id

    if ((property === 'cpf') || (property === 'fixo') || (property === 'celular') || (property === 'cp')) {
      usuarioTemp[property] = event.target.value
    } else if ((property === 'estado')) {
      usuarioTemp[property] = event.target.value.toUpperCase()
    } else if (property === 'placa') {
      carroTemp[property] = event.target.value.toUpperCase()
    } else if ((property === 'cor') || (property === 'km')) {
      carroTemp[property] = event.target.value
    } else {
      usuarioTemp[property] = event.target.value
      carroTemp[property] = event.target.value
    }
    setUsuario(usuarioTemp)
    setCarro(carroTemp)
    validateUsuario(usuarioTemp)
    validateCarro(carroTemp)
  }

  // Validação dos inputs
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

  function saveDataUsuario() {
    try {
      axios.post("http://localhost:3001/usuario/insert", {
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
      setSnack({
        open: true,
        severity: 'success',
        message: 'Cliente salvo com sucesso.'
      })
    }
    catch (error) {
      setSnack({
        open: true,
        severity: 'error',
        message: 'ERRO: ' + error.message
      })
    }
    getData()
  }

  const handleSnackCloseForm = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack({ ...snack, open: false })
  }

  async function delClient() {
    try {
      await axios.delete(`http://localhost:3001/usuario/delete/${deleteClient}`)
      getData();

      setSeverityList('success');
      setMessageList('Cliente excluído com sucesso!');
    }
    catch (error) {
      setSeverityList('error');
      setMessageList('ERRO: ' + error.message);
    }
    setOpenList(true)
  }

  function handleDelete(id) {
    setDeleteClient(id)
    setDialogUsuario(true)
  }

  const handleDialogClose = (result) => {
    setDialogUsuario(false);
    if (result) delClient()
  }

  const handleClose = () => {
    if (usuario) setDialogUsuario(false)
    if (carro) setDialogCarro(false)
  }

  const handleSnackClose = (event, reason) => { // fecha Snack do evento delete
    if (reason === 'clickaway') {
      return;
    }
    setOpenList(false)
  }

  const Alert = React.forwardRef(function Alert(props, ref) { // Snack do evento delete
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function newClient() {
    document.getElementById('nav-home-tab').click()
  }

  const usuarioRow: GridColDef[] = [
    {
      field: 'id',
      headerClassName: 'super-app-theme--header',
      headerName: 'ID',
      align: 'center',
      headerAlign: 'center',
      width: 100,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 170,
      //flex: true
    },
    {
      field: 'logradouro',
      headerName: 'Logradouro',
      width: 170,
      //flex: true,
    },
    {
      field: 'numero',
      headerName: 'Nº Imóvel',
      width: 150,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'bairro',
      headerName: 'Bairro',
      width: 150,
      //flex: true
    },
    {
      field: 'cidade',
      headerName: 'Cidade',
      width: 150,
      //flex: true
    },
    {
      field: 'estado',
      headerName: 'UF',
      width: 120,
      //flex: true
    },
    {
      field: 'cep',
      headerName: 'CEP',
      width: 130,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
      //flex: true
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 125,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'fixo',
      headerName: 'Telefone Fixo',
      width: 150,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'celular',
      headerName: 'Celular',
      width: 150,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 130,
      align: 'center',
      headerAlign: 'center',
      //flex: true,
      renderCell: params => (
        <IconButton aria-label="editar" onClick={() => history.push(`/clientedit/${params.id}`)}>
          <EditRoundedIcon color="primary" />
        </IconButton>
      )
    },
    {
      field: 'excluir',
      headerName: 'Excluir',
      align: 'center',
      headerAlign: 'center',
      width: 135,
      //flex: true,
      renderCell: params => (
        <IconButton aria-label="excluir" onClick={() => handleDelete(params.id)}>
          <DeleteRoundedIcon color="error" />
        </IconButton>
      )
    }
  ]
  /////////////////////////////////////////////////////////////////////////////////
  // Parâmetros de Carros...
  function validateCarro(data) {

    const errorCarroTemp = {
      codigo: '',
      marca: '',
      modelo: '',
      cor: '',
      placa: '',
      km: ''
    }

    let isValid = true

    //Validação do campo código
    if (data.codigo.trim() === '' || !Number(data.codigo) || Number(data.codigo) < 0) {
      errorCarroTemp.codigo = 'Digite o código do cliente'
      isValid = false
    }

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

    if (data.km.trim() === '' || Number(data.km) <= 0 || isNaN(data.km)) {
      errorCarroTemp.km = 'KM maior que zero'
      isValid = false
    }

    setErrorCarro(errorCarroTemp)
    return isValid
  }
  function saveDataCarro() {
    try {
      axios.post("http://localhost:3001/carro/insert", {
        codigo: carro.codigo,
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
        message: 'Automóvel salvo com sucesso!'
      })
    }
    catch (error) {
      setSnack({
        open: true,
        severity: 'error',
        message: 'ERRO: ' + error.message
      })
    }
    getCars()
  }

  function handleSubmit(event) {
    if (validateUsuario(usuario)) {
      saveDataUsuario()
      setUsuario({
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
    }
    if (validateCarro(carro)) {
      saveDataCarro()
      setCarro({
        codigo: '',
        marca: '',
        modelo: '',
        cor: '',
        ano: '',
        placa: '',
        km: ''
      })
    }
  }

  async function delCarro() {
    try {
      await axios.delete(`http://localhost:3001/carro/delete/${deleteCarro}`)
      getCars();

      setSeverityList('success');
      setMessageList('Automóvel excluído com sucesso!');
    }
    catch (error) {
      setSeverityList('error');
      setMessageList('ERRO: ' + error.message);
    }
    setOpenList(true)
  }

  function handleDeleteCarro(id) {
    setDeleteCarro(id)
    setDialogCarro(true)
  }

  const handleDialogCloseCar = (result) => {
    setDialogCarro(false);
    if (result) delCarro()
  }

  function years() {
    let result = []
    for (let i = (new Date()).getFullYear(); i >= 1970; i--) result.push(i)
    return result
  }

  function newCar() {
    document.getElementById('nav-profile-tab').click()
  }

  function getCars() {
    fetch(`http://localhost:3001/carro/listar`)
      .then((response) => response.json())
      .then((response) => setCar(response))
  }

  useEffect(() => {
    setTimeout(() => getCars(), 1000)
  }, [])

  const carroRow: GridColDef[] = [
    {
      field: 'id',
      headerClassName: 'super-app-theme--header',
      headerName: 'CarroID',
      align: 'center',
      headerAlign: 'center',
      width: 140,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'usuarioId',
      //headerClassName: 'super-app-theme--header',
      headerName: 'UsuárioID',
      align: 'center',
      width: 160,
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
      width: 120,
      //flex: true
    },
    {
      field: 'km',
      headerName: 'Km',
      width: 120
    },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 130,
      align: 'center',
      headerAlign: 'center',
      //flex: true,
      renderCell: params => (
        <IconButton aria-label="editar" onClick={() => history.push(`/carroedit/${params.id}`)}>
          <EditRoundedIcon color="primary" />
        </IconButton>
      )
    },
    {
      field: 'excluir',
      headerName: 'Excluir',
      align: 'center',
      headerAlign: 'center',
      width: 135,
      //flex: true,
      renderCell: params => (
        <IconButton aria-label="excluir" onClick={() => handleDeleteCarro(params.id)}>
          <DeleteRoundedIcon color="error" />
        </IconButton>
      )
    }
  ]


  return (
    <>
      <Dialog
        className={classes.dialog}
        open={dialogUsuario}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title">
          {"Exclusão de Usuário"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description">
            Deseja excluir o usuário?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}> Não
          </Button>
          <Button
            onClick={handleDialogClose}
            autoFocus> Sim
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        className={classes.dialog}
        open={dialogCarro}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title">
          {"Exclusão de Automóvel"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description">
            Deseja excluir o automóvel?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}> Não
          </Button>
          <Button
            onClick={handleDialogCloseCar}
            autoFocus> Sim
          </Button>
        </DialogActions>
      </Dialog>
      <Stack>
        <Snackbar
          open={openList}
          autoHideDuration={4000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity={severityList}
            sx={{
              width: '100%'
            }}>
            {messageList}
          </Alert>
        </Snackbar>
      </Stack>
      <Stack>
        <Snackbar
          open={snack.open}
          autoHideDuration={4000}
          onClose={handleSnackCloseForm}
        >
          <Alert
            onClose={handleSnackCloseForm}
            severity={snack.severity}
            sx={{
              width: '100%'
            }}>
            {snack.message}
          </Alert>
        </Snackbar>
      </Stack>
      <section
        className="container-fluid sectionHome"
        style={{
          backgroundColor: 'rgba(6, 36, 21, 0.78)',
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
                  boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)',
                  backgroundColor: '  rgba(350, 240, 190, 0.75)',
                  padding: '2vw'
                }}>
                <nav>
                  <div
                    className="nav nav-tabs justify-content-center"
                    id="nav-tab"
                    role="tablist">
                    <a
                      className="nav-item nav-link active" id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      style={{
                        color: 'black',
                        fontSize: '15pt',
                        fontStyle: 'oblique'
                      }}> Cadastrar Cliente
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      style={{
                        color: 'black',
                        fontSize: '15pt',
                        fontStyle: 'oblique'
                      }}> Cadastrar Automóvel
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-client-tab"
                      data-toggle="tab"
                      href="#nav-client"
                      role="tab"
                      aria-controls="nav-client"
                      aria-selected="false"
                      style={{
                        color: 'black',
                        fontSize: '15pt',
                        fontStyle: 'oblique'
                      }}> Clientes Cadastrados
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-car-tab"
                      data-toggle="tab"
                      href="#nav-car"
                      role="tab"
                      aria-controls="nav-car"
                      aria-selected="false"
                      style={{
                        color: 'black',
                        fontSize: '15pt',
                        fontStyle: 'oblique'
                      }}> Automóveis Cadastrados
                    </a>
                  </div>
                </nav>
                <div
                  className="tab-content"
                  id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab" >
                    <form onSubmit={handleSubmit}>
                      <div
                        className="row">
                        <div
                          className="col-md-12 my-3">
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
                            onChange={event => handleInputChange(event, 'nome')}
                            fullWidth
                            required
                            error={errorUsuario.nome !== ''}
                            helperText={errorUsuario.nome} />
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
                            helperText={errorUsuario.logradouro} />
                        </div>
                        <div
                          className="col-md-4 my-2"
                        >
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
                            helperText={errorUsuario.bairro} />
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
                            helperText={errorUsuario.cidade} />
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
                            helperText={errorUsuario.estado} >
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
                            onChange={event => handleInputChange(event, 'cep')}>
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
                              helperText={errorUsuario.cep} />}
                          </InputMask>
                        </div>
                        <div
                          className="col-md-4 my-2">
                          <InputMask
                            formatChars={formatChars}
                            mask={cpfMask}
                            id="cpf"
                            value={usuario.cpf}
                            onChange={event => handleInputChange(event, 'cpf')}>
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
                              helperText={errorUsuario.cpf} />}
                          </InputMask>
                        </div>
                        <div
                          className="col-md-4 my-2">
                          <InputMask
                            formatChars={formatChars}
                            mask={fixoMask}
                            id="fixo"
                            value={usuario.fixo}
                            onChange={event => handleInputChange(event, 'fixo')}>
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
                              helperText={errorUsuario.fixo} />}
                          </InputMask>
                        </div>
                        <div
                          className="col-md-4 my-2">
                          <InputMask
                            formatChars={formatChars}
                            mask={celularMask}
                            id="celular"
                            value={usuario.celular}
                            onChange={event => handleInputChange(event, 'celular')}>
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
                              helperText={errorUsuario.celular} />}
                          </InputMask>
                        </div>
                        <div className="row my-2">
                          <div
                            className="col-md-6 d-sm-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-dark btn-xl my-2"
                              name="buttonHome"
                              style={{
                                fontStyle: 'oblique',
                                fontWeight: 'bold'
                              }}>
                              <a
                                href="/home"
                                style={{
                                  textDecoration: 'none',
                                  color: 'white'
                                }}>
                                Home
                              </a>
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
                  </div >
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab">
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
                            value={carro.codigo}
                            onChange={handleInputChange}
                            required
                            error={errorCarro.codigo !== ''}
                            helperText={errorCarro.codigo} />
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
                              onClick={() => history.push(`/home`)}
                              style={{
                                fontStyle: 'oblique',
                                fontWeight: 'bold'
                              }}> Home
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
                  </div >
                  <div
                    className="tab-pane fade"
                    id="nav-client"
                    role="tabpanel"
                    aria-labelledby="nav-client-tab" >
                    <div
                      className="row "
                      style={{
                        borderBottom: '1px ridge',
                        paddingBottom: '2vh'
                      }}>
                      <div
                        className="col-md-12">
                        <div
                          className="row">
                          <div
                            className="col-md-12">
                            <button
                              type="button"
                              className="btn btn-dark btn-xl my-4 float-right"
                              name="buttonNewClient"
                              style={{
                                fontStyle: 'oblique',
                                fontWeight: 'bold'
                              }}
                              onClick={newClient}>
                              +Novo Cliente
                            </button>
                          </div>
                          <Paper
                            className={classes.paper}
                            elevation={50}
                          >
                            <DataGrid
                              className={classes.dataGrid}
                              rows={evento}
                              columns={usuarioRow}
                              pageSize={5}
                              autoHeight={true}
                              disableSelectionOnClick={true} />
                          </Paper>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-car"
                    role="tabpanel"
                    aria-labelledby="nav-car-tab" >
                    <div
                      className="row"
                      style={{
                        borderBottom: '1px ridge',
                        paddingBottom: '2vh'
                      }}>
                      <div
                        className="col-md-12">
                        <div
                          className="row">
                          <div
                            className="col-md-12">
                            <button
                              type="button"
                              className="btn btn-dark btn-xl my-4 float-right"
                              name="buttonNewClient"
                              style={{
                                fontStyle: 'oblique',
                                fontWeight: 'bold'
                              }}
                              onClick={newCar}> +Novo Automóvel
                            </button>
                          </div>
                          <Paper
                            className={classes.paper}
                            elevation={50}>
                            <DataGrid
                              className={classes.dataGrid}
                              rows={car}
                              columns={carroRow}
                              pageSize={5}
                              autoHeight={true}
                              disableSelectionOnClick={true} />
                          </Paper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </div>
          </div>
          {/* <footer
            className="footer navbar-fixed-bottom text-center">
            <p
              style={{
                textAlign: 'center',
                color: 'white',
                marginTop: '2.5vh'
              }}>&copy; 2022 autotech.com.br
            </p>
          </footer> */}
        </div>
      </section>
    </>
  )
}