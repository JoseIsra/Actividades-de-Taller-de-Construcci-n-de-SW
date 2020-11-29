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
        <h2>Inicio</h2>
    </section>
    <section id="aboutUs" className="section">
        <h2>Acerca de nosotros</h2>
    </section>
    <section id="contactUs" className="section">
        <h2>Contáctanos</h2>
    </section>
</main>
<Footer/>
        </div>
    )
}
