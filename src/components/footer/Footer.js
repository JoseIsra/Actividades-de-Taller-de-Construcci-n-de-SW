import React from "react";
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
export const Footer=()=>{
    return(
        <footer className="footer">
            <div className="navFooter">
<nav className="aboutUs">
    <p>Acerca de nosotros</p>
    <a href="">Mision</a>
    <a href="">Vision</a>
    <a href="">Metas</a>
    <a href="">Nuestros proveedores</a>
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
        <p>© 2020 HappyPet, Inc. All rights reserved</p>
        <br/>
        <a href="">Privacidad</a>
        <span className="separador">·</span>
    <a href="">Términos</a>
    <span className="separador">·</span>
    <a href="">Mapa del sitio</a>
    </nav>
    <nav className="redesSociales">
        <FacebookIcon className="facebook" />
    <TwitterIcon className="twitter"/>
    <InstagramIcon className="instagram"/>
    </nav>
    
</nav>
        </footer>
    )
}