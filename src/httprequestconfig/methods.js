
import http from '../axiosconfig';
//products request
const getProducts = (id)=>{
    return http.get(`/products/${id}`);
} 

const getProductById = (id)=>{
    return http.get(`/product/${id}`);
}

const getCategories = () => {
    return http.get('/category');
}
const createClient =(data) =>{
    return http.post('/register', data);
}

//buy request
const sendToBuy=(data)=>{
    return http.post('/buy', data);
}




// client requests
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
    getProductById,
    getCategories,
    createClient,
    sendToBuy,
    login,
    getUser,
    logOut
}