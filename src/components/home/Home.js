import React from "react";
import "./Home.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HomeServicios } from "../homeServicios/HomeServicios";
import { HomeProductos } from "../homeProductos/HomeProductos";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";






export const Home = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <section id="inicio" className="section inicio">

                    <div className="texto">
                        <h2>Comienza a explorar todos nuestros productos y servicios</h2>
                        <Link to='/mainpage' className="begin">Comenzar</Link>
                    </div>

                </section>
                <section id="aboutUs" className="section">
                    <div className="AboutUs">
                        <h2>Acerca de nosotros</h2>
                        <div className="AboutUs2">
                            <div className="mision">
                                <h4>Nuestra misión</h4>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris. </p>
                            </div>
                            <div className="vision">
                                <h4>Nuestra visión</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris.
                    </p>
                            </div>
                            <div className="metas">
                                <h4>Nuestras metas</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris.

                    </p>
                            </div>
                            <div className="proveedores">
                                <h4>Nuestros proveedores</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus porttitor justo vestibulum tincidunt. Integer hendrerit ac orci eget scelerisque. Pellentesque nec pharetra ligula. Integer porta cursus felis sed dapibus. Praesent iaculis interdum enim, in auctor mauris.</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="productos" className="section productos">
                    <HomeProductos />

                </section>
                <section id="servicios" className="section servicios">
                    <HomeServicios

                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}
