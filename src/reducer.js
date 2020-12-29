
export const getAmountOfMoney =(basket) =>
        basket?.reduce((total, item) => parseFloat(item.prod_price) + total,0);




export const initialState = {
    idCategory:1,
    basket:[],
    client:null
}


const reducer = (state , action)=>{
    console.log(action);
    switch (action.type) {
        case 'UPDATE_CATEGORY':
            return {
                ...state,
                idCategory:action.payload
            }
            
        case 'ADD_TO_BASKET':{
            return {
            ...state,
            basket:[...state.basket, action.item]
            }
        } 
        case 'REMOVE_ITEM':{
            const newProducts = state.basket.filter((item) => item.idproduct !== action.id);
            return {
                ...state,
                basket: newProducts
                
            }
        } 
        case 'SET_USER':{
            return{
                ...state,
                client:action.client
            }
        }
    
        default: return state;
            
    }
}


export default reducer;