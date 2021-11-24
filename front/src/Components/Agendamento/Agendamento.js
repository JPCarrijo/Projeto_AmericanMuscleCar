import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';


const formatChars = {
  '9': '[0-9]',
}

const cpfMask = '999.999.999-99'
const dataMask = '99/99/9999'
export default function Agendamento() {
  const history = useHistory()

  const [evento, setevento] = useState([])

  const [agenda, setAgenda] = useState({
    id: null,
    data: '',
    nome: '',
    cpf: '',
    email: '',
    marca: '',
    modelo: '',
    ano: (new Date()).getFullYear()
  })

  const [error, setError] = useState({
    data: '',
    nome: '',
    cpf: '',
    email: '',
    marca: '',
    modelo: '',
    ano: ''
  })

  const handleChange = (e, property) => {
    const agendaTemp = { ...agenda }
    if (e.target.id) property = e.target.id

    if ((property === 'data') || (property === 'cpf')) {
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
      data: '',
      nome: '',
      cpf: '',
      email: '',
      marca: '',
      modelo: '',
      ano: ''
    }

    let isValid = true

    if (data.data.trim() === '' || data.data.includes('_')) {
      errorTemp.data = `Insira uma data!`
      isValid = false
    }

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
    //console.log(result);
  }

  const saveAgendamento = async () => {
    await axios.post(`http://localhost:3001/agenda/insert`, {
      data: agenda.data,
      nome: agenda.nome,
      cpf: agenda.cpf,
      email: agenda.email,
      marca: agenda.marca,
      modelo: agenda.modelo,
      ano: agenda.ano
    }).then(() => {
      alert(`Successful!!!`)
    })
  }

  const handleAgenda = () => {
    if (validate(agenda)) {
      saveAgendamento()
      setAgenda({
        data: '',
        nome: '',
        cpf: '',
        email: '',
        marca: '',
        modelo: '',
        ano: ''
      })
    }
  }



  useEffect(() => {
    fetch(`http://localhost:3001/agenda/listar`)
      .then((response) => response.json())
      .then((response) => setevento(response))

  }, [])

  function novoAgend() {
    document.getElementById('nav-home-tab').click()
  }

  console.log(evento)
  return (
    <>
      <section className="container-fluid h-100 d-inline-block" style={{ paddingTop: '11.5vh', paddingBottom: '10.9vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%' }}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col col-xl-12" >
              <div role="main" className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>
                <nav>
                  <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style={{ color: 'black', fontSize: '15pt', fontStyle: 'oblique' }}> Agendamento </a>
                    <a className="nav-item nav-link" id="nav-agenda-tab" data-toggle="tab" href="#nav-agenda" role="tab" aria-controls="nav-agenda" aria-selected="false" style={{ color: 'black', fontSize: '15pt', fontStyle: 'oblique' }}> Agenda do Dia </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent" style={{ marginTop: '4.93vh' }}>
                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
                    <form  >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="col-md-2" >
                            <InputMask
                              formatChars={formatChars}
                              mask={dataMask}
                              id="data"
                              value={agenda.data}
                              onChange={e => handleChange(e, 'data')}>
                              {() => <TextField
                                label="Data"
                                variant="standard"
                                InputProps={{ style: { fontSize: '17pt' } }}
                                fullWidth
                                name="data"
                                required
                                error={error.data !== ''}
                                helperText={error.data}
                              />}
                            </InputMask>
                          </div>
                        </div>
                        <div className="col-md-6" style={{ marginTop: '3vh' }}>
                          <TextField
                            id="nome"
                            label="Nome"
                            name="nome"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            value={agenda.nome}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={error.nome !== ''}
                            helperText={error.nome}
                          />
                        </div>
                        <div className="col-md-6" style={{ marginTop: '3vh' }}>
                          <InputMask
                            formatChars={formatChars}
                            mask={cpfMask}
                            id="rg"
                            value={agenda.cpf}
                            onChange={e => handleChange(e, 'cpf')}>
                            {() => <TextField
                              label="CPF"
                              variant="standard"
                              InputProps={{ style: { fontSize: '17pt' } }}
                              fullWidth
                              name="cpf"
                              required
                              error={error.cpf !== ''}
                              helperText={error.cpf} />}
                          </InputMask>
                        </div>
                        <div className="col-md-6" style={{ marginTop: '3vh' }}>
                          <TextField
                            id="email"
                            label="E-mail"
                            name="email"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            value={agenda.email}
                            onChange={handleChange}
                            //defaultValue="juca@gmail.com.br"
                            fullWidth
                            required
                            error={error.email !== ''}
                            helperText={error.email}
                          />
                        </div>
                        <div className="col-md-6" style={{ marginTop: '3vh' }}>
                          <TextField
                            id="marca"
                            label="Marca Veículo"
                            name="marca"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            value={agenda.marca}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={error.marca !== ''}
                            helperText={error.marca} />
                        </div>
                        <div className="col-md-6" style={{ marginTop: '3vh' }}>
                          <TextField
                            id="modelo"
                            label="Modelo Veículo"
                            name="modelo"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            value={agenda.modelo}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={error.modelo !== ''}
                            helperText={error.modelo} />
                        </div>
                        <div className="col-md-6" style={{ marginTop: '3vh' }} >
                          <TextField
                            id="ano"
                            label="Ano Fabricação"
                            variant="standard"
                            InputProps={{ style: { fontSize: '17pt' } }}
                            name="ano"
                            value={agenda.ano}
                            onChange={e => handleChange(e, 'ano')}
                            select fullWidth
                            error={error.ano !== ''}
                            helperText={error.ano} >
                            {
                              years().map(year =>
                                <MenuItem key={year} value={year}> {year} </MenuItem>
                              )}
                          </TextField>
                        </div>
                        <div className="col-sm-6 " style={{ paddingTop: '7vh', textAlign: 'center' }}>
                          <button type="button" className="btn btn-dark me-md-6 btn-lg" name="buttonVoltar" onClick={() => history.push(`/home`)} style={{ fontStyle: 'oblique', fontWeight: 'bold' }}> Home </button>
                        </div>
                        <div className="col-sm-6 " style={{ paddingTop: '7vh', textAlign: 'center' }} >
                          <button type="button" className="btn btn-dark me-md-6 btn-lg" name="buttonCarro" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick={handleAgenda}> Salvar </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="nav-agenda" role="tabpanel" aria-labelledby="nav-agenda-tab" >
                    <div className="row" style={{ borderBottom: '1px ridge', paddingBottom: '2vh' }}>
                      <div className="col-md-12" style={{ minHeight: '50vh' }}>
                        <div className="row">
                          <div className="col-md-12" style={{ marginBottom: '2vh' }}>
                            <button type="button" className="btn btn-dark btn-lg float-right" name="buttonNewClient" style={{ fontStyle: 'oblique', fontWeight: 'bold' }} onClick={novoAgend}> +Novo Agendamento </button>
                          </div>
                          <div className="col-md-12">
                            <table className="table table-hover" style={{ fontSize: '17pt' }}>
                              <thead className="">
                                <tr style={{ textAlign: 'left' }}>
                                  <th scope="col"> Código </th>
                                  <th scope="col"> Data </th>
                                  <th scope="col"> Nome </th>
                                  <th scope="col"> CPF </th>
                                  <th scope="col"> Marca </th>
                                  <th scope="col"> Modelo </th>
                                  <th scope="col"> Ano </th>
                                  {/*} <th scope="col" style={{}}><a type="button" href="/autores/novo" className="btn btn-secondary btn-lg btn-block" role="button"> Novo Autor </a></th>*/}
                                </tr>
                              </thead>
                              <tbody>
                                {evento.map((evento) =>
                                  <tr style={{ textAlign: 'left' }}>
                                    <th scope="row" key={evento.id} style={{ textAlign: 'center' }}> {evento.agendaId} </th>
                                    <td> {evento.dataAgendamento} </td>
                                    <td> {evento.nome} </td>
                                    <td> {evento.cpf} </td>
                                    <td> {evento.marca} </td>
                                    <td> {evento.modelo} </td>
                                    <td> {evento.ano} </td>
                                    {/*<td ><a href={`/autores/editar/${item.aut_codigo}`} className="btn btn-primary" role="button"> Editar </a></td>
                  <td ><a href={`/autores/ativar${item.aut_codigo}`} className="btn btn-danger btn-block" role="button"> Ativar </a></td>*/}
                                  </tr>
                                )
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
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