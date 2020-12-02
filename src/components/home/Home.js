
import React from "react";
import "./Home.css";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import imagen1 from "../../images/fondo-inicio.png";
import imagen2 from "../../images/fondo-productos.png";






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
        <h2>Nuestros productos</h2>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={imagen1} alt="First slide"/>
    </div>
    <div className="carousel-item active">
      <img className="d-block w-100" src={imagen2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={imagen1} alt="Third slide"/>
    </div>
    <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  
</div>
        
    </section>
    <section id="servicios" className="section">
        <h2>Nuestros servicios</h2>
        <nav className="buscador">
            
        </nav>
        <div className="tablaProductos"></div>
    </section>
</main>
<Footer/>
        </div>
    )
}
