import React,{useState} from 'react'
import {Card, CardMedia  } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useDataLayerValue } from '../../DataLayer';
import './BasketItem.css';


export const BasketItem = ({ idproduct, prod_name, prod_price, prod_image,prod_description,cantidad}) => {
    const [,dispatch]  = useDataLayerValue();
    const [newUnits,setNewUnits] = useState(cantidad);

    const removeItem =()=>{
        dispatch({
            type:'REMOVE_ITEM',
            id:idproduct
        });
    }

    const updateUnits =()=>{
        
        dispatch({
            type:'UPDATE_UNITS',
            units:newUnits,
            id:idproduct,
        });
    }

    return (
        <Card className="basketItem">
                
                    
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={prod_image}
            />
                    
                <div className="basketItem__Info">
                <h2>{prod_name}</h2> 
                    <p>{prod_description}</p>

                    <div className="basketItem__buy">
                        <p><strong>Precio: S/.</strong>{prod_price}</p>
                        <div className="basketItem__info__Amount">

                        <TextField
                        id="outlined-basic" 
                        className="optionNumber"
                        label="Cantidad"
                        value={newUnits}
                        onChange={(e) => setNewUnits(e.target.value)}
                        variant="outlined" type="number"  InputProps={{
                            inputProps: { 
                            min: 1,
                            }
                        }} />
                        <button 
                        onClick={updateUnits}>Establecer cantidad</button>
                        </div>
                    </div>
                    <button
                    onClick={removeItem}
                    >Retirar del carrito</button>
                </div>
            

        </Card>
    
    )
}

