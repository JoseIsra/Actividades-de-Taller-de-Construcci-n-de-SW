import React from "react";
import "./Home.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HomeServicios } from "../homeServicios/HomeServicios";
import { HomeProductos } from "../homeProductos/HomeProductos";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../images/fondo-alimentos.png";






export const Home = () => {
    return (
        <div className="home">
            <Header />
            <main className="main">
                <section id="inicio" className="section seccionInicio">
                    <div className="inicio">
                        <div className="texto">
                            <div className="letras">
                                <h2>Comienza a explorar todos nuestros productos y servicios</h2>
                            </div>
                        
                        <Link to='/mainpage' className="begin">Comenzar</Link>
                    </div>

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
                    <span className="title">
        <h2>Nuestros servicios</h2>
      </span>
      <div className="contenedorSlider">
        <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="cont-prueba">
              <Link className="prueba" >Consultas</Link>

            </div>
            <div className="carousel-caption d-none d-md-block">
              <div className="contantLink">
                <Link className="btn-alimentos">Ir a consultas</Link>
              </div>
              <h5>Consultas básicas</h5>
              <p>Realice cualquier tipo de consulta con respecto a su mascota: alimentación, estado de salud, etc.</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={image1} alt="Second slide" />
            <div className="cont-prueba">
              <Link className="prueba" >Adiestramiento</Link>

            </div>
            <div className="carousel-caption d-none d-md-block">
              <div className="contantLink">
                <Link className="btn-alimentos">Reservar cita</Link>
              </div>

              <h5>Adiestramiento</h5>
              <p>Especializado en canes, contamos con colaboradores de todo el mundo</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={image1} alt="Third slide" />
            <div className="cont-prueba">
              <Link className="prueba" >Limpieza y Spa</Link>

            </div>
            <div className="carousel-caption d-none d-md-block">
              <div className="contantLink">
                <Link className="btn-alimentos">Reservar cita</Link>
              </div>
              <h5>Tratamiento completo de limpieza</h5>
              <p>Deje a su mascota en buenas manos, ofrecemos servicios completos de limpieza</p>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
          </ol>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
      </div>

                </section>
            </main>
            <Footer />
        </div>
    )
}
