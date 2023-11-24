import React from 'react';
import styled from 'styled-components';
import Pix from '../../../assets/images/Pix_chefAprendiz.png';
import '../doeAqui/style.css';

const DoeAquiDiv = styled.div` 
  background-color: #6B1C4B;
  display: flex;
  margin-top: 5%;
  padding-bottom: 10%;
  padding-left: 10%;
  padding-right: 10%;
`
const DoeAquiDivdois = styled.div`
  margin-top: 5%;
  
`
const TextDoe = styled.p`
  display: flex;
  color: #F4AC54;
  justify-content: center;
  margin: 6% 15%;
  font-size: 30px;
  font-family: 'Kaushan Script', cursive;
  font-family: 'Outfit', sans-serif;
  @media (max-width: 768px){
    font-size: 15px;
}
`

const TituloDoe = styled.h1`
  padding-top: 0%;
  display: flex;
  color: #F4AC54;
  font-size: 65px;
  font-family: 'Kaushan Script', cursive;
  @media (max-width: 768px){
    font-size: 30px;
}
`
const ImgPix = styled.img`
  width: 100px;
  display: flex;
  justify-content: center;
  margin: 15% 30%;
  height: 100px;
`

const PixSection = styled.section`
  display: flex; 
  justify-content: center;
`

const Caixa = styled.div`
  border-color: #F5AC55;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`
const CaixaDoe = styled.p`
  text-align: center;
  color: #6B1C4B;
  font-family: "Lato", Sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3em;
  font-family: 'Kaushan Script', cursive;
  font-family: 'Outfit', sans-serif;
`
const TextoCaixaDoe = styled.p`
  text-align: center;
  color: #6B1C4B;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3em; 
  font-family: 'Kaushan Script', cursive;
  font-family: 'Outfit', sans-serif;
  text-align: center;
`

function DoeAqui() {
  return (
    <DoeAquiDiv>
      <DoeAquiDivdois>
        <TituloDoe> Como doar?</TituloDoe>

        <TextDoe>Acesso o aplicativo do seu banco e clique em “pegar QR Code”. É só escanear que você será direcionado a próxima etapa da transferência. Caso esteja no celular, é só copiar o código disponível abaixo e colar na categoria “Pix Copia e Cola”.</TextDoe>
        <PixSection>
          <Caixa className='boxdoi' >
            <CaixaDoe> – CHAVE PIX –</CaixaDoe>
            <TextoCaixaDoe>financeiro@chefaprediz.com.br</TextoCaixaDoe>
            <CaixaDoe>ou</CaixaDoe>
            <TextoCaixaDoe>28.098.823/0001-10</TextoCaixaDoe>
            <ImgPix src={Pix}></ImgPix>
          </Caixa>
        </PixSection>
        

      </DoeAquiDivdois>

    </DoeAquiDiv>
  );

}

export default DoeAqui;






// function CaixaPix () {
//   return (
//     <Pixdiv>
//       <PixSection>
//         <Caixa className='box' >
//           <CaixaDoe> –chave pix–</CaixaDoe>
//           <TextoCaixaDoe>financeiro@chefaprediz.com.br</TextoCaixaDoe>
//           <CaixaDoe>ou</CaixaDoe>
//           <TextoCaixaDoe>28.098.823/0001-10</TextoCaixaDoe>
//         </Caixa>
//       </PixSection>
//     </Pixdiv>
//   );
// };