import styled from "styled-components";



export const MainWrapper =styled.div`
width:500px;
max-height: 500px;
top:0;
`
export const BottomBlock = styled.div`
width: 100%;
margin: auto;
height: 50px;
background-color:rgb(224, 223, 223);
display: flex;
justify-content: space-between;
`

export const PriceWrapper =styled.div`
margin:auto 0;
width: 180px;
font-size:20px;
font-weight:bold;
color:grey;
display: flex;
& p{
    color:#ff5722;
    margin-left: 10px;
}
`

export const WrapperText = styled.p`
width: inherit;
text-align:center;
color:#ff5722; 
font-weight: 500;
font-size: 20px;
width: inherit;
margin: 20px auto ;
`