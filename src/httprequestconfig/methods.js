
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
const getSubcategories = (id)=>{
return http.get(`/subcategory/${id}`)
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
const sentAppointment=(data)=>{
    return http.post('/appointment',data)
}

const getBills= ()=>{
    return http.get('/bills');
}

const getBillData= (billNumber)=>{
    return http.get(`/bill/${billNumber}`);
}

const logOut =()=>{
    return http.get('/logout');
}


export  const api={
    getProducts,
    getProductById,
    getCategories,
    getSubcategories,
    sentAppointment,
    getBills,
    getBillData,
    createClient,
    sendToBuy,
    login,
    getUser,
    logOut
}