import React, { useState } from "react";
import Nav from '../../img/nav.jpg';
//import MascaraInput from './MascaraInput'
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
//import Button from '@material-ui/core/Button';


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
const rgMask = '99.999.999-*'
const celularMask = '(99)#9999-9999'
//const nascMask = '99/99/9999'
const fixoMask = '(99)9999-9999'
const placaMask = 'AAA-0&00'


export default function Cliente() {

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
    rg: '',
    cpf: '',
    fixo: '',
    celular: '',
    civil: '',
  });

  const [carro, setCarro] = useState({
    id: null,
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
    rg: '',
    cpf: '',
    fixo: '',
    celular: '',
    civil: '',
  })

  const [errorCarro, setErrorCarro] = useState({
    marca: '',
    modelo: '',
    cor: '',
    ano: '',
    placa: '',
    km: ''
  })

  //const params = useParams()

  function handleInputChange(event, property) {
    event.preventDefault()
    const usuarioTemp = { ...usuario }
    const carroTemp = { ...carro }

    if (event.target.id) property = event.target.id

    if ((property === 'cpf') || (property === 'rg') || (property === 'fixo') || (property === 'celular') || (property === 'civil')) {
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
    //console.log();

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
      rg: '',
      cpf: '',
      fixo: '',
      celular: '',
      civil: '',
    }

    let isValid = true

    // Validação do campo nome
    if (data.nome.trim() === '') {     // trim(): retira os espaços em branco do início e do final de uma string
      errorUsuarioTemp.nome = 'O nome deve ser preenchido'
      isValid = false
    }

    // Validação do campo logradouro
    if (data.logradouro.trim() === '') {
      errorUsuarioTemp.logradouro = 'O logradouro deve ser preenchido corretamente'
      isValid = false
    }

    // Validação do campo numero
    if (data.numero.trim() === '' || Number(data.numero) <= 0 || isNaN(data.numero)) {
      errorUsuarioTemp.numero = 'Somente números maiores que zero'
      isValid = false
    }

    // Validação do campo bairro
    if (data.bairro.trim() === '') {
      errorUsuarioTemp.bairro = 'O bairro deve ser preenchido corretamente'
      isValid = false
    }
    // Validação do campo cidade
    if (data.cidade.trim() === '') {
      errorUsuarioTemp.cidade = 'A cidade deve ser preenchida corretamente'
      isValid = false
    }

    // Validação do campo estado
    if (data.estado.trim() === '') {
      errorUsuarioTemp.estado = 'Escolha um estado'
      isValid = false
    }

    // Validação do campo cep
    if (data.cep.trim() === '' || Number(data.cep) <= 0 || isNaN(data.cep)) {
      errorUsuarioTemp.cep = 'Somente números maiores  que zero'
      isValid = false
    }

    // Validação do campo rg
    if (data.rg.trim() === '' || data.rg.includes('_')) {
      errorUsuarioTemp.rg = 'Somente números'
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

    // Validação do campo estado civil
    if (data.civil.trim() === '') {
      errorUsuarioTemp.civil = 'Escolha um estado civil'
      isValid = false
    }

    setErrorUsuario(errorUsuarioTemp)
    return isValid
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
    // valor válido não pode ser string vazia e nem conter o caracter _ (sublinhado)
    if (data.placa.trim() === '' || data.placa.includes('_')) {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorCarroTemp.placa = 'A placa deve ser corretamente preenchida'
      isValid = false
    }

    if (data.km.trim() === '' || Number(data.km) <= 0 || isNaN(data.km)) {
      errorCarroTemp.km = 'O km é numérico e maior que zero'
      isValid = false
    }

    setErrorCarro(errorCarroTemp)
    return isValid
  }

  function saveDataUsuario() {

    axios.post("http://localhost:3001/usuario/insert", {
      nome: usuario.nome,
      logradouro: usuario.logradouro,
      numero: usuario.numero,
      bairro: usuario.bairro,
      cidade: usuario.cidade,
      estado: usuario.estado,
      cep: usuario.cep,
      rg: usuario.rg,
      cpf: usuario.cpf,
      fixo: usuario.fixo,
      celular: usuario.celular,
      civil: usuario.civil,
    }).then(() => {
      alert("Successful Insert!")
    })
  }

  function handleUsuario() {
    if (validateUsuario(usuario)) {
      saveDataUsuario()
    }
  }

  /*
     //Botão next na página
     function proximo() {
      //document.getElementById('nav-home-tab').classList.remove("active")
      return document.getElementById('nav-profile-tab').click()
    }
  */

  function saveDataCarro() {
    axios.post("http://localhost:3001/carro/insert", {
      marca: carro.marca,
      modelo: carro.modelo,
      cor: carro.cor,
      ano: carro.ano,
      placa: carro.placa,
      km: carro.km
    }).then(() => {
      alert("Successful Insert!")
    })
  }

  function handleCarro() {
    if (validateCarro(carro)) {
      saveDataCarro()
    }
  }

  function years() {
    let result = []
    for (let i = (new Date()).getFullYear(); i >= 1970; i--) result.push(i)
    return result
  }

  //Botão voltar página cliente 
  function voltar() {
    document.getElementById('nav-home-tab').click()
  }

  return (
    <>
      <section className="container-fluid h-100 d-inline-block" style={{ paddingTop: '11.5vh', paddingBottom: '10.2vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%' }}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col col-xl-12" >
              {/*<div className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>*/}
                {/* Nav */}
                <div role="main" className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style={{ color: 'black', fontSize: '15pt', fontStyle: 'oblique' }}> Cadastro Cliente </a>
                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" style={{ color: 'black', fontSize: '15pt', fontStyle: 'oblique' }}> Cadastro Automóvel </a>
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent" style={{ marginTop: '4.93vh' }}>
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
                      <div className="row" style={{ borderBottom: '1px ridge', paddingBottom: '2vh' }}>
                        <div className="col-md-3">
                          <TextField
                            className=""
                            id="localizar"
                            label="Localizar Cliente"
                            variant="standard"
                            fullWidth />
                        </div>
                      </div>
                      <form style={{ marginTop: '3.5vh' }} >
                        <div className="row">
                          <div className="col-md-12" style={{ marginTop: '3vh' }}>
                            <TextField
                              id="nome"
                              label="Nome"
                              name="nome"
                              variant="standard"
                              value={usuario.nome}
                              onChange={handleInputChange}
                              fullWidth
                              required
                              error={errorUsuario.nome !== ''}
                              helperText={errorUsuario.nome} />
                          </div>
                          <div className="col-md-8" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="logradouro"
                              label="Logradouro"
                              variant="standard"
                              name="logradouro"
                              value={usuario.logradouro}
                              onChange={handleInputChange}
                              fullWidth
                              error={errorUsuario.logradouro !== ''}
                              helperText={errorUsuario.logradouro} />
                          </div>
                          <div className="col-md-4" style={{ marginTop: '4vh' }}>
                            <TextField

                              id="numero"
                              label="Número"
                              variant="standard"
                              name="numero"
                              value={usuario.numero}
                              onChange={handleInputChange}
                              fullWidth
                              error={errorUsuario.numero !== ''}
                              helperText={errorUsuario.numero} />
                          </div>
                          <div className="col-md-3" style={{ marginTop: '4vh' }}>
                            <TextField

                              id="bairro"
                              label="Bairro"
                              variant="standard"
                              name="bairro"
                              value={usuario.bairro}
                              onChange={handleInputChange}
                              fullWidth
                              error={errorUsuario.bairro !== ''}
                              helperText={errorUsuario.bairro} />
                          </div>
                          <div className="col-md-3" style={{ marginTop: '4vh' }}>
                            <TextField

                              id="cidade"
                              label="Cidade"
                              variant="standard"
                              name="cidade"
                              value={usuario.cidade}
                              onChange={handleInputChange}
                              fullWidth
                              error={errorUsuario.cidade !== ''}
                              helperText={errorUsuario.cidade} />
                          </div>
                          <div className="col-md-3" style={{ marginTop: '4vh' }}>
                            <TextField

                              id="estado"
                              label="Estado"
                              variant="standard"
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
                          <div className="col-md-3" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="cep"
                              label="CEP"
                              variant="standard"
                              name="cep"
                              value={usuario.cep}
                              onChange={handleInputChange}
                              fullWidth
                              error={errorUsuario.cep !== ''}
                              helperText={errorUsuario.cep} />
                          </div>
                          <div className="col-md-4" style={{ marginTop: '4vh' }}>
                            <InputMask
                              formatChars={formatChars}
                              mask={rgMask}
                              id="rg"
                              value={usuario.rg}
                              onChange={event => handleInputChange(event, 'rg')}>
                              {() => <TextField

                                label="RG"
                                variant="standard"
                                fullWidth
                                name="rg"
                                required
                                error={errorUsuario.rg !== ''}
                                helperText={errorUsuario.rg} />}
                            </InputMask>
                          </div>
                          <div className="col-md-4" style={{ marginTop: '4vh' }}>
                            <InputMask
                              formatChars={formatChars}
                              mask={cpfMask}
                              id="cpf"
                              value={usuario.cpf}
                              onChange={event => handleInputChange(event, 'cpf')}>
                              {() => <TextField

                                label="CPF"
                                variant="standard"
                                fullWidth
                                name="cpf"
                                required
                                error={errorUsuario.cpf !== ''}
                                helperText={errorUsuario.cpf} />}
                            </InputMask>
                          </div>
                          {/*
                      <div className="col-md-4" style={{ marginTop: '3vh' }}>
                        <InputMask
                          formatChars={formatChars}
                          mask={nascMask}
                          id="nascimento"
                          value= usuario.nascimento}
                          onChange={event => handleInputChange(event, 'nascimento')}>
                          {() => <TextField

                            label="Nascimento"
                            variant="standard"
                            fullWidth
                            name="nascimento"
                            error={error.nascimento !== ''}
                            helperText={error.nascimento} />}
                        </InputMask>
                      </div>
                      */}
                          <div className="col-md-4" style={{ marginTop: '4vh' }}>
                            <InputMask
                              formatChars={formatChars}
                              mask={fixoMask}
                              id="fixo"
                              value={usuario.fixo}
                              onChange={event => handleInputChange(event, 'fixo')}>
                              {() => <TextField

                                label="Telefone Residencial"
                                variant="standard"
                                fullWidth
                                name="fixo"
                                required
                                error={errorUsuario.fixo !== ''}
                                helperText={errorUsuario.fixo} />}
                            </InputMask>
                          </div>
                          <div className="col-md-4" style={{ marginTop: '4vh' }}>
                            <InputMask
                              formatChars={formatChars}
                              mask={celularMask}
                              id="celular"
                              value={usuario.celular}
                              onChange={event => handleInputChange(event, 'celular')}>
                              {() => <TextField
                                label="Celular"
                                variant="standard"
                                fullWidth
                                name="celular"
                                required
                                error={errorUsuario.celular !== ''}
                                helperText={errorUsuario.celular} />}
                            </InputMask>
                          </div>
                          <div className="col-md-4" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="civil"
                              label="Estado Civil"
                              name="civil"
                              value={usuario.civil}
                              onChange={event => handleInputChange(event, 'civil')}
                              select fullWidth
                              variant="standard"
                              error={errorUsuario.civil !== ''}
                              helperText={errorUsuario.civil} >
                              <MenuItem value="Casado"> Casado </MenuItem>
                              <MenuItem value="Solteiro"> Solteiro </MenuItem>
                              <MenuItem value="Divorciado"> Divorciado </MenuItem>
                              <MenuItem value="Amasiado"> Amasiado </MenuItem>
                            </TextField >
                          </div>
                         
                            <div className="col-sm-6" style={{paddingTop: '10vh', textAlign: 'center'}}>
                              <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonHome" style={{ fontStyle: 'oblique', fontWeight: 'bold' }}><a href="/home" style={{ textDecoration: 'none', color: 'white' }}> Home </a> </button>
                            </div>
                            <div className="col-sm-6 " style={{paddingTop: '10vh', textAlign: 'center'}}>
                              <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonUsuario" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick={handleUsuario}> Salvar </button>
                            </div>
                         
                        </div>
                      </form>
                    </div >
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="row" style={{ borderBottom: '1px ridge', paddingBottom: '2vh' }}>
                        <div className="col-md-3">
                          <TextField
                            className=""
                            id="localizar"
                            label="Localizar Carro"
                            variant="standard"
                            fullWidth />
                        </div>
                      </div>
                      <form style={{ marginTop: '3.5vh' }}>
                        <div className="row ">
                          <div className="col-md-6" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="marca"
                              label="Marca"
                              name="marca"
                              variant="standard"
                              value={carro.marca}
                              onChange={handleInputChange}
                              fullWidth
                              required
                              error={errorCarro.marca !== ''}
                              helperText={errorCarro.marca} />
                          </div>
                          <div className="col-md-6" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="modelo"
                              label="Modelo"
                              name="modelo"
                              variant="standard"
                              value={carro.modelo}
                              onChange={handleInputChange}
                              fullWidth
                              required
                              error={errorCarro.modelo !== ''}
                              helperText={errorCarro.modelo} />
                          </div>
                          <div className="col-md-6" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="cor"
                              label="Cor"
                              variant="standard"
                              name="cor"
                              value={carro.cor}
                              onChange={event => handleInputChange(event, 'cor')}
                              select fullWidth
                              error={errorCarro.cor !== ''}
                              helperText={errorCarro.cor} >
                              <MenuItem value="Amarelo">Amarelo</MenuItem>
                              <MenuItem value="Azul">Azul</MenuItem>
                              <MenuItem value="Bege">Bege</MenuItem>
                              <MenuItem value="Branco">Branco</MenuItem>
                              <MenuItem value="Cinza">Cinza</MenuItem>
                              <MenuItem value="Dourado">Dourado</MenuItem>
                              <MenuItem value="Laranja">Laranja</MenuItem>
                              <MenuItem value="Marrom">Marrom</MenuItem>
                              <MenuItem value="Prata">Prata</MenuItem>
                              <MenuItem value="Preto">Preto</MenuItem>
                              <MenuItem value="Roxo">Roxo</MenuItem>
                              <MenuItem value="Verde">Verde</MenuItem>
                              <MenuItem value="Vermelho">Vermelho</MenuItem>
                            </TextField>
                          </div>
                          <div className="col-md-6" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="ano"
                              label="Ano Fabricação"
                              name="ano"
                              variant="standard"
                              value={carro.ano}
                              onChange={event => handleInputChange(event, 'ano')}
                              select fullWidth >
                              {years().map(year => <MenuItem value={year} key={year}>{year}</MenuItem>)}
                            </TextField>
                          </div>
                          <div className="col-md-6" style={{ marginTop: '4vh' }}>
                            <InputMask
                              formatChars={formatChars}
                              mask={placaMask}
                              id="placa"
                              value={carro.placa}
                              onChange={event => handleInputChange(event, 'placa')}>
                              {() => <TextField
                                label="Placa"
                                variant="standard"
                                fullWidth
                                name="placa"
                                required
                                error={errorCarro.placa !== ''}
                                helperText={errorCarro.placa} />}
                            </InputMask>
                          </div>
                          <div className="col-md-6" style={{ marginTop: '4vh' }}>
                            <TextField
                              id="km"
                              label="KM"
                              name="km"
                              variant="standard"
                              value={carro.km}
                              onChange={handleInputChange}
                              fullWidth
                              required
                              error={errorCarro.km !== ''}
                              helperText={errorCarro.km} />
                          </div>
                         
                            <div className="col-sm-6 " style={{paddingTop: '10vh', textAlign: 'center'}}>
                              <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonVoltar" onClick={voltar} style={{ fontStyle: 'oblique', fontWeight: 'bold' }}> Voltar </button>
                            </div>
                            <div className="col-sm-6 " style={{paddingTop: '10vh', textAlign: 'center'}} >
                              <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonCarro" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick={handleCarro}> Salvar </button>
                            </div>
                         
                        </div>
                      </form >
                    </div >
                  </div >
                </div >
              {/*</div>*/}
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