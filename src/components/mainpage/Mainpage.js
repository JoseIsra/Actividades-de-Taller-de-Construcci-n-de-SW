
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Mainpage.css';
import { ProductCard } from '../productcard/ProductCard';
import { Footer } from '../footer/Footer';
import { Sidebar } from '../Sidebar/Sidebar';

export const Mainpage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [idCategory, setIdCategory] = useState(1);
    const [categoryName, setcategoryName] = useState('juguetes');
    //useeffect --> recupera los registros de la tabla productos
    const changeCategoriesAndId = (theId) => {
        setIdCategory(theId);
        setcategoryName(categories[theId - 1].cat_name);
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/products/${idCategory}]`)
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/category')
            .then(response => setCategories(response.data))
            .catch(err => console.log(err));
    }, []);



    return (
        <div className="mainpage">
            <header className="mainpage__header">Header de ventas aqui</header>

            <div className="mainpage__container">
                <aside className="mainpage__left__side">

                    <p className="catg-title">Categoria : 
                    <br />
                    <span>{categoryName} </span>
                    </p>
                    <Sidebar changeCategoriesAndId={changeCategoriesAndId} categories={categories} />

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
