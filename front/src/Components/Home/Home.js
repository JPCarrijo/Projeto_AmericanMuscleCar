import React from "react";
import { Link } from 'react-router-dom';
import Servico from '../../img/gerencia.png';
import Relatorio from '../../img/relatorio.png';
import Agenda from '../../img/agenda.png';
import Cadastro from '../../img/cadastro.png';
import Nota from '../../img/notaFiscal.png';
import Nav from '../../img/nav.jpg';
import Sobre from '../../img/musclecarsSobre.png';
//import Oficina from '../../img/OficinaHomePage.jpg'
import '../../index.css';

export default function Home() {
  return (
    <>  
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="...">
          <span class="navbar-toggler-icon" style={{ border: '1px solid' }}></span>
        </button>
        <a class="navbar-brand" href="#" > <img src={Nav} alt="" width="170" height="80" className="d-inline-block align-text-end " style={{ marginRight: '1vw' }} /> </a>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01" style={{ color: ' rgba(212, 255, 244, 0.58)', fontFamily: 'Permanent Marker', fontSize: '35pt', paddingLeft: '2vw' }}>  American Musclecar
        </div>
      </nav>
      <section className="container" style={{ marginTop: '3vh' }}>
        <div className="row">
          <div className="col-md-4 my-5" >
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/cliente"><div className="card" style={{ border: 'none', borderRadius: '30px' }}>
              <img src={Cadastro} className="card-img-top" alt="..." style={{ borderRadius: '30px' }} />
              <div className="card-body" >
                <h2 className="card-title text-center" > Cadastro </h2>
                {/*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>*/}
              </div>
            </div></Link>
          </div>
          <div className="col-md-4 my-5">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/servico"><div className="card" style={{ border: 'none', borderRadius: '30px' }}>
              <img src={Servico} className="card-img-top" alt="..." style={{ borderRadius: '30px' }} />
              <div className="card-body">
                <h2 className="card-title text-center"> Serviços </h2>
                {/*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>*/}
              </div>
            </div></Link>
          </div>
          <div className="col-md-4 my-5">
            <Link style={{ textDecoration: 'none', color: 'black' }}><div className="card" style={{ border: 'none', borderRadius: '30px' }}>
              <img src={Agenda} className="card-img-top" alt="..." style={{ borderRadius: '30px' }} />
              <div className="card-body">
                <h2 className="card-title text-center"> Agendamentos </h2>
                {/*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>*/}
              </div>
            </div></Link>
          </div>
          <div className="col-md-4 my-5">
            <Link style={{ textDecoration: 'none', color: 'black' }}><div className="card" style={{ border: 'none', borderRadius: '30px' }}>
              <img src={Nota} className="card-img-top" alt="..." style={{ borderRadius: '30px' }} />
              <div className="card-body">
                <h2 className="card-title text-center"> Notas Fiscais </h2>
                {/*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>*/}
              </div>
            </div></Link>
          </div>
          <div className="col-md-4 my-5">
            <Link style={{ textDecoration: 'none', color: 'black' }}><div className="card" style={{ border: 'none', borderRadius: '30px' }}>
              <img src={Relatorio} className="card-img-top" alt="..." style={{ borderRadius: '30px' }} />
              <div className="card-body">
                <h2 className="card-title text-center"> Relatórios </h2>
                {/*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>*/}
              </div>
            </div></Link>
          </div>
          <div className="col-md-4 my-5">
            <Link style={{ textDecoration: 'none', color: 'black' }}><div className="card" style={{ border: 'none', borderRadius: '30px' }}>
              <img src={Sobre} className="card-img-top" alt="..." style={{ borderRadius: '30px' }} />
              <div className="card-body">
                <h2 className="card-title text-center"> Sobre Nós </h2>
                {/*<p className="card-text"></p>*/}
              </div>
            </div></Link>
          </div>
        </div>
      </section>
      <footer className="footer navbar-fixed-bottom text-center">
        <p style={{ textAlign: 'center', marginTop: '4.7vh', color: 'white' }}>&copy; 2021 American MuscleCar.com</p>
      </footer>
    </>
  )
}