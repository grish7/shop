import React, { useState,useEffect} from 'react'
import { WrapBanner,WrapLogo,Logo,MainWrapper,WrapIcon,ImageStyle,WrapList,Element,Block } from './index.styles'
import { FaShoppingCart } from "react-icons/fa";
import { Basket } from '../basket';
import { useSelector } from 'react-redux';
import bannerImage from '../../assets/image/5.jpg';
import { Image } from '../image';



export const Header=()=> {
  let [cartOpen,setCartOpen]= useState(false);
  const basketItems = useSelector(state => state.basket.items)
  const total =useSelector(state=>state.basket.totalItems)
  const handleCart =()=>{
    setCartOpen(cartOpen = !cartOpen)
  }


  useEffect (()=>{
          if(cartOpen && basketItems.length===0){
              setTimeout(()=>handleCart(),3000)
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
          {/* <Image img={bannerImage}/> */}
            <ImageStyle></ImageStyle>
        </WrapBanner>
    </MainWrapper>
  )
}
