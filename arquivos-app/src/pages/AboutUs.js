import Corpo from '../components/body';
import Carousel from '../components/carousel';
import RodaPe from '../components/footer';
import Icon from '../components/icon';
import React from "react";
import Bibia from "../components/chatboot/chat";
import styled from 'styled-components';
import { GlobalStyle } from "../assets/css/global";
import { Link } from 'react-router-dom';
import { GrBusinessService } from 'react-icons/gr';
import { GiHexagonalNut } from 'react-icons/gi';
import { TbHexagons } from 'react-icons/tb';




const Funda = styled.style`
  color: #FFF;
  padding: "5px";
  display: flex;
  justify-content: center;
`

function AboutUs() {
  return (
    <div>

      <section>
        <Corpo/>
      </section>

      <footer>
        <Carousel/>
        <RodaPe/>
        <Icon/>

        <Link to="/Supplier">
          <Funda>
            <TbHexagons size={50}/>
          </Funda>
        </Link>
        <Bibia></Bibia>
      </footer>

      <GlobalStyle />
    </div>
  )
}

export default AboutUs