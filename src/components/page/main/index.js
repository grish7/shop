import React from "react";
import { MainWrapper } from "./index.styles";
import { Header } from "../../header";
import { Footer } from "../../footer";
import { ItemList } from "../../item-list";
// import { ModalWindow } from "../../modal-window";
import { HugeItem } from "../../huge-item";
import { Outlet } from "react-router-dom";



export const MainPage = () => {

    return(
        <MainWrapper>            
            <Header/>
            <HugeItem/>
            <Outlet/>
            <Footer/>
        </MainWrapper>
    )
}