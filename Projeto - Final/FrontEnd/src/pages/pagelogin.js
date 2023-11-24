import Login from "../components/aboutus/login";
import React from "react";
import { GlobalStyle } from "../assets/css/global"; 
import Header from '../components/home/header'

function Pagelogin(){
    return(
        <div>
            <Header></Header>
            <Login/>
            <GlobalStyle/>
        </div>
    )
}

export default Pagelogin;