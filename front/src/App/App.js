import React from 'react';
import Login from '../Components/Login/Login.js';
import { Route, Switch } from 'react-router-dom';
import Cadastro from '../Components/Cadastro/Cadastro.js';
import Recuperar from '../Components/Recuperar/Recuperar.js';
import Home from '../Components/Home/Home.js';
import Cliente2 from '../Components/Cliente/Cliente2';
import Servico2 from '../Components/Servico/Servico2';
import ListaCarros  from '../Components/ListaCarros/ListaCarros.js';
import Relatorio from '../Components/Relatório/Relatorio.js';
import Agendamento from '../Components/Agendamento/Agendamento.js';
import Sobre from '../Components/Sobre/Sobre.js';


function App() {

  return (
    <>
      <main>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/recuperar">
            <Recuperar />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/cliente2">
            <Cliente2 />
          </Route>
          <Route exact path="/servico2">
            <Servico2 />
          </Route>
          <Route exact path="/listacarros">
            <ListaCarros />
          </Route>
          <Route exact path="/relatorio">
            <Relatorio />
          </Route>
          <Route exact path="/agendamento">
            <Agendamento />
          </Route>
          <Route exact path="/sobre">
            <Sobre />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;


