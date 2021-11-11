import React from 'react';
import Login from '../Components/Login/Login.js';
import { Route, Switch } from 'react-router-dom';
import Cadastro from '../Components/Cadastro/Cadastro.js';
import Recuperar from '../Components/Recuperar/Recuperar.js';
import Home from '../Components/Home/Home.js';
import Cliente2 from '../Components/Cliente/Cliente2';
import Servico2 from '../Components/Servico/Servico2';


function App() {

  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Login />}></Route>
          <Route exact path="/cadastro" render={(props) => <Cadastro />}></Route>
          <Route exact path="/recuperar" render={(props) => <Recuperar />}></Route>
          <Route exact path="/home" render={(props) => <Home />}></Route>
          <Route exact path="/cliente2" render={(props) => <Cliente2 />}></Route>
          <Route exact path="/servico2" render={(props) => <Servico2 />}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;


