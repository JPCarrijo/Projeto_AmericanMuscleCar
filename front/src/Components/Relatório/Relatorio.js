import React, { useRef } from "react";
import ComponentToPrint from './ComponenToPrint';
import { useReactToPrint } from 'react-to-print';
import { useHistory } from "react-router"


export default function Relatorio() {

  const componentRef = useRef('h1');
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const history = useHistory()

  return (
    <>
      <section
        className="container-fluid h-100 d-inline-block"
        style={{ paddingTop: '11.5vh', paddingBottom: '16.5vh', backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '100%' }}>
        <div
          className="container py-5 h-100" >
          <div
            className="row d-flex justify-content-center align-items-center h-100" >
            <div
              className="col col-xl-12" >
              <div
                role="main"
                className="card"
                style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)', backgroundColor: '  rgba(350, 240, 190, 0.75)', padding: '5vw' }}>
                <div>
                  <h2 className="h2"
                    style={{ marginLeft: '1vw', fontFamily: 'Kanit' }}> Insira o nº da Ordem: </h2>
                </div>
                <div
                  className="col-md-12 "
                >
                  <ComponentToPrint
                    ref={componentRef} />
                </div>
                <div
                  className="row">
                  <div
                    className="col-md-6 text-center" >
                    <button
                      type="button"
                      className="btn btn-dark me-md-6 btn-lg" name="buttonHome"
                      onClick={() => history.push(`/home`)}
                      style={{ fontStyle: 'oblique', fontWeight: 'bold' }}>
                      Home
                    </button>
                  </div>
                  <div
                    className="col-md-6 text-center">
                    <button
                      type="button"
                      className="btn btn-dark me-md-6 btn-lg me-auto"
                      name="buttonImprimir"
                      style={{ fontStyle: 'oblique', fontWeight: 'bold' }}
                      onClick={handlePrint}>
                      Imprimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="footer navbar-fixed-bottom text-center">
        <p
          style={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(6, 36, 21, 0.78)' }}>&copy; 2021 American MuscleCar.com</p>
      </footer>
    </>
  )
}
