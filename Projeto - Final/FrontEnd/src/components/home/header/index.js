import Logo from '../logo'
import OpcoesHeader from '../opcoesheader'
import styled from 'styled-components'

const ContainerHeader = styled.div`
    display: flex;
    background-color: #6B1C4B;
    justify-content: space-between;
`


function Header(){
    return(
        <ContainerHeader >
            <Logo></Logo>
            <OpcoesHeader/>
        </ContainerHeader>
    )
}

export default Header