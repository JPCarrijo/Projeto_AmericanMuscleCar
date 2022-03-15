import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputMask from 'react-input-mask';
import axios from 'axios';
import { useHistory, useParams } from "react-router";
import MuiAlert from '@material-ui/core/Alert';
import { Snackbar } from '@material-ui/core';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import br from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('br', br)

const useStyles = makeStyles(() => ({
  label: {
    textAlign: 'center',
    fontSize: '18pt',
    fontWeight: 'bold'
  },
  control: {
    marginLeft: '2vw',
  },
  textfield: {
    textAlign: 'right'
  },
  formFieldIn: {
    textAlign: 'center',
    fontSize: '15pt',
    borderRadius: '10px',
    backgroundColor: 'rgba(350, 240, 190, 0.45)',
    marginLeft: '10vw'
  },
  formFieldOut: {
    textAlign: 'center',
    fontSize: '15pt',
    borderRadius: '10px',
    backgroundColor: 'rgba(350, 240, 190, 0.45)',
    marginLeft: '5vw'
  }
}))

const formatChars = {
  'A': '[A-Za-z]',
  '9': '[0-9]',
  '&': '[0-9A-Ja-j]'
}

const placaMask = 'AAA-9&99'
// const entradaMask = '99/99/9999'
// const saidaMask = '99/99/9999'
export default function Servico() {
  const classes = useStyles();

  const history = useHistory()
  const params = useParams()


  const [servico, setServico] = useState({
    id: null,
    // entrada: '',
    // saida: '',
    carroId: '',
    placa: '',
    km: '',
    descricao1: '',
    unitario1: '',
    quantidade1: '',
    total1: '',
    descricao2: '',
    unitario2: '',
    quantidade2: '',
    total2: '',
    descricao3: '',
    unitario3: '',
    quantidade3: '',
    total3: '',
    descricao4: '',
    unitario4: '',
    quantidade4: '',
    total4: '',
    descricao5: '',
    unitario5: '',
    quantidade5: '',
    total5: '',
    quantidadetotal: '',
    totalsoma: ''
  })

  const [selectDateIn, setSelectDateIn] = useState(null);
  const [selectDateOut, setSelectDateOut] = useState(null);

  const [error, setError] = useState({
    // entrada: '',
    // saida: '',
    carroId: '',
    placa: '',
    km: '',
  })

  const [snack, setSnack] = useState({
    open: false,
    severity: 'success',
    message: 'Ordem salva com sucesso.'
  })

  const dateFormatAux = (date) => {

    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate()),
      year = '' + d.getFullYear();
    //console.log(d);
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');

  }

  const dateFormat = (date) => {

    var formatDiaMesAno = dateFormatAux(date);
    //console.log(formatDiaMesAno);
    return formatDiaMesAno;

  }
  console.log(dateFormat(selectDateIn));
  console.log(dateFormat(selectDateOut));

  function handleDateIn(event) {

    setSelectDateIn(event)
    //console.log(selectDateIn)

    dateFormat(selectDateIn);

  }

  function handleDateOut(event) {

    setSelectDateOut(event)
    //console.log(selectDateOut)

    dateFormat(selectDateOut);

  }

  function handleChange(event, property) {
    //event.preventDefault();
    const servicoTemp = { ...servico }

    if (event.target.id) property = event.target.id

    if (property === 'placa') {
      servicoTemp[property] = event.target.value.toUpperCase()
    }
    else if ((property === 'km') || (property === 'carroId')) {
      servicoTemp[property] = event.target.value
    }

    else {
      servicoTemp[property] = event.target.value
    }

    setServico(servicoTemp)
    validate(servicoTemp)
    console.log(servicoTemp);
  }

  function validate(data) {
    const errorTemp = {
      carroId: '',
      placa: '',
      km: '',
    }

    let isValid = true

    if (data.carroId.trim() === '' || !Number(data.carroId)) {
      errorTemp.carroId = `Insira o código do veículo`
      isValid = false
    }

    if (data.placa.trim() === '' || data.placa.includes('_')) {
      errorTemp.placa = `Insira a placa corretamente!`
      isValid = false
    }

    if (data.km.trim() === '' || !Number(data.km)) {
      errorTemp.km = `Insira um KM válido`
      isValid = false
    }

    setError(errorTemp)
    return isValid
  }

  function listaCarros() {
    history.push('/listacarros')
  }

  function saveDataServico() {
    try {
      axios.post("http://localhost:3001/servico/insert", {
        entrada: dateFormat(selectDateIn),
        saida: dateFormat(selectDateOut),
        carroId: servico.carroId,
        placa: servico.placa,
        km: servico.km,
        descricao1: servico.descricao1,
        unitario1: servico.unitario1,
        quantidade1: servico.quantidade1,
        total1: servico.total1,
        descricao2: servico.descricao2,
        unitario2: servico.unitario2,
        quantidade2: servico.quantidade2,
        total2: servico.total2,
        descricao3: servico.descricao3,
        unitario3: servico.unitario3,
        quantidade3: servico.quantidade3,
        total3: servico.total3,
        descricao4: servico.descricao4,
        unitario4: servico.unitario4,
        quantidade4: servico.quantidade4,
        total4: servico.total4,
        descricao5: servico.descricao5,
        unitario5: servico.unitario5,
        quantidade5: servico.quantidade5,
        total5: servico.total5,
        quantidadetotal: servico.quantidadetotal,
        totalsoma: servico.totalsoma
      })
      setSnack({
        open: true,
        severity: 'success',
        message: 'Ordem de salva com sucesso!'
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

  function handleServico() {
    if (validate(servico)) {
      saveDataServico()
      setServico({
        entrada: '',
        saida: '',
        carroId: '',
        placa: '',
        km: '',
        descricao1: '',
        unitario1: '',
        quantidade1: '',
        total1: '',
        descricao2: '',
        unitario2: '',
        quantidade2: '',
        total2: '',
        descricao3: '',
        unitario3: '',
        quantidade3: '',
        total3: '',
        descricao4: '',
        unitario4: '',
        quantidade4: '',
        total4: '',
        descricao5: '',
        unitario5: '',
        quantidade5: '',
        total5: '',
        quantidadetotal: '',
        totalsoma: ''
      })
    }
  }
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function handleSnack(event, reason) {
    if (reason === 'clickway') return
    setSnack({ ...snack, open: false })
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
        className="container-fluid h-100 d-inline-block"
        style={{ paddingTop: '11.5vh', paddingBottom: '10.2vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%' }}>
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
                    className="col-md-8"
                    style={{ paddingTop: '1vh', paddingLeft: '3.3vw' }}>
                    <h5
                      style={{ fontSize: '17pt', fontWeight: '700' }}>
                      Ordem de Serviços </h5>
                  </div>
                  <div
                    className="col-md-4 "
                    style={{ textAlign: 'center', marginBottom: '1vh' }}>
                    <button
                      type="button"
                      className="btn btn-dark me-md-6 btn-lg" name="buttonUsuario"
                      style={{ fontStyle: 'oblique', fontWeight: 'bold' }}
                      onClick={listaCarros}>
                      Lista Carros </button>
                  </div>
                </div>
                <div
                  className="row container-fluid"
                  style={{ marginLeft: '0.04vw' }}>
                  <div
                    className="col-md-12"
                    style={{ border: '1px ridge black', borderRadius: '1rem 1rem 0 0' }}>
                    <div
                      className="row" >
                      <div
                        className="col-md-6">

                        {/* <InputMask
                          formatChars={formatChars}
                          mask={entradaMask}
                          id="entrada"
                          value={servico.entrada}
                          onChange={event => handleChange(event, 'entrada')}>
                          {() => <TextField
                            label="Data de Entrada"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            fullWidth
                            name="entrada"
                            error={error.entrada !== ''}
                            helperText={error.entrada} />}
                        </InputMask> */}
                        <DatePicker
                          locale="br"
                          selected={selectDateIn}
                          onChange={event => handleDateIn(event)}
                          className={classes.formFieldIn}
                          id="entrada"
                          name="entrada"
                          placeholderText="Data Entrada"
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                        />

                      </div>
                      <div
                        className="col-md-6">
                        {/* <InputMask
                          formatChars={formatChars}
                          mask={saidaMask}
                          id="saida"
                          value={servico.saida}
                          onChange={event => handleChange(event, 'saida')}>
                          {() => <TextField
                            label="Data de Saída"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            fullWidth
                            name="saida"
                            error={error.saida !== ''}
                            helperText={error.saida} />}
                        </InputMask> */}
                        <DatePicker
                          locale="br"
                          selected={selectDateOut}
                          onChange={event => handleDateOut(event)}
                          className={classes.formFieldOut}
                          id="saida"
                          name="saida"
                          placeholderText="Data Saída"
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12"
                    style={{ height: '1vh' }} ></div>
                  <div
                    className="col-md-12"
                    style={{ border: '1px ridge black' }}>
                    <div
                      className="row">
                      <div
                        className="col-md-4">
                        <InputMask
                          formatChars={formatChars}
                          mask={placaMask}
                          id="placa"
                          value={servico.placa}
                          onChange={event => handleChange(event, 'placa')}                        >
                          {() => <TextField
                            label="Placa"
                            variant="standard"
                            fullWidth
                            InputProps={{ style: { fontSize: '17pt' } }}
                            error={error.placa !== ''}
                            helperText={error.placa}
                          />}</InputMask>
                      </div>
                      <div
                        className="col-md-4">
                        <TextField
                          id="km"
                          label="KM"
                          name="km"
                          variant="standard"
                          InputProps={{ style: { fontSize: '17pt' } }}
                          value={servico.km}
                          onChange={event => handleChange(event, 'km')}
                          fullWidth
                          error={error.km !== ''}
                          helperText={error.km}
                        />
                      </div>
                      <div
                        className="col-md-4">
                        <TextField
                          id="carroId"
                          label="Cód. Carro"
                          name="carroId"
                          variant="standard"
                          InputProps={{ style: { fontSize: '17pt' } }}
                          value={servico.carroId}
                          onChange={event => handleChange(event, 'carroId')}
                          fullWidth
                          error={error.carroId !== ''}
                          helperText={error.carroId}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12"
                    style={{ height: '1vh' }} ></div>
                  <div
                    className="col-md-7"
                    style={{ border: '1px ridge black' }}>
                    <h5
                      className="h5 text-md-center">
                      Descrições </h5>
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <h5
                      className="h5 text-md-center">
                      Valor Unit.</h5>
                  </div>
                  <div
                    className="col-md-1"
                    style={{ border: '1px ridge black' }}>
                    <h5
                      className=" h5 text-md-center">
                      Quant. </h5>
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <h5
                      className="h5 text-md-center">
                      Valor Total</h5>
                  </div>
                  <div
                    className="col-md-7"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao1"
                      name="descricao1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao1}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="unitario1"
                      name="unitario1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario1}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-1"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="quantidade1"
                      name="quantidade1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade1}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="total1"
                      name="total1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total1}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-7"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao2"
                      name="descricao2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao2}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="unitario2"
                      name="unitario2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario2}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-1"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="quantidade2"
                      name="quantidade2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade2}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="total2"
                      name="total2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total2}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-7"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao3"
                      name="descricao3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao3}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="unitario3"
                      name="unitario3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario3}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-1"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="quantidade3"
                      name="quantidade3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade3}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="total3"
                      name="total3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total3}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-7"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao4"
                      name="descricao4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao4}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="unitario4"
                      name="unitario4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario4}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-1"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="quantidade4"
                      name="quantidade4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade4}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="total4"
                      name="total4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total4}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-7"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao5"
                      name="descricao5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao5}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="unitario5"
                      name="unitario5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario5}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-1"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="quantidade5"
                      name="quantidade5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade5}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="total5"
                      name="total5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total5}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-12">
                  </div>
                  <div
                    className="col-md-7"
                    style={{ border: '1px ridge black' }}>
                    <h3
                      className="text-end">
                      Soma </h3>
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                  </div>
                  <div
                    className="col-md-1"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="quantidadetotal"
                      name="quantidadetotal"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidadetotal}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="totalsoma"
                      name="totalsoma"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.totalsoma}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-12"
                    style={{ height: '1vh' }} ></div>
                  <div
                    className="col-md-8"
                    style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh', backgroundColor: 'rgba(0, 0, 0, 0.42)', paddingTop: '3.5vh', borderRadius: '0 0 0 1rem' }}>
                    <h1
                      className="h1 text-center"
                      style={{ fontFamily: 'Permanent Marker', paddingTop: '1vh' }}> Auto Tech </h1>
                  </div>
                  <div
                    className="col-md-4"
                    style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh', borderRadius: '0 0 1rem 0' }}>
                    <FormControl
                      className={classes.control}
                      component="fieldset"
                    >
                      <FormLabel
                        className={classes.label}
                        component="legend"
                      > Formas de Pagamento </FormLabel>
                      <RadioGroup
                        row
                        aria-label="gender"
                        defaultValue="Boleto"
                        name="radio-buttons-group">
                        <FormControlLabel
                          labelPlacement="bottom"
                          value="dinheiro"
                          name="dinheiro"
                          onChange={handleChange}
                          control={<Radio />}
                          label="Dinheiro" />
                        <FormControlLabel
                          labelPlacement="bottom"
                          value="cartao"
                          name="cartao"
                          onChange={handleChange}
                          control={<Radio />}
                          label="Cartão" />
                        <FormControlLabel
                          labelPlacement="bottom"
                          value="boleto"
                          name="boleto"
                          onChange={handleChange}
                          control={<Radio />}
                          label="Boleto" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div
                    className="col-sm-6"
                    style={{ paddingTop: '8vh', textAlign: 'center' }}>
                    <button
                      type="button"
                      className="btn btn-dark me-md-6 btn-lg" name="buttonVoltar"
                      onClick={() => history.push(`/home`)}
                      style={{ fontStyle: 'oblique', fontWeight: 'bold' }}>
                      Home </button>
                  </div>
                  <div
                    className="col-sm-6 "
                    style={{ paddingTop: '8vh', textAlign: 'center' }}>
                    <button
                      type="button"
                      className="btn btn-dark me-md-6 btn-lg" name="buttonUsuario" style={{ fontStyle: 'oblique', fontWeight: 'bold' }}
                      onClick={handleServico}> Salvar </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="footer navbar-fixed-bottom text-center">
        <p
          style={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>&copy; 2021 Auto Tech.com</p>
      </footer>
    </>
  )
}