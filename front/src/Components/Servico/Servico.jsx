import React, { useState } from "react";
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
  textfield: {
    textAlign: 'right',
  },
  formFieldIn: {
    textAlign: 'center',
    fontSize: '14pt',
    paddingLeft: '8px',
    borderRadius: '10px',
    backgroundColor: 'rgba(350, 240, 190, 0.45)',
    marginLeft: '13vw',
  },
  formFieldOut: {
    textAlign: 'center',
    fontSize: '14pt',
    paddingLeft: '8px',
    borderRadius: '10px',
    backgroundColor: 'rgba(350, 240, 190, 0.45)',
    marginLeft: '8vw',
  },

}))

const formatChars = {
  'A': '[A-Za-z]',
  '9': '[0-9]',
  '&': '[0-9A-Ja-j]'
}

const placaMask = 'AAA-9&99'
export default function Servico() {
  const classes = useStyles();

  const history = useHistory()
  const params = useParams()


  const [servico, setServico] = useState({
    id: null,
    carroId: '',
    placa: '',
    km: '',
    descricao1: '',
    descricao2: '',
    descricao3: '',
    descricao4: '',
    descricao5: ''
  })

  const [selectDateIn, setSelectDateIn] = useState(new Date());
  const [selectDateOut, setSelectDateOut] = useState(new Date());
  const [pay, setPay] = useState('Dinheiro')

  const [qtd1, setQtd1] = useState(0)
  const [unit1, setUnit1] = useState(0)

  const [qtd2, setQtd2] = useState(0)
  const [unit2, setUnit2] = useState(0)

  const [qtd3, setQtd3] = useState(0)
  const [unit3, setUnit3] = useState(0)

  const [qtd4, setQtd4] = useState(0)
  const [unit4, setUnit4] = useState(0)

  const [qtd5, setQtd5] = useState(0)
  const [unit5, setUnit5] = useState(0)

  const [partialQtd, setPartialQtd] = useState([])
  const [partialSum, setPartialSum] = useState([])

  const [error, setError] = useState({
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
      km: ''
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
        unitario1: unit1,
        quantidade1: qtd1,
        total1: partialSum[0],
        descricao2: servico.descricao2,
        unitario2: unit2,
        quantidade2: qtd2,
        total2: partialSum[1],
        descricao3: servico.descricao3,
        unitario3: unit3,
        quantidade3: qtd3,
        total3: partialSum[2],
        descricao4: servico.descricao4,
        unitario4: unit4,
        quantidade4: qtd4,
        total4: partialSum[3],
        descricao5: servico.descricao5,
        unitario5: unit5,
        quantidade5: qtd5,
        total5: partialSum[4],
        quantidadetotal: totalQtd,
        totalsoma: totalSum,
        pagamento: pay,
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
        carroId: '',
        placa: '',
        km: '',
        descricao1: '',
        descricao2: '',
        descricao3: '',
        descricao4: '',
        descricao5: '',
      })
      setSelectDateIn(new Date())
      setSelectDateOut(new Date())
      setPay('Dinheiro')
      setUnit1(0)
      setUnit2(0)
      setUnit3(0)
      setUnit4(0)
      setUnit5(0)
      setQtd1(0)
      setQtd2(0)
      setQtd3(0)
      setQtd4(0)
      setQtd5(0)
      setPartialQtd([])
      setPartialSum([])
    }
  }
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function handleSnack(event, reason) {
    if (reason === 'clickway') return
    setSnack({ ...snack, open: false })
  }

  const sumPartial = (e) => {
    if (e.target.id === 'unit1') {
      setUnit1(e.target.value)
    }
    if (e.target.id === 'qtd1') {
      let qtd = e.target.value
      setQtd1(qtd)
      partialQtd.push(qtd)
      partialSum.push(unit1 * qtd)
    }
    if (e.target.id === 'unit2') {
      setUnit2(e.target.value)
    }
    if (e.target.id === 'qtd2') {
      let qtd = e.target.value
      setQtd2(qtd)
      partialQtd.push(qtd)
      partialSum.push(unit2 * qtd)
    }
    if (e.target.id === 'unit3') {
      setUnit3(e.target.value)
    }
    if (e.target.id === 'qtd3') {
      let qtd = e.target.value
      setQtd3(qtd)
      partialQtd.push(qtd)
      partialSum.push(unit3 * qtd)
    }
    if (e.target.id === 'unit4') {
      setUnit4(e.target.value)
    }
    if (e.target.id === 'qtd4') {
      let qtd = e.target.value
      setQtd4(qtd)
      partialQtd.push(qtd)
      partialSum.push(unit4 * qtd)
    }
    if (e.target.id === 'unit5') {
      setUnit5(e.target.value)
    }
    if (e.target.id === 'qtd5') {
      let qtd = e.target.value
      setQtd5(qtd)
      partialQtd.push(qtd)
      partialSum.push(unit5 * qtd)
    }
  }

  const somaTotal = (num1, num2) => {
    let total = parseFloat(num1) * parseInt(num2)
    return Number(total) ? total : 0.00
  }

  const totalQtd = partialQtd.reduce((acum, atual) => Number(acum) + Number(atual), 0)

  const totalSum = partialSum.reduce((acum, atual) => Number(acum) + Number(atual), 0)


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
        className="container{breakpoint} sectionHome"
        style={{
          backgroundColor: 'rgba(6, 36, 21, 0.78)'
        }}>
        <div
          className="container pt-5 h-100" >
          <div
            className="row d-flex justify-content-center align-items-center h-100" >
            <div
              className="col col-xl-12" >
              <div
                role="main"
                className="card my-5 pt-5"
                style={{
                  borderRadius: '1rem',
                  boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)',
                  backgroundColor: '  rgba(350, 240, 190, 0.75)',
                  padding: '2.5vw'
                }}>
                <div
                  className="row">
                  <div
                    className="col-md-6 ps-5">
                    <h5
                      style={{
                        fontSize: '17pt',
                        fontWeight: 'bold'
                      }}>
                      Ordem de Serviços
                    </h5>
                  </div>
                  <div
                    className="col-md-6 pe-5">
                    <button
                      type="button"
                      className="btn btn-dark btn-xl my-2 float-right"
                      name="buttonUsuario"
                      style={{
                        fontStyle: 'oblique',
                        fontWeight: 'bold'
                      }}
                      onClick={listaCarros}>
                      Lista Carros
                    </button>
                  </div>
                </div>
                <div
                  className="row">
                  <div
                    className="col-md-12"
                    style={{
                      border: '1px ridge black',
                      borderRadius: '1rem 1rem 0 0'
                    }}>
                    <div
                      className="row" >
                      <div
                        className="col-md-6">
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
                    style={{
                      height: '1vh'
                    }} >
                  </div>
                  <div
                    className="col-md-12"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <div
                      className="row">
                      <div
                        className="col-md-4">
                        <TextField
                          id="carroId"
                          label="Cód. Carro"
                          name="carroId"
                          variant="standard"
                          InputProps={{
                            style: {
                              fontSize: '14pt'
                            }
                          }}
                          value={servico.carroId}
                          onChange={event => handleChange(event, 'carroId')}
                          fullWidth
                          error={error.carroId !== ''}
                          helperText={error.carroId}
                        />
                      </div>
                      <div
                        className="col-md-4">
                        <InputMask
                          formatChars={formatChars}
                          mask={placaMask}
                          id="placa"
                          value={servico.placa}
                          onChange={event => handleChange(event, 'placa')}>
                          {() => <TextField
                            label="Placa"
                            variant="standard"
                            fullWidth
                            InputProps={{
                              style: {
                                fontSize: '14pt'
                              }
                            }}
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
                          InputProps={{
                            style: {
                              fontSize: '14pt'
                            }
                          }}
                          value={servico.km}
                          onChange={event => handleChange(event, 'km')}
                          fullWidth
                          error={error.km !== ''}
                          helperText={error.km}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12"
                    style={{
                      height: '1vh'
                    }} ></div>
                  <div
                    className="col-md-6"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <h5
                      className="h5 float-left">
                      Descrições </h5>
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <h5
                      className="h5 float-left">
                      Valor Unit.</h5>
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <h5
                      className=" h5 float-left">
                      Quant. </h5>
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <h5
                      className="h5 float-left">
                      Valor Total</h5>
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      id="descricao1"
                      name="descricao1"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={servico.descricao1}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.input}
                      id="unit1"
                      name="unitario1"
                      type="number"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={unit1}
                      onChange={e => sumPartial(e, 'unit1')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black',
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="qtd1"
                      type="number"
                      name="quantidade1"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={qtd1}
                      onChange={e => sumPartial(e, 'qtd1')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2 text-right pt-1"
                    style={{
                      border: '1px ridge black',
                      fontSize: '15pt',
                      fontWeight: '500'
                    }}>
                    {somaTotal(unit1, qtd1).toFixed(2).replace('.', ',')}
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      id="descricao2"
                      name="descricao2"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={servico.descricao2}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="unit2"
                      type="number"
                      name="unitario2"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={unit2}
                      onChange={e => sumPartial(e, 'unit2')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ border: '1px ridge black' }}>
                    <TextField
                      className={classes.textfield}
                      id="qtd2"
                      type="number"
                      name="quantidade2"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={qtd2}
                      onChange={e => sumPartial(e, 'qtd2')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2 text-right pt-1"
                    style={{
                      border: '1px ridge black',
                      fontSize: '15pt',
                      fontWeight: '500'
                    }}>
                    {somaTotal(unit2, qtd2).toFixed(2).replace('.', ',')}
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      id="descricao3"
                      name="descricao3"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={servico.descricao3}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="unit3"
                      type="number"
                      name="unitario3"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={unit3}
                      onChange={e => sumPartial(e, 'unit3')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="qtd3"
                      type="number"
                      name="quantidade3"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={qtd3}
                      onChange={e => sumPartial(e, 'qtd3')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2 text-right pt-1"
                    style={{
                      border: '1px ridge black',
                      fontSize: '15pt',
                      fontWeight: '500'
                    }}>
                    {somaTotal(unit3, qtd3).toFixed(2).replace('.', ',')}
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      id="descricao4"
                      name="descricao4"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={servico.descricao4}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="unit4"
                      type="number"
                      name="unitario4"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={unit4}
                      onChange={e => sumPartial(e, 'unit4')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="qtd4"
                      type="number"
                      name="quantidade4"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={qtd4}
                      onChange={e => sumPartial(e, 'qtd4')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2 text-right pt-1"
                    style={{
                      border: '1px ridge black',
                      fontSize: '15pt',
                      fontWeight: '500'
                    }}>
                    {somaTotal(unit4, qtd4).toFixed(2).replace('.', ',')}
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      id="descricao5"
                      name="descricao5"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={servico.descricao5}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="unit5"
                      type="number"
                      name="unitario5"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={unit5}
                      onChange={e => sumPartial(e, 'unit5')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2 text-right"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <TextField
                      className={classes.textfield}
                      id="qtd5"
                      type="number"
                      name="quantidade5"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          fontSize: '14pt'
                        }
                      }}
                      value={qtd5}
                      onChange={e => sumPartial(e, 'qtd5')}
                      fullWidth
                    />
                  </div>
                  <div
                    className="col-md-2 text-right pt-1"
                    style={{
                      border: '1px ridge black',
                      fontSize: '15pt',
                      fontWeight: '500'
                    }}>
                    {somaTotal(unit5, qtd5).toFixed(2).replace('.', ',')}
                  </div>
                  <div
                    className="col-md-12">
                  </div>
                  <div
                    className="col-md-8"
                    style={{
                      border: '1px ridge black'
                    }}>
                    <h4
                      className="h4 float-left">
                      Soma </h4>
                  </div>
                  <div
                    className="col-md-2 text-right pt-1"
                    style={{
                      border: '1px ridge black',
                      fontSize: '17pt',
                      fontWeight: '600'
                    }}>
                    {totalQtd}
                  </div>
                  <div
                    className="col-md-2 text-right pt-1"
                    style={{
                      border: '1px ridge black',
                      fontSize: '17pt',
                      fontWeight: '600'
                    }}>
                    {(totalSum).toFixed(2).replace('.', ',')}
                  </div>
                  <div
                    className="col-md-12"
                    style={{
                      height: '1vh'
                    }} ></div>
                  <div
                    className="col-md-8"
                    style={{
                      border: '1px ridge black',
                      backgroundColor: 'rgba(0, 0, 0, 0.42)', borderRadius: '0 0 0 1rem'
                    }}>
                    <h1
                      className="h1 text-center py-4"
                      style={{
                        fontFamily: 'Permanent Marker',
                        fontSize: '50pt'
                      }}> Auto Tech </h1>
                  </div>
                  <div
                    className="col-md-4 text-center py-3"
                    style={{
                      border: '1px ridge black',
                      borderRadius: '0 0 1rem 0'
                    }}>
                    <FormControl
                      className={classes.control}
                      component="fieldset">
                      <FormLabel
                        className={classes.label}
                        component="legend"
                      > Formas de Pagamento </FormLabel>
                      <RadioGroup
                        row
                        aria-label="gender"
                        defaultValue="Dinheiro"
                        name="radio-buttons-group">
                        <FormControlLabel
                          labelPlacement="bottom"
                          value="Dinheiro"
                          id="dinheiro"
                          onChange={e => setPay(e.target.value)}
                          control={<Radio />}
                          label="Dinheiro" />
                        <FormControlLabel
                          labelPlacement="bottom"
                          value="Cartão"
                          id="Cartao"
                          onChange={e => setPay(e.target.value)}
                          control={<Radio />}
                          label="Cartão" />
                        <FormControlLabel
                          labelPlacement="bottom"
                          value="Boleto"
                          id="Boleto"
                          onChange={e => setPay(e.target.value)}
                          control={<Radio />}
                          label="Boleto" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="row my-2 pt-3">
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
                        }}>
                        Home
                      </button>
                    </div>
                    <div
                      className="col-md-6 ">
                      <button
                        type="button"
                        className="btn btn-dark btn-xl my-2"
                        name="buttonUsuario"
                        style={{
                          fontStyle: 'oblique',
                          fontWeight: 'bold'
                        }}
                        onClick={handleServico}> Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer
          className="footer navbar-fixed-bottom text-center mt-4 pt-5">
          <p
            style={{
              textAlign: 'center',
              color: 'white'
            }}>&copy; 2022 autotech.com.br</p>
        </footer> */}
      </section>
    </>
  )
}