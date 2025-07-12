import React from "react";
import { MainWrapper,ImageWrapper,TitleWrapper,PriceWrapper,NumberWrapper } from "./index.styles";
import { Image } from "../image";
import { MdDeleteForever } from "react-icons/md";



export const BasketItem = ({id,title,image,price,number,onClickItem}) =>{
    
    return(
      
        <MainWrapper key={id}>
            <NumberWrapper>
                {number}
                {id}
            </NumberWrapper> 
            <ImageWrapper>
                <Image img={image}/>
            </ImageWrapper>                   
            <TitleWrapper>{title}</TitleWrapper> 
            <PriceWrapper>{price} </PriceWrapper>  
            <MdDeleteForever 
                        onClick={()=>onClickItem(id)}
            ></MdDeleteForever>
        </MainWrapper>
        
    )
}