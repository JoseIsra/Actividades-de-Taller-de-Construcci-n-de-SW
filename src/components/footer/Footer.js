import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export const Footer=()=>{
    const newTab=(red)=>{
        switch(red){
        case "facebook": window.open("http://www.facebook.com","_blank");
        break;
        case "twitter": window.open("http://www.twitter.com","_blank");
        break;
        case "instagram": window.open("http://www.instagram.com","_blank")
        
    }
    }
    return(
        <footer className="footer">
            <div className="navFooter">
<nav className="aboutUs">
    <p>Acerca de nosotros</p>
    <a href="#aboutUs">Mision</a>
    <a href="#aboutUs">Vision</a>
    <a href="#aboutUs">Metas</a>
    <a href="#aboutUs">Nuestros proveedores</a>
</nav>
<nav className="comunidad">
    <p>Comunidad</p>
    <a href="">Nuestros colaboradores</a>
    <a href="">Comunidad 3</a>
    <a href="">Comunidad 4</a>
    <a href="">Comunidad 5</a>
</nav>
            </div>

<hr/>
<nav className="deepFooter">
    <nav className="terminos">
        <div className="terminos1">
            <p className="derechos">© 2020 HappyPet, Inc. All rights reserved</p>
        </div>
        
        <div className="terminos2">
<span className="separador">·</span>
        <a className="priv" href="">Privacidad</a>
        <span className="separador">·</span>
    <a className="term" href="">Términos</a>
    <span className="separador">·</span>
    <a className="map" href="">Mapa del sitio</a>
        </div>
        
    </nav>
    <nav className="redesSociales">
        <FacebookIcon onClick={()=>{newTab("facebook")}} className="facebook" />
    <TwitterIcon onClick={()=>{newTab("twitter")}} className="twitter"/>
    <InstagramIcon onClick={()=>{newTab("instagram")}} className="instagram"/>
    </nav>
    
</nav>
        </footer>
    )
}