import { Register } from './components/register/Register';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import {Mainpage} from './components/mainpage/Mainpage';
import {DetailProduct} from './components/DetailProduct/DetailProduct';

export const routes = [
    {
        path:'/home',
        component:Home,
        exact:true
    },
    {
        path:'/login',
        component:Login,
        exact:true
    },
    {
        path:'/register',
        component:Register,
        exact:true
    },{
        path:'/mainpage',
        component:Mainpage,
        exact:true
    },{
        path:'/mainpage/product',
        component:DetailProduct,
        exact:true
    }
];