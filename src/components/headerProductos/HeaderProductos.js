import React from "react";
import "./HeaderProductos.css";
import logo from "../../images/logo-happypet.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import { Badge } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

export const HeaderProductos=()=>{
    return(
        <header className="headerProductos">
<span className="logo_Productos">
    <img className="imgLogo" src={logo} alt=""/>
</span>
<div className="buscar">
    <input className="barraBuscar" placeholder="¿Qué producto necesitas?"/>
</div>
<div className="botonesP">
    <Link className="carrito">
        <Badge badgeContent={2} color="secondary">
  <ShoppingCartIcon className="icono_shop_Producto"/>
</Badge>
        
    </Link>
    <div className="miCuenta_cont_Producto">
         
         
    <ul className="miCuenta_ul">
        <li className="miCuenta"><AccountCircleIcon/>
        Mi cuenta
        <ExpandMoreIcon/>
            <ul className="panel_cuenta_Producto ">
                <li className="cont_panel"><Link to="/login" className="login_Producto"><ExitToAppIcon/>Iniciar sesion</Link></li>
                <li className="cont_panel"><Link to="/register" className="register_Producto"><GroupAddIcon/>Registrarse</Link></li>
            </ul>
        </li>
    </ul>
    </div>
    
   
</div>
        </header>
    )
}