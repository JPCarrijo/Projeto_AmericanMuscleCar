import React from 'react';
import logo from '../../img/logo_quem_somos.png';


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <nav
    className="navbar navbar-expand-lg">
    <button
      className="navbar-toggler "
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Alterna navegação">
      <span
        className="navbar-toggler-icon">
      </span>
    </button>
    <aside className="logo">
      <a href="/home">
        <img src={logo} alt="logo" />
      </a>
    </aside>
  </nav>