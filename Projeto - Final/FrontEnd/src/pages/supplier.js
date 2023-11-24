import Hexagon from "../components/aboutus/hexagon"
import React from "react"
import { GlobalStyle } from "../assets/css/global";
import RodaPe from "../components/aboutus/footer";
import Icon from "../components/icon";
import Header from "../components/home/header";



function Supplier(){
    return(
        <div>
            <Header/>
            <Hexagon/>  
            <RodaPe/>
            <Icon/>
            <GlobalStyle/>
        </div>

    )
}

export default Supplier; 