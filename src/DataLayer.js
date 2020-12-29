//manejará el delivery de los estados
import  React, { useContext, useReducer} from 'react';

export const DataLayerContext = React.createContext();

export const DataLayer = ({initialState , reducer , children})=>(
    <DataLayerContext.Provider value={useReducer(reducer , initialState)} >
        {children}
    </DataLayerContext.Provider>
)

// lo que permite usar el contexto con las propiedades necesarias en cualquier otra parte
export const useDataLayerValue = ()=> useContext(DataLayerContext);