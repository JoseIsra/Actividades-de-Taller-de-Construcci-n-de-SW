import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom'
import logoHappy from "../../images/logo-happypet.png";



export const Login = () => {
  return (
    <div className="login__section">

    <Link to="/home">
        <img className="hapyLogo" src={logoHappy} alt="logohappy" />
    </Link>

    <div className="container">
        <div className="loginForm">
            <h2>Iniciar Sesión</h2>
            <div className="loginBox">
                <div className="inputBox w50">
                    <input autoComplete="off" required type="text"
                        name="email"
                    />
                    <span>CORREO</span>
                </div>
                <div className="inputBox w50">
                    <input autoComplete="off" required type="pasword"
                    name="password"
                    />
                    <span>CONTRASEÑA</span>
                </div>
                <div className="links_to_help">
                <Link to="/register" >Sin cuenta? Regístrate ya</Link>
                <Link to="/register">Olvidaste tu contraseña?</Link>
                </div>
                <div className="inputBox w100">
                    <input  type="submit" value="Ingresar" />
                </div>
            </div>
        </div>
    </div>

</div >
  );
}

