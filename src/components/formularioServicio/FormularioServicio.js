import React, {useState,useEffect} from "react";
import "./FormularioServicio.css";
import TextField from '@material-ui/core/TextField';
import { api } from '../../httprequestconfig/methods';
import {useDataLayerValue } from '../../DataLayer';
import { useHistory} from "react-router-dom";

var servicio="Seleccione el servicio";



export const FormularioServicio=()=>{
  const [{client}] = useDataLayerValue();
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(null);
  const history = useHistory();
  const [bodyConsult, setBodyConsult] = useState({
    id: (client? client.idclient:''),
    message:'',
    telephone:'',
    service:''
  });

    const handleChange = (e)=>{
      setBodyConsult({
        ...bodyConsult,
        [e.target.name]:e.target.value
      });
    }

    function pasarDatos(e){
let elemento=document.getElementById("dropdownMenu2");
elemento.textContent=e.target.textContent;
      setBodyConsult({
        ...bodyConsult,
        service:e.target.value
      })
    }

    const sendMessage = ()=>{
      //funciona la recuperación de info 
        if(!client){
        return history.push('/login');
      }
      api.sentAppointment(bodyConsult)
      .then(res => {setBodyConsult({
        message:'',
    telephone:'',
    service:''
      });
        setModal("Consulta enviada, HappyPet responderá pronto");
    }
      ).catch(err => console.log(err))
    }

    useEffect(()=>{
      if(!modal){
          setShow(false);
          return
      }
      setShow(true);
      const timer = setTimeout(() => {
          setShow(false)
      }, 2500);
      return () => clearTimeout(timer);
  },[modal]);

    return(
        
        <div className="formularioServicio_contenedor">
          {show && <h3>{modal}</h3>}
<div className="formularioServicio">
    <span className="formularioServicio_title"><h1>HappyPet - Servicios</h1></span>
    <span className="formularioServicio_welcome">
        <p>Bienvenido {client? client.cli_name: ''} al módulo de gestión de servicios, envíanos tu consulta</p>
    </span>
    <div className="dropdown dropdown_Servicio">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {servicio}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button onClick={pasarDatos} className="dropdown-item" type="button" value="1" >Adiestramiento</button>
    <button onClick={pasarDatos} className="dropdown-item" type="button" value="11">Consulta médica</button>
    <button onClick={pasarDatos} className="dropdown-item" type="button" value="21">Limpieza y Spa</button>
  </div>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">+51</span>
  </div>
  <input name="telephone" value={bodyConsult.telephone} type="tel" maxLength="9" className="form-control" onChange ={handleChange} placeholder="Opcional" aria-label="Celular" aria-describedby="basic-addon1"/>
</div>
<div className="contenedor_MensajeServicio">
    <TextField name="message"
    className="inputServicio"
          id="outlined-multiline-static"
          label="Mensaje"
          value={bodyConsult.message}
          onChange={handleChange}
          multiline
          rows={4}
          placeholder="Ingrese aquí su mensaje"
          variant="outlined"
        />
</div>
<div className="contenedor_submitCitaServicio">
    <button onClick = {sendMessage} className="submitSolicitud">Enviar solicitud</button>
</div>
</div>
        </div>
    );
}