import axios from 'axios';

export default axios.create({
    baseURL:"https://happypet-backend.herokuapp.com/api",
    withCredentials:true
    });