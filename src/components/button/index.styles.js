import styled from "styled-components";

const views = {
  create:`    
    width: 90px;
    height:35px;  
    color:#0B1629;     
  `,
  filter:`  
  color:gray; 
  font-weight:600;
  margin:auto 30px; 
 border-radius: 10px;
  `,
  delete:`
    width:40px;
    height:40x; 
    color:#ff5722;     
    `,
  add:`
    width:50px;
    height:30px;
    font-size:25px;
    color:#ff5722; 
  `,
  close:`
    max-width:100%;
    top:-40px; 
    right:-40px; 
    position:absolute; 
    color:white;
  ` ,
  book:`
    width:140px;
    height:40x;
    font-weight: 600;
    color:gray;         
    `,
  closeModal:`
  width: 40px;
  height:35px;
  margin:  auto;
  margin-right:20px;    
  font-size:20px;
  font-weight:700;
  color:gray;

  `,
  logout:`
  width: 120px;
  height:35px;   
  color:#fff; 
  text-shadow: 2px 2px 2px #122543;
  font-size:20px;
  `
}

export const WrapBtn = styled.div`
&{       
  margin:8px;
  text-align: center;
  font-size:20px;
  font-weight:400; 
  
  ${
    ({view = 'create'}) => views[view]
  } 
  
}


 &:hover {
      color: #ff5722;
      transform: scale(1.2);
      transition: all 0.5s ease; 
    }
    
    &.active {
      color: #ff5722;
    }


`

export const StyleButton = styled.button`
  width: 100%;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent; 
  cursor:pointer;



  &:disabled{
    color:grey;
    cursor:default;   
    
  }
  `


  
  
