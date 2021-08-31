/* eslint-disable jsx-a11y/alt-text */
//import NavBar from '../Nav/NavBar';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Nav/carro.png'

export default function Cadastro() {
    return (
        <>
            <section style={{ paddingLeft: '7.3vw', paddingRight: '7.3vw', marginBottom: '-25px', marginTop: '-6px', backgroundColor: 'rgba(6, 36, 21, 0.78)', color: 'white' }}>
                <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col col-xl-10" >
                            <div className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.4)', padding: '5vw' }}>
                                <form>
                                    <div style={{ fontFamily: 'Permanent Marker', fontSize: '20pt', textAlign: 'center', marginTop: '-25px'}}> American MuscleCar </div>
                                    <div className="form-group" >
                                        <label for="inputAddress2" style={{fontWeight: 'bold'}}>Nome</label>
                                        <input type="text" className="form-control" id="inputAddress2" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4" style={{fontWeight: 'bolder'}}>Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="admi@americanmusclecar.com" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4" style={{fontWeight: 'bold'}}>Senha</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Mínimo 1 letra + números" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputCity" style={{fontWeight: 'bold'}}>Cidade</label>
                                            <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputEstado" style={{fontWeight: 'bold'}}>Estado</label>
                                            <select id="inputEstado" className="form-control" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}>
                                                <option selected>Escolher...</option>
                                                <option> São Paulo </option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label for="inputCEP" style={{fontWeight: 'bold'}}>CEP</label>
                                            <input type="text" className="form-control" id="inputCEP" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputCity" style={{fontWeight: 'bold'}}>Telefone Residencial</label>
                                            <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputCity"style={{fontWeight: 'bold'}}>Telefone Celular</label>
                                            <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div>
                                            <img src={logo} style={{ height: '15vh', width: '16vw', paddingLeft: '5vw', paddingTop: '4vh' }} />
                                        </div>
                                    </div>
                                    {/*<div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                            <label className="form-check-label" for="gridCheck"> Clique em mim </label>
                        </div>
                    </div>*/}
                                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(0, 0, 0, 0.74)' }} > Salvar </button>
                                    <Link to="/"><button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(0, 0, 0, 0.74)', marginLeft: '2.5vw' }} > Voltar </button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <p style={{ textAlign: 'center' }}>&copy; 2021 American MuscleCar.com</p>
                </footer>
            </section>

        </>
    )
}