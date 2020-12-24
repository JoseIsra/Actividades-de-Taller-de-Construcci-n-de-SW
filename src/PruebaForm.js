import React from 'react';
import { Formik,Field, Form, ErrorMessage  } from 'formik';
import  {TextError}  from './TextError';
import { api } from './httprequestconfig/methods';
import * as yup from 'yup';



const validationSchema = yup.object({
    cli_name: yup.string().required('Required'),
    cli_lastname: yup.string().required('Required'),
    cli_email: yup.string().email('no es un correo').required('Required'),
    cli_password: yup.string().min(6,'debe ser superior a 6').required('Required'),
});

const onSubmit = async (values, onSubmitProps)=>{
    try{
        await  api.createClient(values)
        onSubmitProps.resetForm();
    }catch(err){
        console.log(err);
    }
}


export const PruebaForm = () => {

    return (
        
        <Formik
            initialValues={{ cli_name: '', cli_lastname: '', cli_email: '', cli_password:''}}
            validationSchema={validationSchema}
            onSubmit ={onSubmit}
            validateOnBlur={false}
        >
        {formik => {
            console.log(formik)
            return (
                <Form>
                <label>Nombre</label>
                <Field name="cli_name" type="text" />
                <ErrorMessage name="cli_name" />
                <br />
                <label>Apelido</label>
                <Field name="cli_lastname" type="text"/>
                <ErrorMessage name="cli_lastname" />
                <br />
                <label>Correo</label>
                <Field name="cli_email" type="email"/>
                <ErrorMessage name="cli_email" />
                <br />
                <label>Contraseña</label>
                <Field name="cli_password" type="password"/>
                <ErrorMessage name="cli_password" component={TextError} />
                <button type="submit">Enviar</button>
            </Form>
            )
        }}
        </Formik>
    )
}
