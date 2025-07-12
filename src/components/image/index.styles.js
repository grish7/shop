import styled from "styled-components";


export const ImageStyle = styled.div`
    width:100%;
    background: url('${props => props.img}')  no-repeat 50% 50%;
    background-size: cover;
    transition: transform 500ms ease;
    border-radius: 10px;
    aspect-ratio: 1/1;
    &:hover{
        transform: scale(1.05);
    }
    `