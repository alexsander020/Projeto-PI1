import styled from "styled-components";
import React from "react"



const Titulo = styled.h1`
    font-family: 'Kaushan Script', cursive;
    font-family: 'Outfit', sans-serif;
    color: #F5AC55;
    font-size: 60px;
    padding-top: 10%;
`

const Texto = styled.p`
    font-family: 'Kaushan Script', cursive;
    font-family: 'Outfit', sans-serif;
    color: #F5F5F5;
    font-size: 20px; 
`
const Frase = styled.h1`
    font-size: 40px;
    font-family: 'Kaushan Script', cursive;
    font-family: 'Outfit', sans-serif;
    color: #F5F5F5;
    text-align: center;
    justify-content: center;
    display: flex;
    padding-top: 10%;
`

function Corpo (){
    return(
        <div>
            <Titulo>Um pouco sobre nós:</Titulo>

            <Texto>O Chef Aprendiz é um projeto de desenvolvimento humano que usa a gastronomia como a principal ferramenta para capacitar jovens entre 17 a 20 anos em situação de vulnerabilidade social para que trabalhem em cozinhas de restaurantes e estabelecimentos parceiros (grande parte deles como um primeiro emprego). O projeto é itinerante e conta com o apoio de uma organização local para a realização das oficinas semanais ao longo de 6 meses. Os jovens vivenciam aulas teóricas e práticas sobre técnicas básicas de cozinha, história da gastronomia, alfabetização emocional, sustentabilidade, autodesenvolvimento e preparo para a vida e mercado de trabalho. As oficinas acontecem no contraturno escolar e contam com a participação de facilitadores e parceiros que compartilham seus conhecimentos com os participantes. Uma competição final a la Masterchef encerra o processo com chave de ouro e os jurados presentes oferecem vagas de empregos para os jovens que querem iniciar uma carreira como auxiliar de cozinha.</Texto>

            <Frase>Cozinhar é a arte de<br></br> expressar amor em forma de<br></br> sabores, nutrindo não <br></br> apenas o corpo, mas também <br></br> a alma.</Frase>

            <Titulo>Como viabilizamos financeiramente o projeto?</Titulo>

            <Texto>As cinco primeiras edições foram integralmente realizadas por meio de crowdfunding e também através de jantares beneficentes.
                <br></br><br></br>
            Na 6ª edição, a Comgás entrou com patrocínio via lei de incentivo (PROAC). Em 2020, o planejamento era para realizar três edições. Porém, com a pandemia, realizaremos duas, no Chuvisco e Itapevi.
            <br></br><br></br>
            Estamos crescendo e organizando nossas frentes de atuação. Se você quiser fazer uma doação, temos algumas opções:
            </Texto>
        </div>
    )
}

export default Corpo 