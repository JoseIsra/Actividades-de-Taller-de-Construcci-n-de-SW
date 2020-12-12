
import React, {useState} from 'react';

import './Sidebar.css';

export const Sidebar = ({changeCategoriesAndId, categories}) => {


    return (
        <div className="sidebar">
            <p className="sidebar-subtitle">Seleccione una categoria</p>
            <ul className="sidebar-list">

            {categories.map((category, index)=>{
                    return <li 
                    onClick={(e)=>changeCategoriesAndId(category.idcategory)}
                    key={index} 
                    className="sidebar__categories"
                    >{category.cat_name}</li>
                    
                })}

            </ul>
        </div>
    )
}
