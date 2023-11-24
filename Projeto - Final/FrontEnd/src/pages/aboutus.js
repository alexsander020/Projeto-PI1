import Corpo from '../components/aboutus/body';
import Carousel from '../components/aboutus/carousel';
import RodaPe from '../components/aboutus/footer';
import Icon from '../components/icon';
import Header from "../components/home/header";

import React from "react";
import styled from 'styled-components';
import { GlobalStyle } from "../assets/css/global";
import { Link } from 'react-router-dom';

import { GrBusinessService } from 'react-icons/gr';
import { GiHexagonalNut } from 'react-icons/gi';
import { TbHexagons } from 'react-icons/tb';
import { FaCoins } from "react-icons/fa";

const Flex = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`
const ImagensProjeto = styled.section`
  padding-right: 10%;
  padding-left: 10%;
`

const Funda = styled.section`
  color: #FFF;
`

function AboutUs() {
  return (
    <div>
      <Header />

      <section>
        <Corpo />
      </section>

      <ImagensProjeto>
        <Carousel />
      </ImagensProjeto>

      <footer>
        <RodaPe />

        <Flex>
          <Icon />
        </Flex>
      </footer>

      <GlobalStyle />
    </div>
  )
}

export default AboutUs