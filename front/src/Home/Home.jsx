import React from "react";


import Header from '../Components/Header/Header';
import Aside from '../Components/Aside/Aside';
import Routes from '../Routes/Routes';
import Footer from '../Components/Footer/Footer';
import './Home.css';


export default function Home() {

  return (
    <div className="home">
      <Header />
      <Aside />
      <Routes />
      <Footer />
    </div>
  )
}