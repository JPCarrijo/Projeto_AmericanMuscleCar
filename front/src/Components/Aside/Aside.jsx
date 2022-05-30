import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



export default function Aside() {

  const history = useHistory();

  const [logoff, setLogoff] = useState(false);

  const logout = (e) => {
    setLogoff(true);
    setTimeout((e) => history.push('/'), 1700)
  };

  return (
    <aside className="aside">
      <a href="/home">
        <i class="fa fa-home" aria-hidden="true"></i>
        Home
      </a>
      <a href="/cliente">
        <i class="fa fa-group" aria-hidden="true"></i>
        Cliente
      </a>
      <a href="/servico">
        <i class="fa fa-gears" aria-hidden="true"></i>
        Serviços
      </a>
      <a href="/agendamento">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        Agendamento
      </a>
      <a href="/home">
        <i class="fa fa-archive" aria-hidden="true"></i>
        Notas
      </a>
      <a href="/relatorio">
        <i class="fa fa-book" aria-hidden="true"></i>
        Relatórios
      </a>
      <a href="/sobre">
        <i class="fa fa-area-chart" aria-hidden="true"></i>
        Sobre
      </a>
      <a href="/"
        onClick={logout}>
        {logoff ? <Stack sx={{ color: 'grey.800' }} spacing={2} direction="row">
          <CircularProgress color="error" />
        </Stack> : <i class="fa fa-sign-out" aria-hidden="true"></i>}
        Logout
      </a>
    </aside>
  )
}