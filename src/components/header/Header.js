import React from "react";
import "./Header.css";
export const Header=()=>{
    return(
        <header className="header">
<h1>Happy Pet</h1>
<nav className="menu">
    <a href="#inicio">Inicio</a>
<a href="#aboutUs">Acerca de nosotros</a>
<a href="#contactUs">Contactanos</a>
</nav>
<nav className="button">
    <button type="button" class="btn btn-dark">Iniciar sesión</button>
<button type="button" class="btn btn-outline-dark">Registrarse</button>
</nav>

        </header>
    )
}