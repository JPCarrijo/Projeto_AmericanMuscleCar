import React from 'react';
import { Link } from 'react-router-dom';
import Servico from '../../img/gerencia.png';
import Relatorio from '../../img/relatorio.png';
import Agenda from '../../img/agenda.png';
import Cadastro from '../../img/cadastro.png';
import Nota from '../../img/notaFiscal.png';
import Sobre from '../../img/musclecarsSobre2.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <section
    className="sectionHome">
    <div
      className="container-fluid">
      <div className="row">
        <div
          className="grid col-lg-4  pt-5">
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
            }} to="/cliente">
            <div
              className="bloco card"
              style={{
                border: 'none',
                borderRadius: '30px'
              }}>
              <img
                src={Cadastro}
                className="card-img-top" alt="..."
                style={{
                  borderRadius: '30px'
                }} />
              <div
                className="card-body" >
                <h2
                  className=" h2 card-title text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}>
                  Cadastro
                </h2>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="grid col-lg-4 pt-5">
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
            to="/servico">
            <div
              className="bloco card"
              style={{
                border: 'none',
                borderRadius: '30px'
              }}>
              <img
                src={Servico}
                className="card-img-top"
                alt="..."
                style={{
                  borderRadius: '30px'
                }} />
              <div
                className="card-body">
                <h2
                  className="h2 card-title text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}>
                  Serviço
                </h2>
              </div>
            </div></Link>
        </div>
        <div
          className="grid col-lg-4 pt-5">
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
            to="/agendamento">
            <div
              className="bloco card"
              style={{
                border: 'none',
                borderRadius: '30px'
              }}>
              <img
                src={Agenda}
                className="card-img-top"
                alt="..."
                style={{
                  borderRadius: '30px'
                }} />
              <div
                className="card-body">
                <h2
                  className=" h2 card-title text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}>
                  Agendamento
                </h2>
              </div>
            </div></Link>
        </div>
        <div
          className="grid col-lg-4 pt-5">
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }} >
            <div
              className="bloco card"
              style={{
                border: 'none',
                borderRadius: '30px'
              }} >
              <img
                src={Nota}
                className=" h2 card-img-top"
                alt="..."
                style={{
                  borderRadius: '30px'
                }} />
              <div
                className="card-body">
                <h2
                  className="h2 card-title text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}>
                  Nota Fiscal
                </h2>
              </div>
            </div></Link>
        </div>
        <div
          className="grid col-lg-4 pt-5">
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
            to="/relatorio">
            <div
              className="bloco card"
              style={{
                border: 'none',
                borderRadius: '30px'
              }}>
              <img
                src={Relatorio}
                className="card-img-top"
                alt="..."
                style={{
                  borderRadius: '30px'
                }} />
              <div
                className="card-body">
                <h2
                  className="h2 card-title text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}>
                  Relatório
                </h2>
              </div>
            </div></Link>
        </div>
        <div
          className="grid col-lg-4 pt-5">
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
            to="/sobre">
            <div
              className="bloco card"
              style={{
                border: 'none',
                borderRadius: '30px'
              }}>
              <img
                src={Sobre}
                className="card-img-top"
                alt="..."
                style={{
                  borderRadius: '30px'
                }} />
              <div
                className="card-body">
                <h2
                  className=" h2 card-title text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}>
                  Quem Somos
                </h2>
              </div>
            </div></Link>
        </div>
      </div>
    </div>
  </section>