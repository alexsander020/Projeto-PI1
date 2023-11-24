import styled from 'styled-components'

const Container = styled.div`
    background-color: #6B1C4B;
    padding: 8% 10%;
`

const Titulo = styled.h1`
    color: #F5AC55;
    font-family: 'Kaushan Script', cursive;
    font-size: 85px;
    @media (max-width: 768px){
        font-size: 40px;
        text-align: center;
    }
`

const Texto = styled.p`
    font-family: 'Kaushan Script', cursive;
    font-family: 'Outfit', sans-serif;
    color: #FFF;
    font-size: 24px;
    padding-top: 3%;
    padding-bottom: 2%;
    @media (max-width: 768px){
        font-size: 15px;
        text-align: center;
    }
`

const Video = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2%;
    @media (max-width: 768px){
        height: 50%;
    }
`

function SobreNos() {
    return (
        <Container>
            <Titulo>Um pouco sobre nós:</Titulo>
            <Texto>O Chef Aprendiz é um projeto de desenvolvimento humano que usa a gastronomia como a principal ferramenta para capacitar jovens entre 17 a 20 anos em situação de vulnerabilidade social para que trabalhem em cozinhas de restaurantes e estabelecimentos parceiros (grande parte deles como um primeiro emprego).</Texto>
            <Video>
                <iframe width="760" height="427.5" src="https://www.youtube.com/embed/siDOayPVV9k?si=sdVvJKk4FW-6wjiE&amp;start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Video>
        </Container>
    )
}

export default SobreNos