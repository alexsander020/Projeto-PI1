import styled from 'styled-components'
import Img01 from '../../../assets/images/Almanara.png'
import Img02 from '../../../assets/images/ConfeitariaC.png'
import Img03 from '../../../assets/images/CSA.png'
import Img04 from '../../../assets/images/Dengo.png'
import Img05 from '../../../assets/images/Eggy.png'
import Img06 from '../../../assets/images/GrupoRaízes.png'
import Img07 from '../../../assets/images/Gumi Lab.png'
import Img08 from '../../../assets/images/Hotel Emiliano.png'
import Img09 from '../../../assets/images/Hotel Grand Hyatt.png'
import Img10 from '../../../assets/images/La Cura.png'
import Img11 from '../../../assets/images/Mica Chocolates.png'
import Img12 from '../../../assets/images/Ofner.png'
import Img13 from '../../../assets/images/Palácio Tangará.png'
import Img14 from '../../../assets/images/PatiPiva.png'
import Img15 from '../../../assets/images/Pato Rei.png'
import Img16 from '../../../assets/images/Tartuferia San Paolo.png'
import SetaIda from "../../../assets/images/SetaIda.png"
import SetaVolta from "../../../assets/images/SetaVolta.png"

import React, { useState } from 'react';


const Titulo = styled.h1`
    color: #F5AC55;
    font-family: 'Kaushan Script', cursive;
    font-size: 60px;
    padding-bottom: 25px;
    padding-top: 5%;
    @media (max-width: 768px){
      font-size: 40px;
      text-align: center;
    }
`

const ContainerGeral = styled.div`
    padding: 2% 8%;
    background-color: #6B1C4B;
    padding-bottom: 15%;
`

const Container = styled.div`
    background-color: #6B1C4B;
    padding: 0 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px){
      padding: 0;
      justify-content: center;
      align-items: center;
    }
`

const ImagensParcerias = styled.ul`
    display: flex;
    align-items: left;
    @media (max-width: 768px){
      width: 10px;
    }
`
const Imagem = styled.li`
    display: flex;
    width: 250px;
    justify-content: left;
    margin-left: 15px;
    @media (max-width: 768px){
      width: 100%;
      justify-content: center;
      margin: 0;
    }
`

const BotaoVolta = styled.button`
    display: flex;
    height: 20px;
    border: none;
    background: none;
`

const BotaoIda = styled.button`
    display: flex;
    height: 20px;
    border: none;
    background: none;
`

const Setas = styled.img`
    width: 50%;
    display: flex;
    margin-left: 50%;
    @media (max-width: 768px){
      width: 10%;
      justify-content: center;
      margin: 0 auto;
    }
`

const imagensParceiros = [Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08, Img09, Img10, Img11, Img12, Img13, Img14, Img15, Img16]

function Parcerias() {
    const [indiceImagem, setIndiceImagem] = useState(0);
    const [indiceImagem1] = useState(0);

    const avancarImagem = () => {
      setIndiceImagem((indiceImagem + 1) % imagensParceiros.length);

        if(imagensParceiros.length >= imagensParceiros.maxlength){
            
        }
    };
  
    const retrocederImagem = () => {
      setIndiceImagem((indiceImagem - 1 + imagensParceiros.length) % imagensParceiros.length);
    };
  
    return (
      <ContainerGeral>
        <Titulo>Parcerias:</Titulo>
        <Container>
          <BotaoVolta onClick={retrocederImagem}><Setas src={SetaVolta}></Setas></BotaoVolta>
          <ImagensParcerias >
            <Imagem>
              <img src={imagensParceiros[indiceImagem]}/>
            </Imagem>
            <Imagem>
              <img src={imagensParceiros[indiceImagem + 1]}/>
            </Imagem>
            <Imagem>
              <img src={imagensParceiros[indiceImagem + 2]}/>
            </Imagem>
          </ImagensParcerias>
          <BotaoIda onClick={avancarImagem}><Setas src={SetaIda}></Setas></BotaoIda>
        </Container>
      </ContainerGeral>
    );
  }
  
  export default Parcerias;