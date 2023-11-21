import styled from "styled-components";
import React from "react"


const DivRodaPe = styled.hr`
    display: flex;
    justify-self: center;
    border-top: 4px solid #F5AC55;
    margin-left: 47%;
    margin-right: 47%;
    opacity: 200%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
`
const FraseRodaPe = styled.h1`
    font-size: 60px;
    font-family: 'Kaushan Script', cursive;
    font-family: 'Outfit', sans-serif;
    color: #F5AC55;
    text-align: center;
`

function RodaPe(){
    return(
        <div>
            <DivRodaPe/>

            <FraseRodaPe>
                bora mudar
                <br></br>
             essa realidade
             <br></br> 
             JUNTOS?
            </FraseRodaPe>
            
            <DivRodaPe/>
        </div>
    )
}

export default RodaPe