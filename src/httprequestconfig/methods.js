
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

export  const api={
    getProducts,
    getCategories,
    createClient
}