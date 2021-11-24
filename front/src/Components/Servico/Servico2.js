import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputMask from 'react-input-mask';
import axios from 'axios';
import { useHistory, useParams } from "react-router";

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
  }
}))

const formatChars = {
  'A': '[A-Za-z]',
  '9': '[0-9]',
  '&': '[0-9A-Ja-j]'
}

const placaMask = 'AAA-9&99'
const entradaMask = '99/99/9999'
const saidaMask = '99/99/9999'
export default function Servico() {
  const classes = useStyles();

  const history = useHistory()
  const params = useParams()

  //const classes = useStyles();
  const [servico, setServico] = useState({
    id: null,
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

  const [error, setError] = useState({
    entrada: '',
    saida: '',
    carroId: '',
    placa: '',
    km: '',
  })

  function handleChange(event, property) {
    //event.preventDefault();
    const servicoTemp = { ...servico }

    if (event.target.id) property = event.target.id

    if (property === 'placa') {
     servicoTemp[property] = event.target.value
    }
    else if ((property === 'entrada') || (property === 'saida') || (property === 'km') || (property === 'carroId')) {
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
      entrada: '',
      saida: '',
      carroId: '',
      placa: '',
      km: '',
    }

    let isValid = true

    if (data.entrada.trim() === '' || data.entrada.includes('_')) {
      errorTemp.entrada = `Insira uma data de entrada`
      isValid = false
    }

    if (data.saida.trim() === '' || data.saida.includes('_')) {
      errorTemp.saida = `Insira uma data de saída`
      isValid = false
    }

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
    axios.post("http://localhost:3001/servico/insert", {
      entrada: servico.entrada,
      saida: servico.saida,
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
    }).then(() => {
      alert("Successful Insert!")
    })
  }

  const [evento, setEvento] = useState([])

  const buscar = async () => {
      await axios.post(`http://localhost:3001/servico/listar`, {
        placa: servico.placa 
      })
        .then(response => setEvento(response.data))
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

  return (
    <>
      <section className="container-fluid h-100 d-inline-block" style={{ paddingTop: '11.5vh', paddingBottom: '10.2vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%' }}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col col-xl-12" >
              <div role="main" className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>
                <div className="row">
                  <div className="col-md-8" style={{ paddingTop: '1vh', paddingLeft: '3.3vw' }}>
                    <h5 style={{ fontSize: '17pt', fontWeight: '700' }}> Ordem de Serviços </h5>
                  </div>
                  <div className="col-md-4 " style={{ textAlign: 'center', marginBottom: '1vh' }}>
                    <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonUsuario" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick={listaCarros}> Lista Carros </button>
                  </div>
                </div>
                <div className="row container-fluid" style={{ marginLeft: '0.04vw' }}>
                  <div className="col-md-12" style={{ border: '1px ridge black', borderRadius: '1rem 1rem 0 0' }}>
                    <div className="row" >
                      <div className="col-md-6">
                        <InputMask
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
                            //required
                            error={error.entrada !== ''}
                            helperText={error.entrada} />}
                        </InputMask>
                      </div>
                      <div className="col-md-6">
                        <InputMask
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
                            //required
                            error={error.saida !== ''}
                            helperText={error.saida} />}
                        </InputMask>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12" style={{ height: '1vh' }} ></div>

                  <div className="col-md-12" style={{ border: '1px ridge black' }}>
                    <div className="row">
                      <div className="col-md-4">
                        
                        <InputMask
                          formatChars={formatChars}
                          mask={placaMask}
                          id="placa"
                          value={servico.placa}
                          onChange={event => handleChange(event, 'placa')}
                        >
                          {() => <TextField
                            label="Placa"
                            variant="standard"
                            fullWidth
                            //required
                            InputProps={{ style: { fontSize: '17pt' } }}
                            error={error.placa !== ''}
                            helperText={error.placa}
                          />}</InputMask>
                          {/* <TextField
                          id="placa"
                          label="Placa"
                          name="placa"
                          variant="standard"
                          InputProps={{ style: { fontSize: '17pt' } }}
                          value={servico.placa}
                          onChange={event => handleChange(event, 'placa')}
                          fullWidth
                          //required
                          error={error.placa !== ''}
                          helperText={error.placa}
                        />*/}
                      </div>
                      <div className="">
                        <button onClick={() => buscar(params.placa)}> Buscar </button>
                      </div>
                      <div className="col-md-4">
                        {evento.map((item) => 
                          <ul>  
                            <li key={item.id}> {item.marca} </li >
                            <li> {item.modelo} </li>
                          </ul>
                        )}
                        {/*<TextField
                          id="km"
                          label="KM"
                          name="km"
                          variant="standard"
                          InputProps={{ style: { fontSize: '17pt' } }}
                          value={servico.km}
                          onChange={event => handleChange(event, 'km')}
                          fullWidth
                          //required
                          error={error.km !== ''}
                          helperText={error.km}
                        />*/}
                      </div>
                      <div className="col-md-4">
                        <TextField
                          id="carroId"
                          label="Cód. Carro"
                          name="carroId"
                          variant="standard"
                          InputProps={{ style: { fontSize: '17pt' } }}
                          value={servico.carroId}
                          onChange={event => handleChange(event, 'carroId')}
                          fullWidth
                          //required
                          error={error.carroId !== ''}
                          helperText={error.carroId}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12" style={{ height: '1vh' }} ></div>

                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
                    <h5 className="h5 text-md-center"> Descrições </h5>
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <h5 className="h5 text-md-center"> Valor Unit.</h5>
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <h5 className=" h5 text-md-center"> Quant. </h5>
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <h5 className="h5 text-md-center"> Valor Total</h5>
                  </div>
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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

                  <div className="col-md-12"> </div>

                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
                    <h3 className="text-end"> Soma </h3>
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
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
                  <div className="col-md-12" style={{ height: '1vh' }} ></div>
                  <div className="col-md-8" style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh', backgroundColor: 'rgba(0, 0, 0, 0.42)', paddingTop: '3.5vh', borderRadius: '0 0 0 1rem' }}><h1 className="h1 text-center" style={{ fontFamily: 'Permanent Marker' }}> American MuscleCar </h1>
                  </div>
                  <div className="col-md-4" style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh', borderRadius: '0 0 1rem 0' }}>
                    <FormControl
                      className={classes.control}
                      component="fieldset"
                    >
                      <FormLabel
                        className={classes.label}
                        component="legend"
                      > Formas de Pagamento </FormLabel>
                      <RadioGroup row
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
                  <div className="col-sm-6" style={{ paddingTop: '8vh', textAlign: 'center' }}>
                    <button type="button" className="btn btn-dark me-md-6 btn-lg" name="buttonVoltar" onClick={() => history.push(`/home`)} style={{ fontStyle: 'oblique', fontWeight: 'bold' }}> Home </button>
                  </div>
                  <div className="col-sm-6 " style={{ paddingTop: '8vh', textAlign: 'center' }}>
                    <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonUsuario" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick={handleServico}> Salvar </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer navbar-fixed-bottom text-center">
        <p style={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>&copy; 2021 American MuscleCar.com</p>
      </footer>
    </>
  )
}

/*
                        <TextField
                          id="inputMarca"
                          label="Proprietário"
                          name="proprietario"
                          variant="standard"
                          InputProps={{ style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }}
                        />



                           <div className="col-md-7" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao6"
                      name="descricao6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao6}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario6"
                      name="unitario6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario6}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade6"
                      name="quantidade6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade6}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total6"
                      name="total6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total6}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao7"
                      name="descricao7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao7}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario7"
                      name="unitario7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario7}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade7"
                      name="quantidade7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade7}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total7"
                      name="total7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total7}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao8"
                      name="descricao8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao8}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario8"
                      name="unitario8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario8}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade8"
                      name="quantidade8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade8}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total8"
                      name="total8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total8}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao9"
                      name="descricao9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao9}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario9"
                      name="unitario9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario9}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade9"
                      name="quantidade9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade9}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total9"
                      name="total9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total9}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-7" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao10"
                      name="descricao10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.descricao10}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario10"
                      name="unitario10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.unitario10}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade10"
                      name="quantidade10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.quantidade10}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-2" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total10"
                      name="total10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      value={servico.total10}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
*/