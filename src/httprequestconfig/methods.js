
import http from '../axiosconfig';

const getProducts = (id)=>{
    return http.get(`/products/${id}`);
} 

const getCategories = () => {
    return http.get('/category');
}
const createClient =(data) =>{
    return http.post('/register', data);
}

const login=(data)=>{
    return http.post('/login', data);
}

const getUser= ()=>{
    return http.get('/user');
}

const logOut =()=>{
    return http.get('/logout');
}


export  const api={
    getProducts,
    getCategories,
    createClient,
    login,
    getUser,
    logOut
}