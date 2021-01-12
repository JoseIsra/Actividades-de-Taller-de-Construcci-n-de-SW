import React,{useEffect} from 'react'
import { useDataLayerValue } from '../../DataLayer'

export const Modal = ({modalContent, closeModal}) => {
    const [{isModalVisible , modalForBuying}] = useDataLayerValue();


    useEffect(()=>{
        setTimeout(()=>{
        closeModal();
        },1500);
    });
    return (
        <div className={isModalVisible ? "updateMessage":"endOfBuying"} >
        <p>{modalContent}</p>
        </div>
    
    )
}

