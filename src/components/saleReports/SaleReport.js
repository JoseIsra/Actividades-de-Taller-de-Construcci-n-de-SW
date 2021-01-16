import React, { useEffect, useState } from 'react';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import './SaleReport.css';
import { api } from '../../httprequestconfig/methods';
import { useBills } from './useBills';
import { useDataLayerValue } from '../../DataLayer';
import Cookies from 'js-cookie';    



export const SaleReport = () => {
    
    const {bills} = useBills();
    const [{client} ,dispatch] = useDataLayerValue();
    const[searchBill , setSearchBill] = useState('');
    const[billData , setBillData] = useState([]);

    


    const billWatcher =()=>{
        api.getBillData(searchBill)
        .then(response => setBillData(response.data))
        .catch(err => console.log(err));
    }

    // const readCookie=()=>{
    //     let data = Cookies.get('user');
    //     if(data !== undefined){
    //         data=JSON.parse(data);
    //         console.log(data);
    //         dispatch({
    //             type:'SET_USER',
    //             client:data
    //         })
    //     }
    // }
    useEffect(()=>{ 
        let data = Cookies.get('user');
        if(data !== undefined){
            data=JSON.parse(data);
            console.log(data);
            dispatch({
                type:'SET_USER',
                client:data
            })
        }
}, []);


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
                    <p>Usted tiene ({bills.length}) boletas de compra</p>
                        <div className="scrollTable">
                    <table id="tableList">
                        <thead>
                        <tr>
                            <th>Boleta</th>
                            <th>MONTO</th>
                            <th>Fecha</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bills.map(bill => {
                            return (<tr>
                                <td>{bill.bill_number}</td>
                                <td>S/.{bill.total}</td>
                                <td>{bill.date}</td>
                            </tr>)
                        })}
                        </tbody>
                </table>
                        </div>
                </div>
            </div>
            <div className="salereport_showBills">
                <h3>Busque su boleta aquí</h3>
                <input placeholder="Digite su boleta...." value={searchBill}
                onChange={(e) => setSearchBill(e.target.value)}
                ></input>
                <button onClick={billWatcher}>Buscar <SearchIcon /> </button>
                <div className="salereport_listDataBills">
                    <span>Productos <ListAltIcon/> </span>
                    {billData.map((bill,index) => {
                        return (
                            <div key ={index} className="listBills">
                            <span>{index+1}. Nombre:{bill.prod_name}</span>
                            <span>Precio:S/.{bill.prod_price}</span>
                            <span>Unidades:{bill.quantity}</span>
                            <span>_____________________________________</span>
                            </div>
                        )
                    })}
                    </div>
            </div>


        </div>

    </div>
)
}
