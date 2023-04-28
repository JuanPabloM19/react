import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../Utils/img/logo.png";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink>
          <img className="imgLogo" src={logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/category/auriculares"}
                className="nav-link"
                activeClassName="active"
              >
                Auriculares
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/category/monitores"}
                className="nav-link"
                activeClassName="active"
              >
                Monitores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/category/pcArmadas"}
                className="nav-link"
                activeClassName="active"
              >
                Pc Armadas
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
              >
                Acerca de Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
              >
                Contacto
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};


