import React, { useState,useEffect,useCallback} from 'react'
import { WrapBanner,WrapLogo,Logo,MainWrapper,WrapIcon,ImageStyle,WrapList,Element,Block } from './index.styles'
import { FaShoppingCart } from "react-icons/fa";
import { Basket } from '../basket';
import { useSelector } from 'react-redux';



export const Header=()=> {
  let [cartOpen,setCartOpen]= useState(false);
  const basketItems = useSelector(state => state.basket.items)
  const total =useSelector(state=>state.basket.totalItems)

  const handleCart = useCallback(()=>{
    setCartOpen(prev => !prev)
  },[])


  useEffect (()=>{
          if(cartOpen && basketItems.length===0){
            setTimeout(()=>setCartOpen(false),3000)
          }
      },[cartOpen,basketItems.length])

  return (
    <MainWrapper>
        <WrapLogo>
            <Logo>House staff</Logo>
            <WrapIcon >
              <FaShoppingCart 
                        onClick={()=>handleCart()}
                        className={cartOpen ? 'active':''}
                        />
                        <p>{total}</p>
            </WrapIcon>
            <WrapList>
                <Element to="/" > Главная</Element>
                <Element to="/about" >Про нас</Element>
                <Element to="/contacts" >Контакты</Element>
            </WrapList>
        </WrapLogo>
        {cartOpen &&(              
              <Block>
                <Basket/>                
              </Block>
            )}                 
        <WrapBanner>
            <ImageStyle></ImageStyle>
        </WrapBanner>
    </MainWrapper>
  )
}
