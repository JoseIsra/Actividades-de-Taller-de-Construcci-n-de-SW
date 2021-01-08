import React from "react";
import "./FormularioServicio.css";
import TextField from '@material-ui/core/TextField';

var servicio="Seleccione el servicio";



export const FormularioServicio=()=>{
    function pasarDatos(e){
var elemento=document.getElementById("dropdownMenu2");
elemento.textContent=e.target.textContent;
    }
    return(
        
        <div className="formularioServicio_contenedor">
<div className="formularioServicio">
    <span className="formularioServicio_title"><h1>HappyPet - Servicios</h1></span>
    <span className="formularioServicio_welcome">
        <p>Bienvenido [usuario] al módulo de gestión de servicios, envíanos tu consulta</p>
    </span>
    <div className="dropdown dropdown_Servicio">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {servicio}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button onClick={pasarDatos} className="dropdown-item" type="button" value="Adiestramiento" >Adiestramiento</button>
    <button onClick={pasarDatos} className="dropdown-item" type="button">Consulta médica</button>
    <button onClick={pasarDatos} className="dropdown-item" type="button">Limpieza y Spa</button>
  </div>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">+51</span>
  </div>
  <input type="tel" maxLength="9" className="form-control" placeholder="Opcional" aria-label="Celular" aria-describedby="basic-addon1"/>
</div>
<div className="contenedor_MensajeServicio">
     <TextField
     className="inputServicio"
          id="outlined-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          defaultValue="Ingrese aquí su mensaje"
          variant="outlined"
        />
</div>
<div className="contenedor_submitCitaServicio">
    <button className="submitSolicitud">Enviar solicitud</button>
</div>
</div>
        </div>
    );
}