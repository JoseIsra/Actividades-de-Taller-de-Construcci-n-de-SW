
import React from 'react'
import { Link } from 'react-router-dom';

import './ProductCard.css';
export const ProductCard = ({ idproduct, prod_name, prod_price, prod_image }) => {
    return (
        <div className="productCard">
            <img src={prod_image} alt="producto" />

            <div className="productCard__container">
                <p>{prod_name}</p>
                <p><strong>Precio: S/.</strong>{prod_price}</p>

            </div>
            <div className="productCard__BuyOptions">
                <button className="btn-addToBasket">
                    Añadir al carrito
                </button>
                <Link to="/mainpage/product" className="btn-seeDetails">Ver detalles </Link>
            </div>

        </div>
    )
}
