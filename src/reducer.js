

export const getAmountOfMoney =(basket) =>
        basket?.reduce((total, item) => parseFloat(item.prod_price)*item.cantidad + total,0);




export const initialState = {
    idCategory:1,
    basket:[],
    client:null,
    idSubCategory:null,
    modalContent:'',
    isModalVisible:false,
    modalForBuying:false,
    modalIndex:null
}


const reducer = (state , action)=>{
    console.log(action);
    switch (action.type) {
        case 'UPDATE_CATEGORY':
            return {
                ...state,
                idCategory:action.payload,
                idSubCategory:null,
            }
        case 'UPDATE_SUBCATEGORY':{
            return{
            ...state,
            idSubCategory:action.payload
            }
        }   
        
        case 'ADD_TO_BASKET':{
            if(state.basket.length === 0){
                return{
                    ...state,
                    basket:[...state.basket, action.item]
                }
            }else{
                let indic = state.basket.findIndex(item => item.idproduct === action.item.idproduct);
                if(indic === -1){
                    return {
                        ...state,
                        basket:[...state.basket,action.item]
                    }
                }else{
                    return {
                        ...state,
                        basket:[...state.basket]
                    }
                }
            }   
        } 
        
        case 'REMOVE_ITEM':{
            let newProducts = state.basket.filter(item => item.idproduct !== action.id);
            return {
                ...state,
                basket:newProducts
                
            }
        } 
        case 'SET_USER':{
            return{
                ...state,
                client:action.client
            }
        }
        case 'UPDATE_UNITS':{
            state.basket = state.basket.map(item => {
                if(item.idproduct === action.id) item.cantidad = action.units
                return item
            });
            return{
                ...state,
                basket:[...state.basket],
                isModalVisible:true,
                modalContent:'Monto actualizado',
                modalIndex:action.index
            }
        }
        case 'THANKS_FOR_BUYING' : {
            return{
                ...state,
                modalForBuying:true,
                modalContent:"Compra realizada exitosamente!"
            }
        }

        case 'CLOSE_MODAL':{
            return {
                ...state,
                isModalVisible:false,
                modalForBuying:false,
                modalContent:''
            }
        }
    
        default: return state;
            
    }
}


export default reducer;