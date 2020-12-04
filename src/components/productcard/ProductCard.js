
import React from 'react'
import './ProductCard.css';
export const ProductCard = ({idproduct ,prod_name, prod_price, prod_image }) => {
    return (
        <div className="productCard">
            <img src= {prod_image} alt="producto"/>
            <div className="productCard__container">
            <p>{prod_name}</p>
            <p>Precio: S/.{prod_price}</p>
            <p>Ver detalles</p>
            </div>
        </div>
    )
}
