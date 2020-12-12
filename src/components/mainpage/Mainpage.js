
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Mainpage.css';
import { ProductCard } from '../productcard/ProductCard';
import {Footer}  from '../footer/Footer';
import { HeaderProductos } from '../headerProductos/HeaderProductos';



export const Mainpage = () => {
    const [products, setProducts] = useState([]);


    //useeffect --> recupera los registros de la tabla productos
useEffect(()=>{
    axios.get('http://localhost:4000/api/products')
    .then(response => setProducts(response.data))
    .catch(err => console.log(err));
},[]);



    return (
        <div className="mainpage">
        <HeaderProductos/>
<div className="mainpage__container">
        <aside className="mainpage__left__side">
            <ul>
                <li>categorias</li>
                <li>categorias</li>
                <li>categorias</li>
            </ul>
        </aside>

        <aside className="mainpage__right__side"> 
            {products.map((product, id) => {
                return <ProductCard key={id}  {...product} />
            })}
            
        </aside>
        </div>
        
            <Footer />
        
        </div>
    )
}
