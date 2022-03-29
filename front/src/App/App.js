import React from 'react';
import Login from '../Components/Login/Login.jsx';
import { Route, Switch } from 'react-router-dom';
import Cadastro from '../Components/Cadastro/Cadastro.jsx';
import Recuperar from '../Components/Recuperar/Recuperar.jsx';
import Home from '../Components/Home/Home.jsx';
import Cliente from '../Components/Cliente/Cliente.jsx';
import Servico from '../Components/Servico/Servico.jsx';
import ListaCarros  from '../Components/ListaCarros/ListaCarros.jsx';
import Relatorio from '../Components/Relatório/Relatorio.jsx';
import Agendamento from '../Components/Agendamento/Agendamento.jsx';
import Sobre from '../Components/Sobre/Sobre.jsx';


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
          <Route exact path="/cliente">
            <Cliente />
          </Route>
          <Route exact path="/servico">
            <Servico />
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


