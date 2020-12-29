import React from "react";
import { Link } from "react-router-dom";
import imagen3 from "../../images/logo-happypet.png";
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";

const hamburgerClick = () => {
    const d = document;
    d.querySelector(".panel-btn").classList.toggle("is-active");
}

export const Header = () => {


    return (
        <header className="header">
<span className="logo">
    <img className="imagenLogo" src={imagen3} alt="logo"/>
</span>
<div className="navResponsive">
    <div className="search">
<Link className="searchIcon">
<SearchIcon/>
</Link>
<input className="home-search form-control mr-sm-2" type="search" placeholder="¿En qué podemos ayudarte?"/>
    </div>
    
<button className="panel-btn hamburger hamburger--vortex" onClick={hamburgerClick} type="button">
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>
</div>

<nav className="menu">
    <a href="#inicio">Inicio</a>
<a href="#aboutUs">Acerca de nosotros</a>
<a href="#productos">Nuestros productos</a>
<a href="#servicios">Nuestros servicios</a>
</nav>
<nav className="botones">
    <Link className="login" to="/login">Iniciar Sesión</Link>
    <Link className="login" to="/register">Registrarse</Link>


</nav>

        </header >
    )
}