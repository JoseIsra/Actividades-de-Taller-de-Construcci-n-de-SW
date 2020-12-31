
import React, {useState, useEffect} from 'react';
import { api } from '../../httprequestconfig/methods';
import './Sidebar.css';
import { useDataLayerValue } from '../../DataLayer';

export const Sidebar = () => {
        const [categories, setCategories] = useState([]);
        const [nameCategory,setNameCategory ] = useState('juguetes');
        const [{_},dispatch] = useDataLayerValue();


    useEffect(()=>{
            api.getCategories()
            .then(response => setCategories(response.data))
            .catch(err => console.log(err));
    },[]);

    const changeCategory = (id)=>{
        setNameCategory(categories[id-1].cat_name);
            dispatch({
                type:'UPDATE_CATEGORY',
                payload:id
            });
    }


    return (
        <div className="sidebar">
            <p className="sidebar-title">Categoría actual</p>
            <h3>{nameCategory}</h3>
            <p className="sidebar-subtitle">Categorias:</p>
            <ul className="sidebar-list">
            {categories.map((category, index)=>{
                    return <li 
                    onClick={(e)=>changeCategory(category.idcategory)}
                    key={index} 
                    className="sidebar__categories"
                    >{category.cat_name}</li>
                    
                })
            }
            </ul>
        </div>
    )
}
