
import http from '../axiosconfig';

const getProducts = (id)=>{
    return http.get(`/products/${id}`);
} 

const getCategories = () => {
    return http.get('/category');
}

export  const api={
    getProducts,
    getCategories
}