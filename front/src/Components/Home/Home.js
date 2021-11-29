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
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação">
          <span
            className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse "
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
        className="container-fluid"
        style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)', minHeight: '97.5vh', height: '100%' }}>
        <div
          className="row"
          style={{ marginLeft: '10vw', paddingTop: '4vh' }}>
          <div
            className="col-md-4 my-5" >
            <Link
              style={{ textDecoration: 'none', color: 'black' }} to="/cliente2"><div
                className="card"
                style={{ border: 'none', borderRadius: '30px', minWidth: '15vw', width: '22vw' }}>
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
            className="col-md-4 my-5">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/servico2"><div
                className="card"
                style={{ border: 'none', borderRadius: '30px', width: '22vw' }}>
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
            className="col-md-4 my-5" >
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/agendamento"><div
                className="card"
                style={{ border: 'none', borderRadius: '30px', width: '22vw' }}>
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
            className="col-md-4 my-5">
            <Link
              style={{ textDecoration: 'none', color: 'black' }} ><div
                className="card"
                style={{ border: 'none', borderRadius: '30px', width: '22vw' }} >
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
            className="col-md-4 my-5">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/relatorio"><div
                className="card"
                style={{ border: 'none', borderRadius: '30px', width: '22vw' }}>
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
            className="col-md-4 my-5">
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to="/sobre"><div
                className="card"
                style={{ border: 'none', borderRadius: '30px', width: '22vw' }}>
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
      </section>
      <footer
        className="footer navbar-fixed-bottom text-center">
        <p
          style={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>&copy; 2021 Auto Tech.com</p>
      </footer>
    </>
  )
}