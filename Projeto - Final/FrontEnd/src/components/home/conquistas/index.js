import styled from 'styled-components'

const Container = styled.div`
    background-color: #F5AC55;
    padding: 8% 8% 3% 8%;
`

const Titulo = styled.h1`
    color: #6B1C4B;
    font-family: 'Kaushan Script', cursive;
    font-size: 60px;
    padding-bottom: 25px;
    @media (max-width: 768px){
        font-size: 40px;
        text-align: center;
    }
`

const SubTitulo1 = styled.h3`
    color: #6B1C4B;
    font-family: 'Kaushan Script', cursive;
    font-size: 60px;
    @media (max-width: 768px){
        font-size: 35px;
        text-align: center;
    }
`

const SubTitulo2 = styled.h3`
    padding-top: 15px;
    padding-left: 23%;
    color: #6B1C4B;
    font-family: 'Kaushan Script', cursive;
    font-size: 60px;
    @media (max-width: 768px){
        font-size: 35px;
        text-align: center;
        padding-left: 0;
    }
`

const SubTitulo3 = styled.h3`
    padding-top: 15px;
    padding-left: 46%;
    color: #6B1C4B;
    font-family: 'Kaushan Script', cursive;
    font-size: 60px;
    @media (max-width: 768px){
        font-size: 35px;
        text-align: center;
        padding-left: 0;
    }
`

const SubTitulo4 = styled.h3`
    padding-top: 15px; 
    padding-left: 70%;
    color: #6B1C4B;
    font-family: 'Kaushan Script', cursive;
    font-size: 60px;
    @media (max-width: 768px){
        font-size: 35px;
        text-align: center;
        padding-left: 0;
    }
`

const P1 = styled.p`
    color: #FFF;
    font-family: 'Kaushan Script', cursive;
    font-size: 30px;
    @media (max-width: 768px){
        font-size: 20px;
        text-align: center;
        padding-left: 0;
    }
`

const P2 = styled.p`
    padding-left: 23%;
    color: #FFF;
    font-family: 'Kaushan Script', cursive;
    font-size: 30px;
    @media (max-width: 768px){
        font-size: 20px;
        text-align: center;
        padding-left: 0;
    }
`

const P3 = styled.p`
    padding-left: 46%;
    color: #FFF;
    font-family: 'Kaushan Script', cursive;
    font-size: 30px;
    @media (max-width: 768px){
        font-size: 20px;
        text-align: center;
        padding-left: 0;
    }
`

const P4 = styled.p`
    padding-left: 70%;
    color: #FFF;
    font-family: 'Kaushan Script', cursive;
    font-size: 30px;
    @media (max-width: 768px){
        font-size: 20px;
        text-align: center;
        padding-left: 0;
    }
`

function Conquistas(){
    return(
        <Container>
            <Titulo>O que nós conquistamos em 2021...</Titulo>
            <SubTitulo1>11</SubTitulo1>
            <P1>comunidades participantes</P1>
            <SubTitulo2>163</SubTitulo2>
            <P2>jovens participantes</P2>
            <SubTitulo3>68%</SubTitulo3>
            <P3>jovens empregados</P3>
            <SubTitulo4>700</SubTitulo4>
            <P4>pessoas impactadas</P4>
        </Container>
    )
}

export default Conquistas