import { Link } from "react-router-dom";
import styled from "styled-components";




export const MainWrapper = styled.header`
width:100%;
margin: 50px auto;
 position: relative;
`


export const WrapLogo = styled.div`
padding: 0 40px;

`

export const Logo = styled.span`
font-weight: 600;
font-size: 20px;
`


export const WrapList = styled.nav`
float: right;
list-style: none;
`

export const Element = styled(Link)`
display: inline;
margin-left: 25px;
cursor: pointer;
transition: opacity 500ms ease;

&:hover{
    opacity: 0.5;
}
`

export const WrapIcon=styled.div`
float: right;
cursor: pointer;
margin-left: 20px;
display: flex;

& > svg {
    transition: all 0.3s ease;
    color: inherit;
    margin-right: 10px;
    
    &:hover, 
    &.active{
    color:#ff5722;
     transform: scale(1.5)      
    }    
}

`



export const Block =styled.div`
position: absolute;
top: 30px;
right: 0;
width: 500px;
background: #fafafa;
min-height: 50px;
box-shadow: 8px 9px 13px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 9px 13px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 9px 13px -3px rgba(0,0,0,0.75);
z-index: 1000;
`


export const WrapBanner = styled.div`
max-width: 100%;
height: 400px;
margin: 50px auto;
`

export const ImageStyle = styled.div`
height: 100%;
background: url('./image/5.jpg') no-repeat 50% 50%;
background-size: cover;
background-blend-mode: multiply;
background-color: #bcbcbc;
position: relative;
border-radius: 10px;

&:after{
    content: 'Лучшие товары для вашего дома';
    position: absolute;
    color:#fff;
    font-weight: 600;
    font-size: 40px;
    top: 100px;
    left: 50px;
    width: 300px;
}

&:before{
    content: 'по низким ценам';
    position: absolute;
    color:#fff;
    font-weight: 300;
    font-size: 15px;
    top: 250px;
    left: 50px;
    width: 300px;
}
`






