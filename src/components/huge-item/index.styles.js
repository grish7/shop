import styled from "styled-components";


export const MainWrapper=styled.div`
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); 
  z-index: 1000;

`

export const MainContent =styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color:white;
border-radius: 8px;
z-index: 1001;
width: 500px;
height: 500px;
& p{
  margin: 40px auto;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
}
`

export const ImageWrapper=styled.div`
width: 500px;
height: 490px;
margin: auto;

&:after{
    content: '${props=>props.text||''}';
    position: absolute;
    font-weight: 400;
    font-size: 30px;
    top: -50px;
    text-align: center;
    width: 100%;
}
`
