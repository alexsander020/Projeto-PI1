import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'
import Foto1 from "../../home/Imagens/fotos1200x600/IMG01.png"
import Foto2 from "../../home/Imagens/fotos1200x600/IMG02.png"
import Foto3 from "../../home/Imagens/fotos1200x600/IMG03.png"

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    padding-top: 35px;
    justify-content: center;
`

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Imagem src={Foto1}/>
      </Carousel.Item>
      <Carousel.Item>
        <Imagem src={Foto2}/>
      </Carousel.Item>
      <Carousel.Item>
        <Imagem src={Foto3}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample
