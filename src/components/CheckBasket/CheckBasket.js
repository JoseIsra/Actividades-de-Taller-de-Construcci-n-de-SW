import React from 'react'
import { useDataLayerValue } from '../../DataLayer';
import { BasketItem } from '../BasketItem/BasketItem';
import { Modal } from '../Modal/Modal';
import SubTotal from '../SubTotal/SubTotal';
import './CheckBasket.css';




function CheckBasket() {
    const [{basket,modalForBuying , modalContent }, dispatch] = useDataLayerValue();
    
    const closeModal = ()=>{
        dispatch({
            type:'CLOSE_MODAL'
        })
    }

    return (
        <div className="checkBasket">
            
            <div className="checkBasket__leftSide">
            {(basket?.length === 0)? (
                <div className="checkBasket__empty">
                    {modalForBuying && <Modal modalContent={modalContent} closeModal={closeModal} />}
                <h2>Su carrito está vacío </h2>
                <p>Presione "agregar al carrito" en los productos que desee </p>
                </div>
            ) :(
                <div className="checkBastet__products">
                    <h3>Su cesta no está vacía </h3>
                        {basket?.map((item, index) => ( 
                                    <BasketItem key={item.idproduct} {...item}  />)
                                    )}
                </div>

            )}
            </div>
            {basket?.length > 0 && (
            <div className="checkBasket__rightSide">
                <SubTotal /> 
            </div>
            )}


        </div>
    )
}

export default CheckBasket

