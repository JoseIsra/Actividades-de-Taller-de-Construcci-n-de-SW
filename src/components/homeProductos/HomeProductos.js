import React from "react"
import "./HomeProductos.css";
import imagen3 from "../../images/fondo-alimentos.png";
import fondoToys from "../../images/fondo-juguetes.png";
import fondoDrugs from "../../images/fondo-medicina.png";
import {Link} from "react-router-dom";
export const HomeProductos=()=>{
    return(
        <div className="homeProductos">
            <span className="title"><h2>Nuestros productos</h2></span>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={imagen3} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
        <div class="contLink">
          <Link className="btn-animado">Ver alimentos</Link>
           </div>
       
        
         
    <h5>Alimentos</h5>
    <p>Variedad de productos y precios</p>
  </div>
    </div>
    <div className="carousel-item ">
      <img className="d-block w-100" src={fondoToys} alt="Second slide"/>
       <div className="carousel-caption d-none d-md-block">
           <div class="contLink">
             <Link className="btn-animado">Ver accesorios</Link>
           </div>
               
           
    <h5>Accesorios</h5>
    <p>Productos de entretenimiento y ropa para tus mascotas</p>
  </div>
    </div>
    <div className="carousel-item ">
      <img className="d-block w-100" src={fondoDrugs} alt="Third slide"/>
       <div className="carousel-caption d-none d-md-block">
         <div class="contLink">
           <Link className="btn-animado">Ver artículos</Link>
         </div>
           
    <h5>Artículos de limpieza</h5>
    <p>Para que tu mascota siempre lleve una buena higiene </p>
  </div>
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
        </div>
    )
}