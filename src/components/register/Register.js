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
    const [visible , setVisible] = useState(false);
    const history = useHistory();

    const onSubmit =  async(values, onSubmitProps) => {
    const response = await api.createClient(values);

    if(response.data === ''){
        onSubmitProps.resetForm();
        history.push('/login');
        }else{
                setMessage(response.data);
        }
    }
    useEffect(()=>{
        if(!message){
            setVisible(false);
            return
        }
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false)
        }, 2500);
        return () => clearTimeout(timer);
    },[message]);


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
                    {visible && (<p className="emergencia">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>{message}
                    </p>)}
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
