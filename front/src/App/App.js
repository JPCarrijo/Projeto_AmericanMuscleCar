import React from 'react';
import Login from '../Components/Login/Login.js';
import { Route, Switch } from 'react-router-dom';
import Cadastro from '../Components/Cadastro/Cadastro.js';
import Recuperar from '../Components/Recuperar/Recuperar.js';
import Home from '../Components/Home/Home.js';
import Cliente from '../Components/Cliente/Cliente';
import Servico from '../Components/Servico/Servico';


function App() {

  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Login />}></Route>
          <Route exact path="/cadastro" render={(props) => <Cadastro />}></Route>
          <Route exact path="/recuperar" render={(props) => <Recuperar />}></Route>
          <Route exact path="/home" render={(props) => <Home />}></Route>
          <Route exact path="/cliente" render={(props) => <Cliente />}></Route>
          <Route exact path="/servico" render={(props) => <Servico />}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;


