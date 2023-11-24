import React from 'react';
import styled from 'styled-components';
import './style.css';
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineMan } from "react-icons/ai";
import { AiOutlineWoman } from "react-icons/ai";

const Casdastrar = styled.div`
  padding-left: 10%;
  background-color: #F4AC54;
  padding-top: 5%;
  margin-bottom: 15%;
`

const Tituloum = styled.h1`
  color: #6C1C4C;
  font-size: 50px;
  margin-bottom: 5%;
  font-family: 'Kaushan Script', cursive;
  @media (max-width: 768px){
    font-size: 25px;
}
`
const Buttons = styled.button`
  background-color: #6C1C4C;
  color: white;
  margin-left: 25%;
  padding: 1% 2%;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  &:hover {
    background-color: #5b1b3b;
  }
  font-family: 'Kaushan Script', cursive;
  font-family: 'Outfit', sans-serif;
  border: none;
  margin-bottom: 5%;
  @media (max-width: 768px){
    font-size: 13px;
}
`


function Cadastro() {
  return (
    <Casdastrar>
      <Tituloum>Doe diretamente pelo site</Tituloum>
      <Link to="/login" ><Buttons>Login</Buttons></Link>
      <Link to="/signup"><Buttons>Cadastrar</Buttons></Link>
    </Casdastrar>
  );
};

export default Cadastro;

