import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/carro.png';

export default function Cadastro() {
    return (
        <>
            <section className="container-fluid h-100 d-inline-block" style={{ paddingTop: '6vh', paddingBottom: '10vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', }}>
                <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col col-xl-12" >
                            <div className="card" style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.4)', padding: '5vw' }}>
                                <form class="row g-3">
                                    <div style={{ fontFamily: 'Permanent Marker', fontSize: '20pt', textAlign: 'center', marginTop: '-25px' }}> American MuscleCar </div>
                                    <div className="form-group" >
                                        <label for="inputAddress2" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Nome</label>
                                        <input type="text" className="form-control" id="inputAddress2" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4" style={{ fontWeight: 'bolder', fontStyle: 'oblique' }}>Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="admi@americanmusclecar.com" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Senha</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Mínimo 1 letra + números" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputCity" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Cidade</label>
                                            <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputEstado" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Estado</label>
                                            <select id="inputEstado" className="form-control" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}>
                                                <option selected>Escolher...</option>
                                                <option> São Paulo </option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label for="inputCEP" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>CEP</label>
                                            <input type="text" className="form-control" id="inputCEP" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputCity" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Telefone Residencial</label>
                                            <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="inputCity" style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>Telefone Celular</label>
                                            <input type="text" className="form-control" id="inputCity" style={{ boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}></input>
                                        </div>
                                        <div>
                                            <img className="card-img" src={logo} style={{ height: '15vh', width: '16vw', paddingLeft: '5vw', paddingTop: '4vh' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <Link><button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(0, 0, 0, 0.74)' }} > Salvar </button></Link>
                                        <Link to="/">
                                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(0, 0, 0, 0.74)', marginLeft: '4.5vw' }} > Voltar </button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer navbar-fixed-bottom text-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}> &copy; 2021 American MuscleCar.com
            </footer>
        </>
    )
}