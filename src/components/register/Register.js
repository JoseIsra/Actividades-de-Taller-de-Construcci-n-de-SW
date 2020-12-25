import React, {useState,useEffect} from 'react'
import './Register.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextError } from '../TextError/TextError';
import { api } from '../../httprequestconfig/methods';
import logoHappy from "../../images/logo-happypet.png";
import { Link,useHistory } from 'react-router-dom';
import * as yup from 'yup';


const validationSchema = yup.object({
    cli_name: yup.string().required('No completado'),
    cli_lastname: yup.string().required('No completado'),
    cli_email: yup.string().email('no es un correo').required('No completado'),
    cli_password: yup.string().min(6, 'de 6 a más caracteres por favor').required('No completado'),
});

export const Register = () => {
    const [message , setMessage] = useState(null);
    const history = useHistory();

    const onSubmit =  async(values, onSubmitProps) => {
    const response = await api.createClient(values);

    if(response.data === ''){
        onSubmitProps.resetForm();
        history.push('/login');
        }else{
            setTimeout(()=>{
                setMessage(response.data);
            },2000);
        }
        
        
        
    }
    


    return (
        <>
    <Formik
        initialValues={{ cli_name: '', cli_lastname: '', cli_email: '', cli_password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
    >
        {formik => {
            return (
                <div className="register">
                    <Link to="/home">
                        <img className="hapyLogo" src={logoHappy} alt="logohappy" />
                    </Link>
                    <div className="container">
                        <div className="registerForm">
                    {message && <p className="emergencia">{message}</p> }
                            <h2>Regístrate</h2>
                            <div className="registerBox">
                            <Form>
                                    <div className="inputBox w50">
                                        <Field 
                                        autoComplete="off"
                                        required name="cli_name" type="text" />
                                        <span>Nombres</span>
                                        <ErrorMessage name="cli_name" component={TextError} />
                                    </div>

                                    <div className="inputBox w50">
                                        <Field 
                                        autoComplete="off"
                                        required name="cli_lastname" type="text" />
                                        <span>Apellidos</span>
                                        <ErrorMessage name="cli_lastname" component={TextError} />
                                    </div>
                                    <div className="inputBox w50">
                                        <Field 
                                        autoComplete="off"
                                        required name="cli_email" type="email" />
                                        <span>Correo</span>
                                        <ErrorMessage name="cli_email" component={TextError} />
                                    </div>
                                    <div className="inputBox w50">
                                        <Field 
                                        autoComplete="off"
                                        required name="cli_password" type="password" />
                                        <span>Contraseña</span>
                                        <ErrorMessage name="cli_password" component={TextError} />
                                    </div>

                                    <div className="inputBox w100">
                                        <input 
                                        type="submit"
                                        value="Guardar"
                                        />
                                    </div>
                                    </Form>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
        
            )
        }}
    </Formik></>
            )
}
