import React,{useEffect} from 'react'

export const Modal = ({modalContent, closeModal}) => {

    // useEffect(()=>{
    //     setTimeout(()=>{
    //     closeModal();
    //     },1500);
    // });
    return (
        <div className="updateMessage">
        <p>{modalContent}</p>
        </div>
    
    )
}

