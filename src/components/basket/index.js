import React, { useState,useEffect } from "react";
import { MainWrapper,BottomBlock,PriceWrapper,WrapperText } from "./index.styles";
import { useSelector,useDispatch } from "react-redux";
import { BasketItem } from "../basket-item";
import { removeItem } from "../../redux/basket/basketSlice";
import { Button } from "../button";
import { ModalWindow } from "../modal-window";
import { clearBasket } from "../../redux/basket/basketSlice";




export const Basket = () =>{
    const [isOpenModal,setIsOpenModal] = useState(false);
        
    const basketItems = useSelector(state => state.basket.items)
    const total =useSelector(state =>state.basket.totalPrice);
    const dispatch = useDispatch();

    const handleOpenModal = ()=>{  
        if(basketItems.length !== 0){
            setIsOpenModal(true);
        }
        console.log('open',isOpenModal)      
        
    }

    const handleCloseModal =()=>{
        console.log('false',isOpenModal)      
        setIsOpenModal(false);
        dispatch(clearBasket())
    }

    const handleClick =(i)=>{
        dispatch(removeItem(i))
    }
    
    useEffect (()=>{
        if(isOpenModal){
            setTimeout(()=>handleCloseModal(),3000)
        }
    },[isOpenModal])
   

return(
    <>  {
        !isOpenModal ?(
            <MainWrapper> 
            {basketItems.length === 0 ? (
                <WrapperText> Корзина пуста</WrapperText>
            ):(
                <>
                    {basketItems.map((item, index )=>(
                        <BasketItem
                            number ={index +1}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            categoty={item.category}
                            price={item.price}
                            onClickItem={()=>handleClick(item)}

                    />
                    ))}
                    <BottomBlock>
                        <Button view ='book'
                                onClick ={handleOpenModal}
                                >Заказать 
                        </Button>
                        <PriceWrapper>Всего:<p>{total}</p>$</PriceWrapper>            
                    </BottomBlock>
                </>
            )}            
            </MainWrapper>
            ):(               
                    <ModalWindow onClose={handleCloseModal}/>
                )}
        </>     
)
}





