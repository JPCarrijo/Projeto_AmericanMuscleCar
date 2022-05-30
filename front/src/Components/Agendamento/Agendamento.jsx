import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import MuiAlert from '@material-ui/core/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import '../Agendamento/variables.css';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import br from 'date-fns/locale/pt-BR';
registerLocale('br', br)

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
    //border: '1px solid'
  },
  paper: {
    border: '1px solid',
    boxShadow: '0 0 2em black',
  },
  formFieldIn: {
    textAlign: 'center',
    fontSize: '12pt',
    borderRadius: '5px',
    backgroundColor: 'rgba(350, 240, 190, 0.45)',
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
}))


const formatChars = {
  '9': '[0-9]',
}

const cpfMask = '999.999.999-99'
export default function Agendamento() {

  const classes = useStyles();

  const history = useHistory();

  const [evento, setEvento] = useState([]);

  const [open, setOpen] = useState(false);

  const [dialog, setDialog] = useState(false);

  const [delAgenda, setDelAgenda] = useState();

  const [agenda, setAgenda] = useState({
    id: null,
    nome: '',
    cpf: '',
    email: '',
    marca: '',
    modelo: '',
    ano: (new Date()).getFullYear()
  });

  const [selectDate, setSelectDate] = useState(new Date());

  const [error, setError] = useState({
    nome: '',
    cpf: '',
    email: '',
    marca: '',
    modelo: '',
    ano: ''
  })

  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: 'Agendamento salvo com sucesso.'
  })

  const handleChange = (e, property) => {
    const agendaTemp = { ...agenda }
    if (e.target.id) property = e.target.id

    if (property === 'cpf') {
      agendaTemp[property] = e.target.value
    } else {
      agendaTemp[property] = e.target.value
    }

    setAgenda(agendaTemp)
    validate(agendaTemp)
    console.log(agendaTemp);
  }
  const validate = (data) => {
    const errorTemp = {
      nome: '',
      cpf: '',
      email: '',
      marca: '',
      modelo: '',
      ano: ''
    }

    let isValid = true

    if (data.nome.trim() === '') {
      errorTemp.nome = `Insira um nome`
      isValid = false
    }

    if (data.cpf.trim() === '' || data.cpf.includes('_')) {
      errorTemp.cpf = `Insira um CPF válido!`
      isValid = false
    }

    if (data.email.trim() === '') {
      errorTemp.email = `Insira um e-mail válido`
      isValid = false
    }

    if (data.marca.trim() === '') {
      errorTemp.marca = `Insira a marca do automóvel`
      isValid = false
    }

    if (data.modelo.trim() === '') {
      errorTemp.modelo = `Insira o modelo do automóvel`
      isValid = false
    }

    setError(errorTemp)
    return isValid
  }
  const years = () => {
    const result = []
    for (let i = (new Date()).getFullYear(); i >= 1970; i--)  result.push(i)
    return result
  }

  const saveAgendamento = async () => {
    try {
      await axios.post(`http://localhost:3001/agenda/insert`, {
        data: dateFormat(selectDate),
        nome: agenda.nome,
        cpf: agenda.cpf,
        email: agenda.email,
        marca: agenda.marca,
        modelo: agenda.modelo,
        ano: agenda.ano
      })
      setSnack({
        open: true,
        severity: 'success',
        message: 'Agendamento salvo com sucesso!'
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

  const dateFormatAux = (date) => {

    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate()),
      year = '' + d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');

  }

  const dateFormat = (date) => {

    var formatDiaMesAno = dateFormatAux(date);
    return formatDiaMesAno;

  }

  function handleDate(event) {

    setSelectDate(event)

    dateFormat(selectDate);

  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function handleSnack(event, reason) {
    if (reason === 'clickway') return
    setSnack({ ...snack, open: false })
  }

  const handleAgenda = () => {
    if (validate(agenda)) {
      saveAgendamento()
      setSelectDate(new Date())
      setAgenda({
        nome: '',
        cpf: '',
        email: '',
        marca: '',
        modelo: '',
        ano: ''
      })
    }
  }

  async function deleteAgenda() {
    try {
      await axios.delete(`http://localhost:3001/agenda/delete/${delAgenda}`)
      getData();

      setSnack({
        open: true,
        severity: 'success',
        message: 'Agendamento excluído com sucesso!'
      })
    }
    catch (error) {
      setSnack({
        open: true,
        severity: 'error',
        message: 'ERRO: ' + error.message
      })
    }
    setOpen(true)
  }

  const getData = () => {
    fetch(`http://localhost:3001/agenda/listar`)
      .then((response) => response.json())
      .then((response) => setEvento(response))
  }

  useEffect(() => {
    setTimeout(() => getData(), 1000)
  }, [])

  function handleDelete(id) {
    setDelAgenda(id)
    setDialog(true)
  }

  const handleDialogClose = (result) => {
    setDialog(false);
    if (result) deleteAgenda()
  }

  const handleClose = () => {
    if (agenda) setDialog(false)
  }

  const handleSnackClose = (event, reason) => { // fecha Snack do evento delete
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  }

  function novoAgend() {
    document.getElementById('nav-home-tab').click()
  }

  const agendaRow: GridColDef[] = [
    {
      field: 'id',
      headerClassName: 'super-app-theme--header',
      headerName: 'ID',
      align: 'center',
      width: 100,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'dataAgendamento',
      headerName: 'Data Agendada',
      width: 200,
      //flex: true
    },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 160,
      //flex: true
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 150,
      //flex: true,
      sortComparator: (n1, n2) => Number(n1) > Number(n2) ? 1 : -1
    },
    {
      field: 'email',
      headerName: 'E-Mail',
      width: 180,
      //flex: true
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
      width: 150,
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

  return (
    <>
    <Dialog
      className={classes.dialog}
      open={dialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle
        id="alert-dialog-title">
        {"Exclusão de Agendamento"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description">
          Deseja excluir o agendamento?
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
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleSnackClose}>
        <Alert
          onClose={handleSnackClose}
          severity={snack.severity}>
          {snack.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleSnack}>
        <Alert
          onClose={handleSnack}
          severity={snack.severity}>
          {snack.message}
        </Alert>
      </Snackbar>
      <section
        className="vh-100 sectionHome"
        style={{
          backgroundColor: 'rgba(6, 36, 21, 0.78)',
        }}>
        <div
          className="container h-100" >
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
                      }}> Agendamento
                    </a>
                    <a
                      className="nav-item nav-link" id="nav-agenda-tab"
                      data-toggle="tab"
                      href="#nav-agenda"
                      role="tab"
                      aria-controls="nav-agenda"
                      aria-selected="false"
                      style={{
                        color: 'black',
                        fontSize: '15pt',
                        fontStyle: 'oblique'
                      }}> Agenda do Dia
                    </a>
                  </div>
                </nav>
                <div
                  className="tab-content"
                  id="nav-tabContent">
                  <div
                    className="tab-pane fade show active" id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab" >
                    <form  >
                      <div className="row">
                        <div className="col-md-12 my-3">
                          <div className="col-md-2" >
                            <DatePicker
                              locale="br"
                              selected={selectDate}
                              onChange={(event) => handleDate(event)}
                              className={classes.formFieldIn}
                              id="entrada"
                              name="entrada"
                              dateFormat="dd/MM/yyyy"
                              minDate={new Date()} />
                          </div>
                        </div>
                        <div className="col-md-6 my-2">
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
                            value={agenda.nome}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={error.nome !== ''}
                            helperText={error.nome}
                          />
                        </div>
                        <div className="col-md-6 my-2">
                          <InputMask
                            formatChars={formatChars}
                            mask={cpfMask}
                            id="rg"
                            value={agenda.cpf}
                            onChange={e => handleChange(e, 'cpf')}>
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
                              error={error.cpf !== ''}
                              helperText={error.cpf} />}
                          </InputMask>
                        </div>
                        <div className="col-md-6 my-2">
                          <TextField
                            id="email"
                            label="E-mail"
                            name="email"
                            variant="standard"
                            InputProps={{
                              style: {
                                fontSize: '12pt'
                              }
                            }}
                            value={agenda.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={error.email !== ''}
                            helperText={error.email}
                          />
                        </div>
                        <div className="col-md-6 my-2">
                          <TextField
                            id="marca"
                            label="Marca Veículo"
                            name="marca"
                            variant="standard"
                            InputProps={{
                              style: {
                                fontSize: '12pt'
                              }
                            }}
                            value={agenda.marca}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={error.marca !== ''}
                            helperText={error.marca} />
                        </div>
                        <div className="col-md-6 my-2">
                          <TextField
                            id="modelo"
                            label="Modelo Veículo"
                            name="modelo"
                            variant="standard"
                            InputProps={{
                              style: {
                                fontSize: '12pt'
                              }
                            }}
                            value={agenda.modelo}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={error.modelo !== ''}
                            helperText={error.modelo} />
                        </div>
                        <div className="col-md-6 my-2">
                          <TextField
                            id="ano"
                            label="Ano Fabricação"
                            variant="standard"
                            InputProps={{
                              style: {
                                fontSize: '12pt'
                              }
                            }}
                            name="ano"
                            value={agenda.ano}
                            onChange={e => handleChange(e, 'ano')}
                            select
                            fullWidth
                            error={error.ano !== ''}
                            helperText={error.ano} >
                            {
                              years().map(year =>
                                <MenuItem
                                  key={year}
                                  value={year}> {year}
                                </MenuItem>
                              )}
                          </TextField>
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
                            className="col-md-6 ">
                            <button
                              type="button"
                              className="btn btn-dark btn-xl my-2"
                              name="buttonCarro"
                              style={{
                                fontStyle: 'oblique',
                                fontWeight: 'bold'
                              }}
                              onClick={handleAgenda}> Salvar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-agenda"
                    role="tabpanel"
                    aria-labelledby="nav-agenda-tab" >
                    <div
                      className="row">
                      <div
                        className="col-md-12">
                        <div
                          className="row"
                          style={{
                            borderBottom: '1px ridge',
                            paddingBottom: '2vh'
                          }}>
                          <div
                            className="col-md-12">
                            <button
                              type="button"
                              className="btn btn-dark btn-xl my-4 float-right" name="buttonNewClient"
                              style={{
                                fontStyle: 'oblique', fontWeight: 'bold'
                              }}
                              onClick={novoAgend}> +Novo Agendamento
                            </button>
                          </div>
                          <Paper
                            className={classes.paper}
                            elevation={50}>
                            <DataGrid
                              className={classes.dataGrid}
                              rows={evento}
                              columns={agendaRow}
                              pageSize={5}
                              autoHeight={true}
                              disableSelectionOnClick={true} />
                          </Paper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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