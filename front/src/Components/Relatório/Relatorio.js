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
        className="container-fluid h-100"
        style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)'}}
        >
        <div
          className="container py-5">
          <div
            className="row d-flex justify-content-center align-items-center h-100" >
            <div
              className="col col-xl-12" >
              <div
                role="main"
                className="card my-5 py-5"
                style={{
                  borderRadius: '1rem',
                  boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)',
                  backgroundColor: '  rgba(350, 240, 190, 0.75)',
                  padding: '2vw'
                }}>
                <div>
                  <h4
                    className="h4 mx-1"
                    style={{
                      fontFamily: 'Kanit'
                    }}> Insira o nº da Ordem:
                  </h4>
                </div>
                <div
                  className="col-md-12"style={{height: '100%'}} >
                  <ComponentToPrint
                    ref={componentRef} />
                </div>
                <div
                  className="row my-2">
                  <div
                    className="col-md-6 d-sm-flex justify-content-end" >
                    <button
                      type="button"
                      className="btn btn-dark btn-xl my-2" name="buttonHome"
                      onClick={() => history.push(`/home`)}
                      style={{
                        fontStyle: 'oblique',
                        fontWeight: 'bold'
                      }}>
                      Home
                    </button>
                  </div>
                  <div
                    className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-dark btn-xl my-2"
                      name="buttonImprimir"
                      style={{
                        fontStyle: 'oblique',
                        fontWeight: 'bold'
                      }}
                      onClick={handlePrint}>
                      Imprimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <footer
            className="footer navbar-fixed-bottom text-center">
            <p
              style={{
                textAlign: 'center',
                color: 'white',
              }}>&copy; 2022 autotech.com.br</p>
          </footer>
      </section>
    </>
  )
}
