import React, { useState } from 'react'
import './Register.css';
    import logoHappy from "../../images/logo-happypet.png";
import { Link } from 'react-router-dom';
import { registerSchema } from '../../Validations/RegisterValidation';

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

    const checkThing= async()=>{
        try{
            const isValid = await registerSchema.isValid(user);
            console.log(isValid);
            }catch(err){
            console.log(err.name);
            console.log(err.errors[0]);
        }
    }
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
                            <input autoComplete="off" required type="password"
                            onChange={handleChange}
                            name="password"
                            />
                            <span>CONTRASEÑA</span>
                        </div>
                        <div className="inputBox w100">
                            <input onClick={checkThing} type="submit" value="Guardar" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
