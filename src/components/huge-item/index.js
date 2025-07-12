import React from "react";
import { MainWrapper, ImageWrapper,MainContent } from "./index.styles";
import { useSelector } from "react-redux";
import { Image } from "../image";
import { Button } from "../button";
import { useDispatch } from "react-redux";
import { clearChosenItem } from "../../redux/basket/basketSlice";



export const HugeItem = ()=>{
    const element =useSelector(state =>state.basket.hugeItem);
    const dispatch = useDispatch();

    const handleClose =()=>{       
        dispatch(clearChosenItem())
    }
    
    return(
        <>       
            {
            element.length && element.map(item =>(
            <MainWrapper key={item.id}
                        onClick={handleClose}>
                <MainContent onClick ={(e) =>e.stopPropagation()}>
                    <ImageWrapper text={(item.title)}>
                        <Image img={item.image}/>
                    </ImageWrapper>
                    <p>{item.description}</p>
                    <Button view='close'
                            onClick={handleClose}>X</Button>
                </MainContent>               
            </MainWrapper>
            ))
            }
        </>
        
    )
}