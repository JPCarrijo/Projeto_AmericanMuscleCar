import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    if (data.cep.trim() === '' || data.celular.includes('_')) {
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

    axios.post("http://localhost:3001/cadastro/insert", {
      nome: cadastro.nome,
      email: cadastro.email,
      senha: cadastro.senha,
      cidade: cadastro.cidade,
      estado: cadastro.estado,
      cep: cadastro.cep,
      celular: cadastro.celular,
    }).then(() => {
      alert("Successful Insert!")
    })
  }

  function handleChange() {
    if (validate(cadastro)) {
      saveData()
    }
  }

  return (
    <>
      <section className="container-fluid h-100 d-inline-block" style={{ paddingTop: '11.5vh', paddingBottom: '10.2vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%' }}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col col-xl-12" >
              <div className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>
                {/* Nav */}
                <h1 className="col-md-12 text-center h1" style={{ fontFamily: 'Permanent Marker', fontSize: '40pt', textAlign: 'center', marginTop: '-25px' }}> American MuscleCar
                </h1>
                <form >
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-12" style={{ marginTop: '5vh' }} >
                        <TextField
                          id="nome"
                          label="Nome"
                          name="nome"
                          variant="standard"
                          value={cadastro.nome}
                          onChange={handleInputChange}
                          fullWidth
                          required
                          error={error.nome !== ''}
                          helperText={error.nome}
                        />
                        {/*
                        <label for="inputAddress2" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}> Nome </label>
                        <input type="text" className="form-control" id="inputAddress2" name="nome" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }} />*/}
                      </div>
                      <div className="col-md-8" style={{ marginTop: '5vh' }}>
                        <TextField
                          id="email"
                          label="E-mail"
                          name="email"
                          variant="standard"
                          value={cadastro.email}
                          onChange={event => handleInputChange(event, 'email')}
                          fullWidth
                          required
                          error={error.email !== ''}
                          helperText={error.email}
                        />
                        {/*
                        <label for="inputEmail4" style={{ fontWeight: 'bolder', fontStyle: 'oblique' }}> Email </label>
                        <input type="email" className="form-control" id="inputEmail4" name="email" placeholder="admi@americanmusclecar.com" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }} />*/}
                      </div>
                      <div className="col-md-4" style={{ marginTop: '5vh' }}>
                        <TextField
                          id="senha"
                          label="Senha"
                          name="senha"
                          variant="standard"
                          value={cadastro.senha}
                          onChange={handleInputChange}
                          fullWidth
                          required
                          error={error.senha !== ''}
                          helperText={error.senha}
                        />
                        {/*
                        <label for="inputPassword4" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Senha</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Mínimo 1 letra + números" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }} />*/}
                      </div>
                      <div className="col-md-3" style={{ marginTop: '5vh' }}>
                        <TextField
                          id="cidade"
                          label="Cidade"
                          name="cidade"
                          variant="standard"
                          value={cadastro.cidade}
                          onChange={handleInputChange}
                          fullWidth
                          required
                          error={error.cidade !== ''}
                          helperText={error.cidade}
                        />
                        {/*
                        <label for="inputCity" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Cidade</label>
                        <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }} />*/}
                      </div>
                      <div className="col-md-3" style={{ marginTop: '5vh' }}>
                        <TextField
                          id="estado"
                          label="Estado"
                          variant="standard"
                          name="estado"
                          value={cadastro.estado}
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
                        {/*}
                        <label for="inputEstado" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}> Estado </label>
                        <select id="inputEstado" className="form-control" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}>
                          <option selected>Escolher...</option>
                          <option> São Paulo </option>
                      </select>*/}
                      </div>
                      <div className="col-md-3" style={{ marginTop: '5vh' }}>
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
                            required
                            error={error.cep !== ''}
                            helperText={error.cep} />}
                        </InputMask>
                        {/*
                        <label for="inputCEP" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}> CEP </label>
                        <input type="text" className="form-control" id="inputCEP" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }} />*/}
                      </div>
                      <div className="col-md-3" style={{ marginTop: '5vh' }}>
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
                            required
                            error={error.celular !== ''}
                            helperText={error.celular} />}
                        </InputMask>
                        {/*
                        <label for="inputCity" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}> Telefone Celular </label>
                        <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }} />*/}
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: '5vh' }}>
                      <div className="col-md-6 d-grid gap-3 d-md-flex justify-content-start" >
                      <Link to="/"><button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonVoltar" style={{ fontStyle: 'oblique', fontWeight: 'bold' }}> Voltar </button></Link>
                      </div>
                      <div className="col-md-6 d-grid gap-3 d-md-flex justify-content-end" >
                        <button type="button" class="btn btn-dark me-md-6 btn-lg" name="buttonCarro" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick={handleChange}> Salvar </button>
                      </div>
                    </div>
                  </div>
                </form>
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