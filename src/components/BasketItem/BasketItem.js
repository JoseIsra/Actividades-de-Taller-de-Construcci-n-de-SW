import React from 'react'
import { useDataLayerValue } from '../../DataLayer';
import './BasketItem.css';


export const BasketItem = ({ idproduct, prod_name, prod_price, prod_image }) => {
    const [, dispatch]  = useDataLayerValue();

    const removeItem =()=>{
        console.log(typeof prod_price);
        dispatch({
            type:'REMOVE_ITEM',
            id:idproduct
        });
    }

    return (
        <div className="basketItem">
            <img src={prod_image} alt="productHere" />
            <div className="basketItem__Info">
                <h4>{prod_name}</h4>
                <p>S/.<strong>{prod_price}</strong></p>
            <button 
            onClick={removeItem}
            className="btn-Remove">Remover de carrito</button>
            </div>
        </div>
    )
}

