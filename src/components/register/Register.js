import React, { useState } from 'react'
import './Register.css';

import logoHappy from "../../images/logo-happypet.png";
import { Link } from 'react-router-dom';
export const Register = () => {
    // const [user, setUser] = useState({
    //     name: '',
    //     lastname: '',
    //     email: '',
    //     password: ''
    // })

    // const handleChange = (e) => {
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     });
    // };


    return (
        <div className="register">
            
                <Link to= "/home">
                <img className="hapyLogo" src={logoHappy} alt="logohappy" />
                </Link>
            
            <div className="container">
            <div className="registerForm">
            <h2>Regístrate</h2>
            <div className="registerBox">
                <div className="inputBox w50">
                    <input required type="text" />
                    <span>NOMBRES</span>
                </div>
                <div className="inputBox w50">
                    <input required type="text" />
                    <span>APELLIDOS</span>
                </div>
                <div className="inputBox w50">
                    <input required type="text" />
                    <span>CORREO</span>
                </div>
                <div className="inputBox w50">
                    <input required type="text" />
                    <span>CONTRASEÑA</span>
                </div>
                <div className="inputBox w100">
                    <input required type="submit" value="Guardar"/>
                </div>
            </div>
            </div>
        </div>

        </div >
    )
}
