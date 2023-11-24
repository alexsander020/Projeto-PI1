import styled from "styled-components";
import React from "react"


const DivRodaPe = styled.hr`
    display: flex;
    justify-self: center;
    border-top: 4px solid #F5AC55;
    margin-left: 47%;
    margin-right: 47%;
    opacity: 200%;
`
const FraseRodaPe = styled.h1`
    font-size: 80px;
    font-family: 'Kaushan Script', cursive;
    color: #F5AC55;
    text-align: center;
    padding-bottom: 20px;
    color: #fff;
    @media (max-width: 768px){
        font-size: 40px;
    
    }
`

const DireitosReservados = styled.p`
    font-size: 15px;
    font-family: 'Kaushan Script', cursive;
    font-family: 'Outfit', sans-serif;
    color: #F5AC55;
    text-align: center;
    color: #fff;
    padding-top: 5%;
    @media (max-width: 768px){
        font-size: 8px;
    }
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
            <DireitosReservados>Chef Aprendiz 2023 - todos os direitos reservados.</DireitosReservados>
        </div>
    )
}

export default RodaPe