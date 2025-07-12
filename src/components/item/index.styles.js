import styled from "styled-components";


export const MainWrapper =styled.div`
width:100%;
max-height: 500px;
text-align: center;

p{
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
h2{
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
`
export const WrapImage =styled.div`
/* height:250px; */
  max-width: 100%;
  max-height: 100%;
/* width: 100%; */
overflow: hidden;
border-radius: 10px;
`

export const WrapRight=styled.div`
display: flex;
justify-content: space-around;
margin: 20px 0;
text-align: center;

span{
    font-size:20px ;
    font-weight: 400;
    text-align: center;
    margin: auto;
}
`
