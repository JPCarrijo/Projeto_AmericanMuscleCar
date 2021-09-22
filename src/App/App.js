import React from 'react';
import Login from '../Login/Login.js';
import { Route, Switch } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro.js';
import Recuperar from '../Recuperar/Recuperar.js';

function App() {

  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Login />}></Route>
          <Route exact path="/cadastro" render={(props) => <Cadastro />}></Route>
          <Route exact path="/recuperar" render={(props) => <Recuperar />}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

