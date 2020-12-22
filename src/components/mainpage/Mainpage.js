
import React, { useState, useEffect } from 'react'
import { api } from '../../httprequestconfig/methods';
import './Mainpage.css';
import { ProductCard } from '../productcard/ProductCard';
import { Footer } from '../footer/Footer';
import { Sidebar } from '../Sidebar/Sidebar';
import { HeaderProductos } from '../headerProductos/HeaderProductos';
import { DetailProduct } from '../DetailProduct/DetailProduct';
import { useDataLayerValue } from '../../DataLayer';
import {Router, Route, Switch} from 'react-router-dom';


export const Mainpage = () => {
    const [products, setProducts] = useState([]);
    const [{idCategory}] = useDataLayerValue();
    
    useEffect(() => {
            api.getProducts(idCategory)
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
    }, [idCategory]);

    



    return (
        <div className="mainpage">
            
        <HeaderProductos />

            <div className="mainpage__container">
                        <Sidebar />

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
