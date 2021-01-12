
import React from 'react'
import { Link ,useHistory} from 'react-router-dom';
import { useDataLayerValue } from '../../DataLayer';

import './ProductCard.css';
export const ProductCard = ({ idproduct, prod_name, prod_price, prod_image ,prod_description, cantidad}) => {
    const [{client},dispatch] = useDataLayerValue();
    const history = useHistory();
    const addToBasket=()=>{
        //agregar al carrito
        if(!client) return history.push('/login');
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                idproduct,
                prod_name,
                prod_price,
                prod_image,
                prod_description,
                cantidad:1
            }
        });
    
    }


    return (
        <div className="productCard">
            <div className="productCard_image">
            <img src={prod_image} alt="producto" />
            </div>

            <div className="productCard__container">
                <p>Nombre: <span>{prod_name}</span></p>
                <p><strong>Precio: S/.</strong>{prod_price}</p>

            </div>
            <div className="productCard__BuyOptions">
                <button onClick={addToBasket} className="btn-addToBasket">
                    Añadir al carrito
                </button>
                <Link to={`/mainpage/product/${idproduct}`} className="btn-seeDetails">Ver detalles </Link>
            </div>

        </div>
    )
}
