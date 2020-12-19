//manejará el dispatch y state

export const initialState = {
    idCategory:1,
}


const reducer = (state , action)=>{
    console.log(action);
    switch (action.type) {
        case 'UPDATE_CATEGORY':
            return {
                ...state,
                idCategory:action.payload
            }
            
    
        default: return state;
            
    }
}


export default reducer;