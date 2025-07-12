import styled from "styled-components";

export const MainWrapper = styled.div`
background-color:white;
width:100%;
height:50px;
display: flex;
justify-content: space-between;
border-bottom:5px solid rgb(207, 202, 202) ;
font-size: 20px;
font-weight:600;
color: gray;

& > svg {
    transition: all 0.3s ease;
    color: grey;
    width: 30px;
    height: 30px;
    margin: auto 10px;
    
    &:hover{
    color:#ff5722;
    transform: scale(1.5)      
    }
}
`

export const ImageWrapper = styled.div`
width:45px; 
height:50px;
margin: 0 5px;
`

export const TitleWrapper =styled.div`
width: 65%;
text-align: center;
padding: 10px;
margin: auto;
`

export const PriceWrapper =styled.div`
width: 15%;
margin: auto;
`
export const NumberWrapper =styled.div`
width:20px;
text-align: center;
margin: auto;
`