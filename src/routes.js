import { Register } from './components/register/Register';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import {Mainpage} from './components/mainpage/Mainpage';


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
    }
];