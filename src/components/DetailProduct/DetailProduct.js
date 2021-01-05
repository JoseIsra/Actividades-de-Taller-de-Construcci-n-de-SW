import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { api } from '../../httprequestconfig/methods';

import './DetailProduct.css';
import { useDataLayerValue } from '../../DataLayer';
export const DetailProduct = () => {
    const { id } = useParams();
    const history = useHistory();
    const [{client},dispatch] = useDataLayerValue();

    const [product , setProduct] = useState({
        idproduct:'',
        prod_name:'',
        prod_price:'',
        prod_description:'',
        prod_image:'',
        cantidad:''
    });    

        useEffect(()=>{
            api.getProductById(id)
            .then(res => {
                setProduct(product => ({
                    idproduct:res.data.idproduct,
                    prod_name:res.data.prod_name,
                    prod_price:res.data.prod_price,
                    prod_description:res.data.prod_description,
                    prod_image:res.data.prod_image,
                    cantidad:1
                }));
            }).catch(err => console.log(err))
        },[]);

        const addProduct =()=>{
            if(!client) return history.push('/login');
            dispatch({
                type:'ADD_TO_BASKET',
                item:product
            });
        }


    return (
        <div className="detailProduct">
            <div className="detailProduct_title">
                <h1>{product.prod_name}</h1>
            </div>
            <div className="detailProduct_description">
                <h2>Descripción: </h2>
                <p>{product.prod_description}</p>
            </div>
            
            <div className="detailProduct_price">
                <h2>Precio: S/. {product.prod_price}</h2>
            </div>
            <div className="detailProduct_main">
                    <button onClick ={addProduct} className="detailProduct_button">Agregar</button>
            </div>
            
            
            <img className="detailProduct_image" src={product.prod_image} alt="producto cool" />
        </div>
    )
}
