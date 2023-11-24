import React from 'react';
import styled from 'styled-components';

const Transpar = styled.div`
  display: flex;
  margin-top: 5%;
  padding-top: 5%;
  padding-bottom: 10%;
  background-color: #F4AC54;
`
const Balanco = styled.div`
  background-color: #F4AC54;
  width: 100vw;
  height: 100%;
  justify-contet: center;
`
const Titulo1 = styled.h1`
  color: #6C1C4C;
  font-size: 65px;
  padding-left: 10%;
  font-family: 'Kaushan Script', cursive;
  @media (max-width: 768px){
    font-size: 40px;
}
`

const Titulo2 = styled.h2`
  display: flex;
  justify-content: center;
  color: #6C1C4C;
  font-size: 65px;
  margin-top: 5%;
  font-family: 'Kaushan Script', cursive;
  @media (max-width: 768px){
    font-size: 40px;
}
`

const TransSection = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  margin-left: 5%;
`
const Linker = styled.a`
  text-decoration: none;
  color:#F4AC54;
  &: hover {
    text-decoration: none;
  }
  background-color: #6C1C4C;
  border-radius: 50%;
  margin-right: 100px;
  padding: 8px;
  padding-right: 12px;
  font-family: 'Kaushan Script', cursive;
  justify-content: center;
  margin-top: 5%;
  @media (max-width: 768px){
    padding: 5px;
    font-size: 12px;
    padding-right: 5px;
    margin-right: 50px;
}
`

function Transparencia() {
  return (
    <Transpar>
      <Balanco>
        <Titulo1>Transparencia</Titulo1>
        <Titulo2>- Balanço Patrimonial -</Titulo2>
        <TransSection>
          <Linker href="http://www.chefaprendiz.com.br/wp-content/uploads/2022/04/BALANCO-PATRIMONIAL-2019.pdf">2019</Linker>
          <Linker href="http://www.chefaprendiz.com.br/wp-content/uploads/2022/04/BALANCO-PATRIMONIAL-2020.pdf">2020</Linker>
          <Linker href="http://www.chefaprendiz.com.br/wp-content/uploads/2022/04/BALANCO-PATRIMONIAL-2021.pdf">2021</Linker>
          <Linker href="#">2022</Linker>
          <Linker href="#">2023</Linker>
          <Linker href="#">2024</Linker>
        </TransSection>
      </Balanco>
    </Transpar>

  );
}

export default Transparencia;
