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
            <header className="register__header">
                <Link to= "/home">
                <img src={logoHappy} alt="logohappy" />
                </Link>
            </header>
            <div className="register__card">
                
            <h2>Regístrate</h2>
            <div className="register__content">
                <form autoComplete="off">
                    <input autoFocus="on"
                    type="text"
                        name="name"
                        value={user.name}
                        placeholder="Nombre..."
                        onChange={handleChange}
                    />
                    <input type="text"
                        name="lastname"
                        placeholder="Apellido..."
                        value={user.lastname}
                        onChange={handleChange}
                    />
                    <input type="text"
                        name="email"
                        placeholder="Correo..."
                        value={user.email}
                        onChange={handleChange}
                    />
                    <input type="password"
                        value={user.password}
                        name="password"
                        placeholder="Contraseña..."
                        onChange={handleChange}
                    />

                    <button type="submit" 
                    className="btn-register">Guardar datos    
                    </button>
                </form>
            </div>
        </div>

        </div >
    )
}
