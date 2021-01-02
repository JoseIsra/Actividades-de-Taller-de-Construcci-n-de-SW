import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import { getAmountOfMoney } from '../../reducer';
import { api } from '../../httprequestconfig/methods';
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css';



function SubTotal() {
const [{basket}] = useDataLayerValue();


const buyProducts = (total)=>{
        let data={
            basket,
            total
        }
    api.sendToBuy(data)
    .then(res => {
        basket.splice(0,basket.length);
        window.location.reload();
    })
    .catch(err => console.log(err));
}
    return (
        <div className="subtotal">
            <CurrencyFormat  
            renderText ={(value) => (
                <>
                <p>Total ({basket.length}) productos</p>
                <div className="subtotal__info">
                <p>Monto: <span> <strong>S/.{`${value}`}</strong></span></p>
                <button onClick={()=>buyProducts(value)}>Comprar</button>
                </div>
                </>
            )}
            decimalScale={2}
            value={getAmountOfMoney(basket)}
            displayType={"text"}
            thousandSeparator={true}
            // prefix={"S/."}
            />

        </div>
    )
}

export default SubTotal
