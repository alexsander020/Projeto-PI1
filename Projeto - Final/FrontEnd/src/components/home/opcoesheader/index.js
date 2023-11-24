import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Opcoes = styled.ul`
    margin-top: 50px;
    padding-right: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;
    list-style: none;
    gap: 50px;

    @media (max-width: 768px){
        gap: 0;
        padding-right: 25px;
        margin-top: 30px;
    }
`
const Opcao = styled.li`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 100%;
    min-width: 120px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-family: 'Kaushan Script', cursive;
    font-family: 'Outfit', sans-serif;
    @media (max-width: 768px){
        font-size: 10px;
    }
`

const DoeAqui = styled.button`
    font-size: 20px;
    height: 110px;
    width: 110px;
    cursor: pointer;
    color: #6B1C4B;
    background-color: #F5AC55;
    border-radius: 50%;
    font-family: 'Kaushan Script', cursive;
    align-self: center;
    border: none;
    @media (max-width: 768px){
        font-size: 10px;
        height: 60px;
        width: 60px;
    }
`

const textoOpcoes = ['Sobre Nós', 'Parcerias']

function OpcoesHeader() {
    const navigate = useNavigate();
    const headerOptions = [
        {
            id: 1,
            path: "/about",
            title: "Sobre Nós"
        },
        {
            id: 2,
            path: "/supplier",
            title: "Parcerias"
        }
    ];

    const handleRedirect = (path) => {
        navigate(path);
    }

    return (
        <Opcoes>
            {headerOptions.map((option) => (
                <Opcao key={option.id} onClick={() => handleRedirect(option.path)}><p>{option.title}</p></Opcao>
            ))}
            <DoeAqui onClick={() => handleRedirect("/donatehere")}>Doe<br />Aqui</DoeAqui>
        </Opcoes>
    )
}

export default OpcoesHeader;
