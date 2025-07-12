import React from "react";
import { MainWrapper,WrapImage,WrapRight } from "./index.styles";
import {Image}from "../image";
import { Button } from "../button";



export const Item =({id,title,description,price,image,onClickItem})=>{
    
    
    return(
        <MainWrapper >
            <WrapImage>
                    <Image img={image}/>
            </WrapImage>
            <h2>{title}</h2>
            <p> {description} </p>
            <WrapRight>
                <span>{price}$</span>
                <Button view='add' 
                        onClick={(e)=>{
                            e.stopPropagation();
                            onClickItem(e,id);
                            }}>
                    +
                </Button>
            </WrapRight>    
        </MainWrapper>
    )
}