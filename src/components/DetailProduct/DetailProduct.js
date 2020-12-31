import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { api } from '../../httprequestconfig/methods';

import './DetailProduct.css';
export const DetailProduct = () => {
    const { id } = useParams();
    const [product , setProduct] = useState({
        idproduct:'',
        prod_name:'',
        prod_price:'',
        prod_description:'',
        prod_image:''
    });    

        useEffect(()=>{
            api.getProductById(id)
            .then(res => {
                setProduct({
                    ...product,
                    idproduct:res.data.idproduct,
                    prod_name:res.data.prod_name,
                    prod_price:res.data.prod_price,
                    prod_description:res.data.description,
                    prod_image:res.data.prod_image
                });
            }).catch(err => console.log(err))
        },[]);


    return (
        <div className="detailProduct">
            <h1>detalles del producto + imagen + descripcion </h1>
            {product.prod_name}
            <img src={product.prod_image} alt="producto cool" />
        </div>
    )
}
