import React from "react";
import imagen3 from "../../images/logo-happypet.png";
import "./Header.css";

export const Header=()=>{
    return(
        <header className="header">
<span className="logo">
    <img className="imagenLogo" src={imagen3} alt="logo"/>
</span>
<nav className="menu">
    <a href="#inicio">Inicio</a>
<a href="#aboutUs">Acerca de nosotros</a>
<a href="#productos">Nuestros productos</a>
<a href="#servicios">Nuestros servicios</a>
</nav>
<nav className="button">
    <button type="button" className="btn btn-dark">Iniciar sesión</button>
<button type="button" className="btn btn-outline-dark">Registrarse</button>
</nav>

        </header>
    )
}