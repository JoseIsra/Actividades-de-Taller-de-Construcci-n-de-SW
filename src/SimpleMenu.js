import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

export const SimpleMenu= ({categories})=> {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (elid) => {
        setAnchorEl(null);
        console.log(elid);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Categorias
    </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
            >
                {categories.map((category, index)=>{
                    return <MenuItem key={index} onClick={handleClose}>{category.cat_name}</MenuItem>
                    
                })}
                
        
            </Menu>
        </div>
    );
}