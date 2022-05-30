import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../Components/Login/Login';
import Section from '../Components/Section/Section';
import Cliente from '../Components/Cliente/Cliente';
import Servico from '../Components/Servico/Servico';
import Agendamento from '../Components/Agendamento/Agendamento';
import Relatorio from '../Components/Relatório/Relatorio';
import Sobre from '../Components/Sobre/Sobre';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/home' component={Section} />
    <Route path='/servico' component={Servico} />
    <Route path='/cliente' component={Cliente} />
    <Route path='/relatorio' component={Relatorio} />
    <Route path='/agendamento' component={Agendamento} />
    <Route path='/sobre' component={Sobre} />
  </Switch>