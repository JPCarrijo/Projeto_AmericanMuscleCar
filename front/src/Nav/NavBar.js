//import { Link } from 'react-router-dom';
import React from 'react'
import logo from '../img/carro.png'


export default function Navbar() {
    return (
        <>
            <div className="img-fluid" style={{ backgroundColor: 'rgba(6, 36, 21, 0.78)', height: '15vh' }}>              
                    <img src={logo} style={{height: '14vh', width: '15vw', paddingLeft: '3vw', paddingTop: '2vh'}} />
            </div>
        </>
            )
}