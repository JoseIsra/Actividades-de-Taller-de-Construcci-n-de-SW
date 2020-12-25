import React from "react";
import "./Login.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextError } from '../TextError/TextError';
import { api } from '../../httprequestconfig/methods';
import { Link } from 'react-router-dom'
import logoHappy from "../../images/logo-happypet.png";
import * as yup from 'yup';



const validationSchema = yup.object({
    cli_email: yup.string().email('no es un correo').required('No completado'),
    cli_password: yup.string().min(6, 'de 6 a más caracteres por favor').required('No completado'),
});
const onSubmit = async (values, onSubmitProps) => {
    try {
        await api.createClient(values)
        onSubmitProps.resetForm();
    } catch (err) {
        console.log(err);
    }
}

export const Login = () => {
    return (
        <Formik
        initialValues={{ cli_email: '', cli_password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        >
    {formik => {
            return (
                <div className="login__section">

                    <Link to="/home">
                        <img className="hapyLogo" src={logoHappy} alt="logohappy" />
                    </Link>

                    <div className="container">
                        <div className="loginForm">
                            <h2>Iniciar Sesión</h2>
                            <div className="loginBox">
                                <Form>
                                <div className="inputBox w50">
                                <Field 
                                        autoComplete="off"
                                        required name="cli_email" type="email" />
                                        <span>Correo</span>
                                        <ErrorMessage name="cli_email" component={TextError} />
                                </div>
                                <div className="inputBox w50">
                                <Field 
                                        required name="cli_password" type="password" />
                                        <span>Contraseña</span>
                                        <ErrorMessage name="cli_password" component={TextError} />
                                </div>
                                <div className="links_to_help">
                                    <Link to="/register" >Sin cuenta? Regístrate ya</Link>
                                    <Link to="/register">Olvidaste tu contraseña?</Link>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" value="Ingresar" />
                                </div>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div >
            )
        }}
        </Formik>
    ) 
}

