import React from 'react';

import Login from '../Components/Login/Login.jsx';
import Home from '../Home/Home.jsx';
import Cliente from '../Components/Cliente/Cliente.jsx';
import Servico from '../Components/Servico/Servico.jsx';
import Agendamento from '../Components/Agendamento/Agendamento.jsx';
import Relatorio from '../Components/Relatório/Relatorio.jsx';
import Sobre from '../Components/Sobre/Sobre.jsx';
import Cadastro from '../Components/Cadastro/Cadastro.jsx';
import Recuperar from '../Components/Recuperar/Recuperar.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Login} >
        <Login />
      </Route>
      <Route exact path="/home" component={Home} >
        <Home />
      </Route>
      <Route exact path="/cliente" component={Cliente} >
        <Home />
      </Route>
      <Route exact path="/servico" component={Servico} >
        <Home />
      </Route>
      <Route exact path="/agendamento" component={Agendamento} >
        <Home />
      </Route>
      <Route exact path="/relatorio" component={Relatorio} >
        <Home />
      </Route>
      <Route exact path="/sobre" component={Sobre} >
        <Home />
      </Route>
      <Route exact path="/cadastro" component={Cadastro} >
        <Cadastro />
      </Route>
      <Route exact path="/recuperar" component={Recuperar} >
        <Recuperar />
      </Route>
    </Switch>
  );
}

export default App;


