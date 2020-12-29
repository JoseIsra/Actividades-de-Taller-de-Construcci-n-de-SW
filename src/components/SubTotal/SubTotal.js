import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { getAmountOfMoney } from '../../reducer';
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css';



function SubTotal() {
const [{basket}] = useDataLayerValue();

    return (
        <div className="subtotal">
            <CurrencyFormat  
            renderText ={(value) => (
                <>
                <p>Total ({basket.length}) productos</p>
                <div className="subtotal__info">
                <p>Monto: <span> <strong>{`${value}`}</strong></span></p>
                <button>Comprar</button>
                </div>
                </>
            )}
            decimalScale={2}
            value={getAmountOfMoney(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"S/."}
            />

        </div>
    )
}

export default SubTotal
