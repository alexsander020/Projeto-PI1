import Carousel from 'react-bootstrap/Carousel';
import { Imagens } from "./styles";
import React from "react";
import styled from 'styled-components'


import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 } from "../../../assets/images/imagesimagescarousel";

const Config = styled.div`
  margin-bottom: 10%;
`

function IndividualIntervalsExample() {
  return (
    <Config>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Imagens src={Img1} text="First slide" />
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Imagens src={Img2} text="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Imagens src={Img3} text="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Imagens src={Img4} text="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Imagens src={Img5} text="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Imagens src={Img6} text="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Imagens src={Img7} text="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Imagens src={Img8} text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Config>
  );
}

export default IndividualIntervalsExample