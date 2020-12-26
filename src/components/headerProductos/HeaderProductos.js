import React,{ useEffect } from "react";
import "./HeaderProductos.css";
import logo from "../../images/logo-happypet.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { api } from '../../httprequestconfig/methods';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link ,useHistory } from "react-router-dom";
import { Badge } from '@material-ui/core';
//import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { useDataLayerValue } from '../../DataLayer';


export const HeaderProductos=()=>{
    const [{basket, client},dispatch] = useDataLayerValue();
    const history = useHistory();
    const sesionToogle=()=>{
        if(client){
            api.logOut()
            .then(response => {
                history.push('/mainpage');
                window.location.reload();
            })
        }
    }


    useEffect(()=>{
        api.getUser()
        .then(response => {
            dispatch({
                type:'SET_USER',
                client:response.data
            })
        }).catch(err => console.log(err)) 
    }, []);
    



    return(
        <header className="headerProductos">
<span className="logo_Productos">
    <img className="imgLogo" src={logo} alt=""/>
</span>
<div className="buscar">
    <input className="barraBuscar" placeholder="¿Qué producto necesitas?"/>
</div>
<div className="botonesP">
    <Link className="carrito" to={!client ? "/login":"mainpage/basket"}>
        <Badge badgeContent={basket?.length} color="secondary">
<ShoppingCartIcon className="icono_shop_Producto"/>
</Badge>
    </Link>

    <Link to={!client && "/login"} className="header__session">
        <div  onClick={sesionToogle} className="header__options">
        {client && <span className="header__options__one">Hola {client.cli_name}</span>}
        <span className="header__options__two">{client? 'Cerrar Sesión':'Iniciar Sesión'}</span>
            </div>
    </Link>
    

</div>
        </header>
    )
}