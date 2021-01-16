
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

const getDashData =()=>{
    return http.get('/dashinfo');
}




//buy request
const sendToBuy=(data)=>{
    return http.post('/buy', data);
}




// client requests
const login=(data)=>{
    return http.post('/login', data);
}

const createClient =(data) =>{
    return http.post('/register', data);
}


const sentAppointment=(data)=>{
    return http.post('/appointment',data)
}

const getBills= (id)=>{
    return http.get(`/bills/${id}`);
}

const getBillData= (billNumber)=>{
    return http.get(`/bill/${billNumber}`);
}




export  const api={
    getProducts,
    getProductById,
    getCategories,
    getSubcategories,
    sentAppointment,
    getDashData,
    getBills,
    getBillData,
    createClient,
    sendToBuy,
    login
}