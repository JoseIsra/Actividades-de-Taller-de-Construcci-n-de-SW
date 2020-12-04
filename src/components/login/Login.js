import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom'
import logoHappy from "../../images/logo-happypet.png";



export const Login = () => {
  return (
    <div className="_login">
      <header className="register__header">
        <Link to="/home">
          <img src={logoHappy} alt="logohappy" />
        </Link>
      </header>
      <div className="Login">

        <h2>Iniciar sesión</h2>
        <div className="login__content">
          <form autoComplete="off">
            <input 
            autoFocus="on"
            type="text" placeholder="Correo..." />
            <input type="password" placeholder="Contraseña..." />
            
            
              <Link className ="links_to_help" to="/register">no tienes cuenta? Crea una ya!</Link>
              <Link className="links_to_help" >Olvidaste tu contraseña?</Link>
            
            <button type="submit" className="btn-enviar">
              Ingresar
          </button>

          </form>

        </div>
      </div>
    </div>
  );
}

