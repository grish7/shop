import React from "react";
import { MainWrapper,TextWrapper } from "./index.styles";
import { useSelector } from "react-redux";
import { Button } from "../button";


export const ModalWindow =({onClose}) =>{    
    const total = useSelector(state =>state.basket.totalPrice)
  
    
    return(
        <MainWrapper>            
            <TextWrapper>
                <p>ваш заказ оформлен!</p>
                <p>сумма:<span>{' ' + total}</span>$</p>
            </TextWrapper>
            <Button view ='closeModal'
                    onClick= {onClose}
            >X</Button>   
        </MainWrapper>
    )
} 
















 // <>
        // {isOpen && (
        //     <MainWrapper>            
        //     <TextWrapper>
        //         <p>ваш заказ оформлен!</p>
        //         <p>сумма:{' ' + total}$</p>
        //     </TextWrapper>
        //     <Button view ='close'
        //             onClick ={onClose}>x</Button> 
        //             {children}  
        // </MainWrapper>
        // )}
        // </>