import React, { useState } from "react";
//import Nav from '../../img/nav.jpg';
import TextField from '@material-ui/core/TextField';
import { Radio, RadioGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import InputMask from 'react-input-mask';
import placa from '../../img/PlacaMercosulHeader.png';


const formatChars = {
  'A': '[A-Za-z]',
  '0': '[0-9]',
  '&': '[0-9A-Ja-j]'
}

const placaMask = 'AAA-0&00'
export default function Servico() {

  //const classes = useStyles();
  const [servico, setServico] = useState({
    id: null,
    placa: ''
  })

  const [error, setError] = useState({
    placa: ''
  })

  function handleChange(event, property) {
    //event.preventDefault();
    const servicoTemp = { ...servico }

    if (event.target.id) property = event.target.id

    if (property === 'placa') {
      servicoTemp[property] = event.target.value.toUpperCase()
    }
    else {
      servicoTemp[property] = event.target.value
    }

    setServico(servicoTemp)
    validate(servicoTemp)
    console.log(servico);
  }

  function validate(data) {
    const errorTemp = {
      placa: ''
    }

    let isValid = true

    if (data.placa.trim() === '' || data.placa.includes('_')) {
      errorTemp.placa = `Insira a placa corretamente!`
      isValid = false
    }

    setError(errorTemp)
    return isValid
  }

  return (
    <>
      <section className="container-fluid h-100 d-inline-block" style={{ paddingTop: '11.5vh', paddingBottom: '10.2vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%' }}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col col-xl-12" >
              <div role="main" className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>
                <div className="col-md-12" style={{ paddingTop: '1vh', paddingLeft: '1.3vw' }}>
                  <h5 style={{ fontSize: '17pt', fontWeight: '700' }}> Ordem de Serviços </h5>
                </div>
                <div className="row container-fluid" style={{ marginLeft: '0.04vw' }}>
                  <div className="col-md-12" style={{ border: '1px ridge black', borderRadius: '1rem 1rem 0 0' }}>
                    <div className="row" >
                      <div className="col-md-4">
                        <TextField
                          id="ordem"
                          label="Nº da Ordem"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                      <div className="col-md-4">
                        <TextField
                          id="entrada"
                          label="Data Entrada"
                          name="entrada"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                      {/*
                      <div className="col-md-2">
                        <RadioGroup
                          aria-label="gender"
                          defaultValue="umaVia"
                          name="radio-buttons-group">
                          <FormControlLabel value="umaVia" control={<Radio />} label=" 1 Via " />
                        </RadioGroup>
                      </div>
                      
                      <div className="col-md-5">
                        <FormControlLabel control={<Checkbox />} label="Ordem Serviço" />
                        <FormControlLabel control={<Checkbox />} label="Orçamento" />
                      </div>
                      */}
                      <div className="col-md-4">
                        <TextField
                          id="saida"
                          label="Data Saída"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                      {/*
                      <div className="col-md-2">
                        <RadioGroup
                          aria-label="gender"
                          defaultValue="duasVias"
                          name="radio-buttons-group">
                          <FormControlLabel value="duasVias" control={<Radio />} label="2 Vias" />
                        </RadioGroup>
                      </div>
                      */}
                    </div>
                  </div>
                  <div className="col-md-12" style={{ height: '1vh' }} ></div>
                  {/*
                  <div className="col-md-12" style={{ border: '1px ridge black' }}>
                    <div classname="row">
                      <div className="col-md-6">
                        <TextField
                          id="entrada"
                          label="Cliente"
                          name="pesquisaCliente"
                          variant="standard"
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                      <div className="col-md-4" >
                        <div>
                          <button type="button" className="btn btn-dark"> Pesquisar Cliente </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" style={{ height: '1vh' }} ></div>
                    */}
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
                            required
                            InputProps={{style: { fontSize: '17pt' } }}
                            error={error.placa !== ''}
                            helperText={error.placa}
                          />}</InputMask>
                      </div>
                      <div className="col-md-1" >
                        <div >
                          <button type="button" className="btn btn-outline-dark  btn-sm justify-content-center" style={{ border: 'none'}} >
                            <i className="fa fa-pencil"><img src={placa} height="20vh" /></i><span>Pesquisa Placa</span>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-7">
                        {/*<div className="col-md-7">*/}
                        <TextField
                          id="inputMarca"
                          label="Proprietário"
                          name="proprietario"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>

                      <div className="col-md-3">
                        {/*<div className="col-md-7">*/}
                        <TextField
                          id="inputMarca"
                          label="Marca"
                          name="input"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                      <div className="col-md-3">
                        {/*<div className="col-md-7">*/}
                        <TextField
                          id="inputModelo"
                          label="Modelo"
                          name="input"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                      <div className="col-md-3">
                        {/*<div className="col-md-7">*/}
                        <TextField
                          id="inputAno"
                          label="Ano"
                          name="input"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                      <div className="col-md-3">
                        {/*<div className="col-md-7">*/}
                        <TextField
                          id="inputKm"
                          label="KM"
                          name="input"
                          variant="standard"
                          InputProps={{style: { fontSize: '17pt' } }}
                          //value={}
                          //onChange={handleInputChange}
                          fullWidth
                        //required
                        //error={error.nome !== ''}
                        //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" style={{ height: '1vh' }} ></div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <h5 className="h5 text-md-center"> Descrições </h5>
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <h5 className="h5 text-md-center"> Valor Unit.</h5>
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <h5 className=" h5 text-md-center"> Quant. </h5>
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <h5 className="h5 text-md-center"> Valor Total</h5>
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao1"
                      name="descricao1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario1"
                      name="unitario1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade1"
                      name="quantidade1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total1"
                      name="total1"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao2"
                      name="descricao2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario2"
                      name="unitario2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade2"
                      name="quantidade2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total2"
                      name="total2"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao3"
                      name="descricao3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario3"
                      name="unitario3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade3"
                      name="quantidade3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total3"
                      name="total3"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao4"
                      name="descricao4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario4"
                      name="unitario4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade4"
                      name="quantidade4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total4"
                      name="total4"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao5"
                      name="descricao5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    //required
                    //error={error.nome !== ''}
                    //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario5"
                      name="unitario5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    //required
                    //error={error.nome !== ''}
                    //helperText={error.nome} style={{ fontStyle: '20pt' }} 
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade5"
                      name="quantidade5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total5"
                      name="total5"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao6"
                      name="descricao6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario6"
                      name="unitario6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade6"
                      name="quantidade6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total6"
                      name="total6"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao7"
                      name="descricao7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario7"
                      name="unitario7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade7"
                      name="quantidade7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total7"
                      name="total7"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao8"
                      name="descricao8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario8"
                      name="unitario8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade8"
                      name="quantidade8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total8"
                      name="total8"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao9"
                      name="descricao9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario9"
                      name="unitario9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade9"
                      name="quantidade9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total9"
                      name="total9"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="descricao10"
                      name="descricao10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitario10"
                      name="unitario10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidade10"
                      name="quantidade10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="total10"
                      name="total10"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-12">
                  </div>
                  <div className="col-md-9" style={{ border: '1px ridge black' }}>
                    <h3 className="text-end"> Soma </h3>
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="unitarioSoma"
                      name="unitarioSoma"
                      variant="standard"
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="quantidadeSoma"
                      name="quantidadeSoma"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value={}
                      //onChange={handleInputChange}
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1" style={{ border: '1px ridge black' }}>
                    <TextField
                      id="totalSoma"
                      name="totalSoma"
                      variant="standard"
                      InputProps={{ disableUnderline: true, style: { fontSize: '17pt' } }}
                      //value=""
                      //onChange=""
                      fullWidth
                    />
                  </div>
                  <div className="col-md-12" style={{ height: '1vh' }} ></div>
                  <div className="col-md-7" style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh', backgroundColor: 'rgba(0, 0, 0, 0.42)', paddingTop: '3.5vh', borderRadius: '0 0 0 1rem' }}><h1 className="h1 text-center" style={{ fontFamily: 'Permanent Marker' }}> American MuscleCar </h1>
                  </div>
                  <div className="col-md-5" style={{ border: '1px ridge black', paddingTop: '2vh', paddingBotton: '2vh', borderRadius: '0 0 1rem 0' }}>
                    <h4 className="h4 text-center"> Formas de Pagamento </h4>
                    <div className="form-check form-check-inline" style={{ paddingLeft: '4vw' }}>
                      <FormControlLabel labelPlacement="bottom" value="vista" control={<Radio />} label="Dinheiro" />
                      <FormControlLabel labelPlacement="bottom" value="cartao" control={<Radio />} label="Cartão" />
                      <FormControlLabel labelPlacement="bottom" value="boleto" control={<Radio />} label="Boleto" />
                    </div>
                  </div>
                  <div className="col-sm-6" style={{ paddingTop: '10vh', textAlign: 'center' }}>
                    <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonHome" style={{ fontStyle: 'oblique', fontWeight: 'bold' }}><a href="/home" style={{ textDecoration: 'none', color: 'white' }}> Home </a> </button>
                  </div>
                  <div className="col-sm-6 " style={{ paddingTop: '10vh', textAlign: 'center' }}>
                    <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonUsuario" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick=""> Salvar </button>
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