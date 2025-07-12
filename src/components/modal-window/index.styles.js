import styled from "styled-components";



export const MainWrapper =styled.div`
position: absolute;
width: 500px;
top: 0px;
height:100px ;
/* margin: auto; */
font-size:20px;
font-weight:500;
display: flex;
justify-content: space-around;
background-color:rgb(230, 229, 229);
box-shadow: 8px 9px 13px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 9px 13px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 9px 13px -3px rgba(0,0,0,0.75);
border-radius: 10px 10px 0 0;

`

export const TextWrapper=styled.div`
    margin: auto;
    color: gray;
    & span{
        color:#ff5722;
        font-weight:800;
    }
`