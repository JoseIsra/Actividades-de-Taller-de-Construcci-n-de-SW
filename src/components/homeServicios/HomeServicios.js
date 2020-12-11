import React from "react";
import "./HomeServicios.css";
import image1 from "../../images/fondo-alimentos.png";
import image2 from "../../images/fondo-juguetes.png";
import image3 from "../../images/fondo-medicina.png";
import { Link } from "react-router-dom";
export const HomeServicios = () => {

  return (
    <div className="homeService">
      <span class="title">
        <h2>Nuestros servicios</h2>
      </span>
      <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="cont-prueba">
              <Link className="prueba" >Consultas</Link>

            </div>
            <div className="carousel-caption d-none d-md-block">
              <div class="contantLink">
                <Link className="btn-alimentos">Ir a consultas</Link>
              </div>
              <h5>Consultas básicas</h5>
              <p>Realice cualquier tipo de consulta con respecto a su mascota: alimentación, estado de salud, etc.</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="cont-prueba">
              <Link className="prueba" >Adiestramiento</Link>

            </div>
            <div className="carousel-caption d-none d-md-block">
              <div class="contantLink">
                <Link className="btn-alimentos">Reservar cita</Link>
              </div>

              <h5>Adiestramiento</h5>
              <p>Especializado en canes, contamos con colaboradores de todo el mundo</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <div className="cont-prueba">
              <Link className="prueba" >Limpieza y Spa</Link>

            </div>
            <div className="carousel-caption d-none d-md-block">
              <div class="contantLink">
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
  )
}