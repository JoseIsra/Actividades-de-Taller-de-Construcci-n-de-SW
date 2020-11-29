import { Divider } from "@material-ui/core";
import React from "react";
import "./Home.css";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
export const Home=()=>{
    return(
        <div className="home">
<Header/>
<main>
    <section id="inicio" className="section">
        <div className="Inicio">
            <div className="texto">
                <h2>Comienza a explorar todos nuestros productos y servicios</h2>
                <button type="button" className="btn btn-outline-info">Comenzar</button>
            </div>
        </div>
    </section>
    <section id="aboutUs" className="section">
        <div className="AboutUs">
            <h2>Acerca de nosotros</h2>
            <div className="AboutUs2">
                <div className="mision">
                    <h4>Nuestra misión</h4>
                    <p> Aqui irá todo con respecto a la mision Aqui irá todo con respecto a la mision Aqui irá todo con respecto a la mision Aqui irá todo con respecto a la mision </p>
                </div>
                <div className="vision">
                    <h4>Nuestra visión</h4>
                    <p>Aqui irá todo con respecto a la vision</p>
                </div>
                <div className="metas">
                    <h4>Nuestras metas</h4>
                    <p>Aqui irá todo con respecto a las metas</p>
                </div>
                <div className="proveedores">
                    <h4>Nuestros proveedores</h4>
                    <p>Aqui irá todo con respecto a nuestros proveedores</p>
                </div>
            </div>
        </div>
        
    </section>
    <section id="contactUs" className="section">
        <h2>Contáctanos</h2>
    </section>
</main>
<Footer/>
        </div>
    )
}
