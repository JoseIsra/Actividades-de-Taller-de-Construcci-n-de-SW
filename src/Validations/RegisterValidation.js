import * as yup from 'yup';


export const registerSchema = yup.object({
    name: yup.string().min(6,'deben ser más de 6 caracteres').required('Required'),
    lastname: yup.string().required('Required'),
    email: yup.string().email('no es un correo').required('Required')
});

