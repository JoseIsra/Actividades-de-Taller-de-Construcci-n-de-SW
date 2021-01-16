import React,{ useEffect } from "react";
import "./HeaderProductos.css";
import logo from "../../images/logo-happypet.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { api } from '../../httprequestconfig/methods';

import { Link  } from "react-router-dom";
import { Badge } from '@material-ui/core';
import { useDataLayerValue } from '../../DataLayer';
import MenuListComposition from '../MenuList/MenuList';
import Cookies from 'js-cookie';    
export const HeaderProductos=()=>{
    const [{basket, client},dispatch] = useDataLayerValue();
    
    const readCookie=()=>{
        let data = Cookies.get('user');
        if(data !== undefined){
            data=JSON.parse(data);
            dispatch({
                type:'SET_USER',
                client:data
            })
        }
    }

    useEffect(()=>{ 
            readCookie();
    }, []);



    return(
        <header className="headerProductos">
<span className="logo_Productos">
    <Link to ="/mainpage">
    <img className="imgLogo" src={logo} alt=""/>
    </Link>
</span>
<div className="buscar">
    <input className="barraBuscar"  placeholder="¿Qué producto necesitas?"/>
</div>
   

<div className="botonesP">
    <Link className="carrito" to={!client ? "/login":"/mainpage/basket"}>
        <Badge badgeContent={basket?.length} color="secondary">
<ShoppingCartIcon className="icono_shop_Producto"/>
</Badge>
    </Link>

    
    <Link to={!client && "/login"} className="header__session">
        <div  className="header__options">
        {client && <span className="header__options__one">Hola {client.cli_name}</span>}
        <span className="header__options__two">{client? (<MenuListComposition/>)
        :'Iniciar Sesión'}</span>
            </div>
    </Link>
</div>
        <div className="header__links">
                    <Link to="/">Ir al inicio</Link>
                    <Link to="/mainpage">Ver productos</Link>
                    <Link to="/service">Ver servicios</Link>
                </div>
        </header>
    
    )
}