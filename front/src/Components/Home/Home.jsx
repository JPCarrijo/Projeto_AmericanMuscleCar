import React from "react";
import { Link } from 'react-router-dom';
import Servico from '../../img/gerencia.png';
import Relatorio from '../../img/relatorio.png';
import Agenda from '../../img/agenda.png';
import Cadastro from '../../img/cadastro.png';
import Nota from '../../img/notaFiscal.png';
import Sobre from '../../img/musclecarsSobre2.png';
import ExitToApp from '@material-ui/icons/ExitToApp';
import '../../index.css';

export default function Home() {

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação">
          <span
            className="navbar-toggler-icon" style={{ border: '2px solid', borderRadius: '10px', backgroundColor: 'rgb(6, 65, 21)' }}></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav">
          <ul
            className="navbar-nav ml-auto">
            <li
              className="nav-item active">
              <Link
                to="/"
                className="nav-link"
                style={{ color: 'white' }}>
                <ExitToApp />
                Sair </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section
        className="v-100"
        style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%', minHeight: '100vh' }}>
        <div
          className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="col-lg-5 my-3" >
              <Link
                style={{ textDecoration: 'none', color: 'black' }} to="/cliente"><div
                  className="card"
                  style={{ border: 'none', borderRadius: '30px' }}>
                  <img
                    src={Cadastro}
                    className="card-img-top" alt="..."
                    style={{ borderRadius: '30px' }} />
                  <div
                    className="card-body" >
                    <h1
                      className=" h1 card-title text-center"
                      style={{ fontFamily: 'Permanent Marker' }}> Cadastro </h1>
                  </div>
                </div></Link>
            </div>
            <div
              className="col-lg-5 my-3">
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/servico"><div
                  className="card"
                  style={{ border: 'none', borderRadius: '30px' }}>
                  <img
                    src={Servico}
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: '30px' }} />
                  <div
                    className="card-body">
                    <h1
                      className="h1 card-title text-center"
                      style={{ fontFamily: 'Permanent Marker' }}>
                      Serviço </h1>
                  </div>
                </div></Link>
            </div>
            <div
              className="col-lg-5 my-3" >
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/agendamento"><div
                  className="card"
                  style={{ border: 'none', borderRadius: '30px' }}>
                  <img
                    src={Agenda}
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: '30px' }} />
                  <div
                    className="card-body">
                    <h1
                      className=" h1 card-title text-center"
                      style={{ fontFamily: 'Permanent Marker' }}> Agendamento </h1>
                  </div>
                </div></Link>
            </div>
            <div
              className="col-lg-5 my-3">
              <Link
                style={{ textDecoration: 'none', color: 'black' }} ><div
                  className="card"
                  style={{ border: 'none', borderRadius: '30px' }} >
                  <img
                    src={Nota}
                    className=" h2 card-img-top"
                    alt="..."
                    style={{ borderRadius: '30px' }} />
                  <div
                    className="card-body">
                    <h1
                      className="h1 card-title text-center"
                      style={{ fontFamily: 'Permanent Marker' }}> Nota Fiscal </h1>
                  </div>
                </div></Link>
            </div>
            <div
              className="col-lg-5 my-3">
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/relatorio"><div
                  className="card"
                  style={{ border: 'none', borderRadius: '30px' }}>
                  <img
                    src={Relatorio}
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: '30px' }} />
                  <div
                    className="card-body">
                    <h1
                      className="h1 card-title text-center"
                      style={{ fontFamily: 'Permanent Marker' }}> Relatório </h1>
                  </div>
                </div></Link>
            </div>
            <div
              className="col-lg-5 my-3">
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/sobre"><div
                  className="card"
                  style={{ border: 'none', borderRadius: '30px' }}>
                  <img
                    src={Sobre}
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: '30px' }} />
                  <div
                    className="card-body">
                    <h1
                      className=" h1 card-title text-center"
                      style={{ fontFamily: 'Permanent Marker' }}>
                      Quem Somos </h1>
                  </div>
                </div></Link>
            </div>
          </div>
          <footer
            className="footer navbar-fixed-bottom text-center">
            <p
              style={{ 
                textAlign: 'center',
                color: 'white',
                }}>&copy; 2022 autotech.com.br
                </p>
          </footer>
        </div>
      </section>

    </>
  )
}