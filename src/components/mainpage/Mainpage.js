
import React, {useEffect, useState}  from 'react'
import './Mainpage.css';
import { useDataLayerValue } from '../../DataLayer';
import { Sidebar } from '../Sidebar/Sidebar';
import { ProductCard } from '../productcard/ProductCard';
import { api } from '../../httprequestconfig/methods';


export const Mainpage = () => {
    const [products, setProducts] = useState([]);
    const [{idCategory, idSubCategory}] = useDataLayerValue();

    useEffect(() => {
        api.getProducts(idCategory)
        .then(response => setProducts(response.data))
        .catch(err => console.log(err));
}, [idCategory]);

    return (
        <div className="mainpage">

            <div className="mainpage__container">
                        <Sidebar />

                <aside className="mainpage__right__side">

                    { 
                    products.filter((item) => {
                        if(idSubCategory === null){
                            return item
                        }else if(item.prod_idsubcategory === idSubCategory){
                            return item
                        }
                    }).map((product, id) => {
                        return <ProductCard key={id}  {...product}  />
                    })
                }

                </aside>
            </div>  
                
            
        </div>
    )
}
