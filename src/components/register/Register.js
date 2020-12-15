import React, { useState } from 'react'
import './Register.css';

import logoHappy from "../../images/logo-happypet.png";
import { Link } from 'react-router-dom';
export const Register = () => {
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div className="register">

            <Link to="/home">
                <img className="hapyLogo" src={logoHappy} alt="logohappy" />
            </Link>

            <div className="container">
                <div className="registerForm">
                    <h2>Regístrate</h2>
                    <div className="registerBox">
                        <div className="inputBox w50">
                            <input autoComplete="off" required type="text"
                                name="name"
                                onChange={handleChange}
                            />
                            <span>NOMBRES</span>
                        </div>
                        <div className="inputBox w50">
                            <input autoComplete="off" required type="text"
                                name="lastname"
                                onChange={handleChange}
                            />
                            <span>APELLIDOS</span>
                        </div>
                        <div className="inputBox w50">
                            <input autoComplete="off" required type="text"
                                onChange={handleChange}
                                name="email"
                            />
                            <span>CORREO</span>
                        </div>
                        <div className="inputBox w50">
                            <input autoComplete="off" required type="pasword"
                            onChange={handleChange}
                            name="password"
                            />
                            <span>CONTRASEÑA</span>
                        </div>
                        <div className="inputBox w100">
                            <input  type="submit" value="Guardar" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
