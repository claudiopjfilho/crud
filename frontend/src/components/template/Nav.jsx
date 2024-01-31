import "./Nav.css";
import React from "react";

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <a href="#/">
        <i className={`fa fa-${props.icon}`}>Inicio</i>
      </a>

      <a href="#/users">
        <i className={`fa fa-${props.users}`}>{props.usuarios}</i>
      </a>
    </nav>
  </aside>
);
