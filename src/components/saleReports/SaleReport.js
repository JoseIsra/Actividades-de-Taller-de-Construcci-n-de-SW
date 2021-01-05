import React, { useEffect, useState } from 'react';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { api } from '../../httprequestconfig/methods';
import './SaleReport.css';
import { useDataLayerValue } from '../../DataLayer';
export const SaleReport = () => {

    const [{client},dispatch] = useDataLayerValue();
//     useEffect(() => {
//         api.getUser()
//             .then(response => {
//             dispatch({
//                 type:'SET_USER',
//                 client:response.data
//             })

//     }).catch(err => console.log(err))
// }, []);



return (
    <div className="salereport">
        <div className="salereport__title">
            <h1>Reportes HappyPet
                <img src='/imagenes/notas.png' alt="notas" />
            </h1>
            <div className="salereport__links">
                <Link to="/mainpage"> Volver a productos
            <TagFacesIcon />
                </Link>
            </div>
        </div>
        <div className="salereport__body">
            <div className="salereport_dataUsers">
                <div className="salereports_dataUsers__fields">
                    <h2>Datos de Usuarios</h2>
                    <p>NOMBRE: <span>{client.cli_name} </span> </p>
                    <p>APELLIDOS: <span> {client.cli_lastname}</span></p>
                    <p>CORREO: <span>{client.cli_email}</span></p>
                </div>
                <div className="salereport__listBills">
                    <p>Usted tiene n boletas de compra</p>
                    {/* listado de las boletas */}
                </div>
            </div>
            <div className="salereport_showBills">
                <input placeholder="Digite su boleta...."></input>
                <button>Buscar <SearchIcon /> </button>
                <div className="salereport_listDataBills">
                    aqui van las boletas bro
                    </div>
            </div>


        </div>

    </div>
)
}
