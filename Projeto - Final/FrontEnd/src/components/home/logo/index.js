import logo from '../Imagens/Logo/YELLOW/yellow_full_logo.png'
import styled from 'styled-components'

const Imagem = styled.img`
    width: 120%;
    height: 120%;
    /* top, right, bottom, left */
    padding: 50px 0 0px 0px;
    margin-left: 38%;
    @media (max-width: 768px){
        gap: 0;
        padding-right: 25px;
        /* top, right, bottom, left */
        padding: 30px 0 0px 0px;
    }
`
const Link = styled.a`
    width: 20%;
    height: 20%;
`

function Logo(){
    return(
        <Link href="/"><Imagem src={logo}></Imagem></Link>
    )
}

export default Logo