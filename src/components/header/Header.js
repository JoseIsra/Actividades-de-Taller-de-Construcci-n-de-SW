
import React from "react";
import { Link } from "react-router-dom";
import imagen3 from "../../images/logo-happypet.png";
import "./Header.css";

export const Header=()=>{


    return(
        <header className="header">

    <img className="imagenLogo" src={imagen3} alt="logo"/>
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

        </header>
    )
}