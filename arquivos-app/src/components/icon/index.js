import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi'
import { BsFacebook } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  justify-content: center;
`

function Icon (){
    return(
      <Icons>
        <a href="https://www.instagram.com/chefaprendiz/" target="_blank" rel="noopener noreferrer">
        <BiLogoInstagram  
          size = {70} 
          style={{
            color: '#FFF', 
            padding: "12px",
          }}
        />
      </a>
      
      <a href="https://www.youtube.com/@chefaprendiz1287" target="_blank" rel="noopener noreferrer">
        <GrYoutube  
        size = {70} 
        style={{
            color:'#FFF', 
            padding:'15px',
            }
          }
        />
      </a>

      <a href="https://www.facebook.com/projetochefaprendiz/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
        <BsFacebook  
        size = {70} 
        style={{
            color:'#FFF', 
            padding: '15px', 
            }
          }
        />
      </a>
      </Icons>
    )
}
export default Icon


