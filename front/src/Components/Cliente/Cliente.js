import React, { useState } from "react";
import Nav from '../../img/nav.jpg';
//import MascaraInput from './MascaraInput'
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import Button from '@material-ui/core/Button';


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
const nascMask = '99/99/9999'
const fixoMask = '(99)9999-9999'
const placaMask = 'AAA-0&00'
export default function Cliente() {

  // Recebendo os dados
  const [cadastro, setCadastro] = useState({
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
    nascimento: '',
    fixo: '',
    celular: '',
    civil: '',
    marca: '',
    modelo: '',
    cor: '',
    ano: (new Date()).getFullYear(),  // Ano corrente
    placa: '',
    km: ''
  })

  // Constantes de erro
  const [error, setError] = useState({
    nome: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
    rg: '',
    cpf: '',
    nascimento: '',
    fixo: '',
    celular: '',
    civil: '',
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
    const cadastroTemp = { ...cadastro }

    if (event.target.id) property = event.target.id

    if ((property === 'cpf') || (property === 'rg') || (property === 'estado') || (property === 'nascimento') || (property === 'fixo') || (property === 'celular') || (property === 'cor') || (property === 'km') || (property === 'civil')) {

      cadastroTemp[property] = event.target.value
    }
    else if (property === 'placa') {
      //setKarango({ ...karango, [property]: event.target.value.toUpperCase() })
      cadastroTemp[property] = event.target.value.toUpperCase()
    }
    else cadastroTemp[property] = event.target.value

    setCadastro(cadastroTemp)
    //setIsModified(true)
    validate(cadastroTemp)
    //console.log();
  }

  // Validação dos inputs
  function validate(data) {

    const errorTemp = {
      nome: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      rg: '',
      cpf: '',
      nascimento: '',
      fixo: '',
      celular: '',
      civil: '',
      marca: '',
      modelo: '',
      cor: '',
      placa: '',
      km: ''
    }
    let isValid = true

    // Validação do campo nome
    if (data.nome.trim() === '') {     // trim(): retira os espaços em branco do início e do final de uma string
      errorTemp.nome = 'O nome deve ser preenchido'
      isValid = false
    }

    // Validação do campo logradouro
    if (data.logradouro.trim() === '') {
      errorTemp.logradouro = 'O logradouro deve ser preenchido corretamente'
      isValid = false
    }

    // Validação do campo numero
    if (data.numero.trim() === '' || Number(data.numero) <= 0 || isNaN(data.numero)) {
      errorTemp.numero = 'Somente números maiores que zero'
      isValid = false
    }

    // Validação do campo bairro
    if (data.bairro.trim() === '') {
      errorTemp.bairro = 'O bairro deve ser preenchido corretamente'
      isValid = false
    }
    // Validação do campo cidade
    if (data.cidade.trim() === '') {
      errorTemp.cidade = 'A cidade deve ser preenchida corretamente'
      isValid = false
    }

    // Validação do campo estado
    if (data.estado.trim() === '') {
      errorTemp.estado = 'Escolha um estado'
      isValid = false
    }

    // Validação do campo cep
    if (data.cep.trim() === '' || Number(data.cep) <= 0 || isNaN(data.cep)) {
      errorTemp.cep = 'Somente números maiores  que zero'
      isValid = false
    }

    // Validação do campo rg
    if (data.rg.trim() === '' || data.rg.includes('_')) {
      errorTemp.rg = 'Somente números'
      isValid = false
    }

    // Validação do campo cpf
    if (data.cpf.trim() === '' || data.cpf.includes('_')) {
      errorTemp.cpf = 'Somente números'
      isValid = false
    }

    // Validação do campo nascimento
    if (data.nascimento.trim() === '' || data.nascimento.includes('_')) {
      errorTemp.nascimento = 'Somente números'
      isValid = false
    }

    // Validação do campo fone fixo
    if (data.fixo.trim() === '' || data.fixo.includes('_')) {
      errorTemp.fixo = 'O telefone fixo deve ser preenchido'
      isValid = false
    }

    // Validação do campo celular
    if (data.celular.trim() === '' || data.celular.includes('_')) {
      errorTemp.celular = 'O celular deve ser preenchido'
      isValid = false
    }

    // Validação do campo estado civil
    if (data.civil.trim() === '') {
      errorTemp.civil = 'Escolha um estado civil'
      isValid = false
    }

    // Validação do campo marca
    if (data.marca.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorTemp.marca = 'A marca deve ser preenchida'
      isValid = false
    }

    // Validação do campo modelo
    if (data.modelo.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorTemp.modelo = 'A modelo deve ser preenchido'
      isValid = false
    }

    // Validação do campo cor
    if (data.cor.trim() === '') {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorTemp.cor = 'Escolha uma cor'
      isValid = false
    }

    // Validação do campo placa
    // valor válido não pode ser string vazia e nem conter o caracter _ (sublinhado)
    if (data.placa.trim() === '' || data.placa.includes('_')) {     // trim(): retira os espaços em branco do nício e do final de uma string
      errorTemp.placa = 'A placa deve ser corretamente preenchida'
      isValid = false
    }

    if (data.km.trim() === '' || Number(data.km) <= 0 || isNaN(data.km)) {
      errorTemp.km = 'O km é numérico e maior que zero'
      isValid = false
    }

    setError(errorTemp)
    return isValid
  }

  async function saveData() {
    try {
      await axios.post(`https://localhost:3001/cadastro`, cadastro)
      .then((response) => {
        console.log(response);
      })
    }
    catch (error) {
      alert('ERRO: ' + error.message)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validate(cadastro)) saveData()
  }
  //console.log(handleSubmit);


  function years() {
    let result = []
    for (let i = (new Date()).getFullYear(); i >= 1970; i--) result.push(i)
    return result
  }

  //Botão next na página
  function proximo() {
    //document.getElementById('nav-home-tab').classList.remove("active")
    document.getElementById('nav-profile-tab').click()
  }

  //Botão voltar página cliente 
  function voltar() {
    document.getElementById('nav-home-tab').click()
  }
  /*
    async function getData(id) {
      try {
        let response = await axios.get(`https://localhost:3001/cadastro/listar/${id}`)
        setCadastro(response.data)
      }
      catch (error) {
        alert('Não foi possível carregar os dados para edição.')
      }
    }
  */


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ background: 'linear-gradient(96deg, rgba(126,128,108,0.9948354341736695) 12%, rgba(98,98,69,1) 50%, rgba(33,33,30,1) 93%)' }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="...">
          <span class="navbar-toggler-icon" style={{ border: '1px solid' }}></span>
        </button>
        <a class="navbar-brand" href="#" > <img src={Nav} alt="" width="170" height="80" className="d-inline-block align-text-end " style={{ marginRight: '1vw' }} /> </a>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01" style={{ color: ' rgba(212, 255, 244, 0.58)', fontFamily: 'Permanent Marker', fontSize: '35pt' }}>  American Musclecar
        </div>
      </nav>
      <section className="container-fluid" >
        <div className="container-{breakpoint}">
          <div className="row ">
            <div role="complementary" className="col-md-1 bg-secondary" style={{
              background: 'linear-gradient(0deg, rgba(33,33,30,1) 0%, rgba(126,128,108,0.9948354341736695) 70%)'
            }}>

            </div>
            <div role="main" className="col-md-10" style={{ backgroundColor: 'rgba(207, 206, 206, 0.93)', height: '100%' }}>
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style={{ color: 'black', fontSize: '15pt', fontStyle: 'oblique' }}> Cadastro Cliente </a>
                  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" style={{ color: 'black', fontSize: '15pt', fontStyle: 'oblique' }}> Cadastro Automóvel </a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent" style={{ marginTop: '4.93vh' }}>
                <div className="row" style={{ borderBottom: '1px ridge', paddingBottom: '2vh' }}>
                  <div className="col-md-3">
                    <TextField
                      className=""
                      id="localizar"
                      label="Localizar"
                      variant="standard"
                      fullWidth />
                  </div>
                  <div className="col-md-2">
                    <TextField
                      className=""
                      id="selectPor"
                      label="Por:"
                      variant="standard"
                      select fullWidth>
                      <MenuItem value="selectNome"> Nome </MenuItem>
                      <MenuItem value="selectCpf"> CPF </MenuItem>
                    </TextField>
                  </div>
                </div>
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <form onSubmit={handleSubmit} id="form1" style={{ marginTop: '5vh' }} >
                    <div className="form-group">
                      <div className="row g-4">
                        <div className="col-md-12" style={{ marginTop: '3vh' }}>
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
                            helperText={error.nome} />
                        </div>
                        <div className="col-md-8" style={{ marginTop: '3vh' }}>
                          <TextField
                            id="logradouro"
                            label="Logradouro"
                            variant="standard"
                            name="logradouro"
                            value={cadastro.logradouro}
                            onChange={handleInputChange}
                            fullWidth
                            error={error.logradouro !== ''}
                            helperText={error.logradouro} />
                        </div>
                        <div className="col-md-4" style={{ marginTop: '3vh' }}>
                          <TextField

                            id="numero"
                            label="Número"
                            variant="standard"
                            name="input"
                            value={cadastro.numero}
                            onChange={handleInputChange}
                            fullWidth
                            error={error.numero !== ''}
                            helperText={error.numero} />
                        </div>
                        <div className="col-md-3" style={{ marginTop: '3vh' }}>
                          <TextField

                            id="bairro"
                            label="Bairro"
                            variant="standard"
                            name="input"
                            value={cadastro.bairro}
                            onChange={handleInputChange}
                            fullWidth
                            error={error.bairro !== ''}
                            helperText={error.bairro} />
                        </div>
                        <div className="col-md-3" style={{ marginTop: '3vh' }}>
                          <TextField

                            id="cidade"
                            label="Cidade"
                            variant="standard"
                            name="input"
                            value={cadastro.cidade}
                            onChange={handleInputChange}
                            fullWidth
                            error={error.cidade !== ''}
                            helperText={error.cidade} />
                        </div>
                        <div className="col-md-3" style={{ marginTop: '3vh' }}>
                          <TextField

                            id="estado"
                            label="Estado"
                            variant="standard"
                            name="input"
                            value={cadastro.estado}
                            onChange={event => handleInputChange(event, 'estado')}
                            select
                            fullWidth
                            error={error.estado !== ''}
                            helperText={error.estado} >
                            <MenuItem value="ac"> AC </MenuItem>
                            <MenuItem value="al"> AL </MenuItem>
                            <MenuItem value="ap"> AP </MenuItem>
                            <MenuItem value="am"> AM </MenuItem>
                            <MenuItem value="ba"> BA </MenuItem>
                            <MenuItem value="ce"> CE </MenuItem>
                            <MenuItem value="es"> ES </MenuItem>
                            <MenuItem value="go"> GO </MenuItem>
                            <MenuItem value="ma"> MA </MenuItem>
                            <MenuItem value="mt"> MT </MenuItem>
                            <MenuItem value="ms"> MS </MenuItem>
                            <MenuItem value="mg"> MG </MenuItem>
                            <MenuItem value="pa"> PA </MenuItem>
                            <MenuItem value="pb"> PB </MenuItem>
                            <MenuItem value="pr"> PR </MenuItem>
                            <MenuItem value="pe"> PE </MenuItem>
                            <MenuItem value="pi"> PI </MenuItem>
                            <MenuItem value="rj"> RJ </MenuItem>
                            <MenuItem value="rn"> RN </MenuItem>
                            <MenuItem value="rs"> RS </MenuItem>
                            <MenuItem value="ro"> RO </MenuItem>
                            <MenuItem value="rr"> RR </MenuItem>
                            <MenuItem value="sc"> SC </MenuItem>
                            <MenuItem value="sp"> SP </MenuItem>
                            <MenuItem value="se"> SE </MenuItem>
                            <MenuItem value="to"> TO </MenuItem>
                            <MenuItem value="df"> DF </MenuItem>
                          </TextField>
                        </div>
                        <div className="col-md-3" style={{ marginTop: '3vh' }}>
                          <TextField

                            id="cep"
                            label="CEP"
                            variant="standard"
                            name="input"
                            value={cadastro.cep}
                            onChange={handleInputChange}
                            fullWidth
                            error={error.cep !== ''}
                            helperText={error.cep} />
                        </div>
                        <div className="col-md-4" style={{ marginTop: '3vh' }}>
                          <InputMask
                            formatChars={formatChars}
                            mask={rgMask}
                            id="rg"
                            value={cadastro.rg}
                            onChange={event => handleInputChange(event, 'rg')}>
                            {() => <TextField

                              label="RG"
                              variant="standard"
                              fullWidth
                              name="input"
                              required
                              error={error.rg !== ''}
                              helperText={error.rg} />}
                          </InputMask>
                        </div>
                        <div className="col-md-4" style={{ marginTop: '3vh' }}>
                          <InputMask
                            formatChars={formatChars}
                            mask={cpfMask}
                            id="cpf"
                            value={cadastro.cpf}
                            onChange={event => handleInputChange(event, 'cpf')}>
                            {() => <TextField

                              label="CPF"
                              variant="standard"
                              fullWidth
                              name="input"
                              required
                              error={error.cpf !== ''}
                              helperText={error.cpf} />}
                          </InputMask>
                        </div>
                        <div className="col-md-4" style={{ marginTop: '3vh' }}>
                          <InputMask
                            formatChars={formatChars}
                            mask={nascMask}
                            id="nascimento"
                            value={cadastro.nascimento}
                            onChange={event => handleInputChange(event, 'nascimento')}>
                            {() => <TextField

                              label="Nascimento"
                              variant="standard"
                              fullWidth
                              name="input"
                              error={error.nascimento !== ''}
                              helperText={error.nascimento} />}
                          </InputMask>
                        </div>
                        <div className="col-md-4" style={{ marginTop: '3vh' }}>
                          <InputMask
                            formatChars={formatChars}
                            mask={fixoMask}
                            id="fixo"
                            value={cadastro.fixo}
                            onChange={event => handleInputChange(event, 'fixo')}>
                            {() => <TextField

                              label="Telefone Residencial"
                              variant="standard"
                              fullWidth
                              name="input"
                              required
                              error={error.fixo !== ''}
                              helperText={error.fixo} />}
                          </InputMask>
                        </div>
                        <div className="col-md-4" style={{ marginTop: '3vh' }}>
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
                              name="input"
                              required
                              error={error.celular !== ''}
                              helperText={error.celular} />}
                          </InputMask>
                        </div>
                        <div className="col-md-4" style={{ marginTop: '3vh' }}>
                          <TextField
                            id="civil"
                            label="Estado Civil"
                            name="input"
                            value={cadastro.civil}
                            onChange={event => handleInputChange(event, 'civil')}
                            select fullWidth
                            variant="standard"
                            error={error.civil !== ''}
                            helperText={error.civil} >
                            <MenuItem value="selectCasado"> Casado </MenuItem>
                            <MenuItem value="selectSolteiro"> Solteiro </MenuItem>
                            <MenuItem value="selectDivorciado"> Divorciado </MenuItem>
                            <MenuItem value="selectAmasiado"> Amasiado </MenuItem>
                          </TextField >
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row row-cols-2">
                    <div className="col-md-6 d-grid gap-2 d-md-flex justify-content-start" style={{ marginTop: '15.4vh' }}>
                      <button type="button" class="btn btn-secondary me-md-6 btn-lg" name="button1" style={{ fontStyle: 'oblique', fontWeight: 'bold' }}><a href="/home" style={{ textDecoration: 'none', color: 'white' }}> Home </a> </button>
                    </div>
                    <div className="col-md-6 d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginTop: '15.4vh' }}>
                      <button type="button" class="btn btn-secondary me-md-6 btn-lg" name="next" id="buttonNext" onClick={proximo} style={{ fontStyle: 'oblique', fontWeight: 'bold', marginLeft: '2vw' }} > Próximo </button>
                    </div>
                  </div>
                  <footer className="footer navbar-fixed-bottom text-center">
                    <p style={{ textAlign: 'center', marginTop: '4vh', color: 'black' }}>&copy; 2021 American MuscleCar.com</p>
                  </footer>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <form class="row g-3" style={{ marginTop: '3vh' }}>
                    <div className="form-group">
                      <div className="row g-4">
                        <div className="col-md-6" style={{ marginTop: '5vh' }}>
                          <TextField
                            id="marca"
                            label="Marca"
                            name="input"
                            variant="standard"
                            value={cadastro.marca}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            error={error.marca !== ''}
                            helperText={error.marca} />
                        </div>
                        <div className="col-md-6" style={{ marginTop: '5vh' }}>
                          <TextField
                            id="modelo"
                            label="Modelo"
                            name="input"
                            variant="standard"
                            value={cadastro.modelo}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            error={error.modelo !== ''}
                            helperText={error.modelo} />
                        </div>
                        <div className="col-md-6" style={{ marginTop: '5vh' }}>
                          <TextField
                            id="cor"
                            label="Cor"
                            variant="standard"
                            value={cadastro.cor}
                            onChange={event => handleInputChange(event, 'cor')}
                            select fullWidth
                            error={error.cor !== ''}
                            helperText={error.cor} >
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
                        <div className="col-md-6" style={{ marginTop: '5vh' }}>
                          <TextField
                            id="ano"
                            label="Ano Fabricação"
                            name="input"
                            variant="standard"
                            value={cadastro.ano}
                            onChange={event => handleInputChange(event, 'ano')}
                            select fullWidth >
                            {years().map(year => <MenuItem value={year} key={year}>{year}</MenuItem>)}
                          </TextField>
                        </div>
                        <div className="col-md-6" style={{ marginTop: '5vh' }}>
                          <InputMask
                            formatChars={formatChars}
                            mask={placaMask}
                            id="placa"
                            value={cadastro.placa}
                            onChange={event => handleInputChange(event, 'placa')}>
                            {() => <TextField
                              label="Placa"
                              variant="standard"
                              fullWidth
                              name="input"
                              required
                              error={error.placa !== ''}
                              helperText={error.placa} />}
                          </InputMask>
                        </div>
                        <div className="col-md-6" style={{ marginTop: '5vh' }}>
                          <TextField
                            id="km"
                            label="KM"
                            name="input"
                            variant="standard"
                            value={cadastro.km}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            error={error.km !== ''}
                            helperText={error.km} />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row" style={{ marginTop: '21.7vh' }}>
                    <div className="col-md-6 d-grid gap-2 d-md-flex justify-content-start" >
                      <button type="button" class="btn btn-secondary me-md-6 btn-lg" name="button1" onClick={voltar} style={{ fontStyle: 'oblique', fontWeight: 'bold' }}> Voltar </button>
                    </div>
                    <div className="col-md-6 d-grid gap-2 d-md-flex justify-content-end" >
                      <button id="salvar" type="submit" class="btn btn-secondary me-md-6 btn-lg" name="button2" style={{ fontStyle: 'oblique', fontWeight: 'bold' }}> Salvar </button>
                    </div>
                  </div>
                  <footer className="footer navbar-fixed-bottom text-center">
                    <p style={{ textAlign: 'center', marginTop: '7.9vh', color: 'black' }}>&copy; 2021 American MuscleCar.com</p>
                  </footer>
                </div>
              </div>
            </div>
            <div role="complementary" className="col-md-1 bg-secondary" style={{
              background: 'linear-gradient(0deg, rgba(116,128,108,0.998354341736695) 0%, rgba(33,33,30,1) 90% )'
            }}>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
