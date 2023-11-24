import styled from 'styled-components'
import Axios from "axios";
import React, { useState, useEffect } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import Header from '../../components/home/header'

const Formulariodedoacao = styled.div`

    /* top, right, bottom, left */
    padding: 5% 5% 5% 5%;
    
`

const Titulo = styled.legend`
    background-color: #6B1C4B;
    border: none;
    color: #F5AC55;
`

function ConfirmacaoeDoacao() {

    //Função que coloeta por um objeto os dados do usuário que vem da tela passada
    const [dadosUsuario, setdadosUsuario] = useState(null);

    //Função que determina um objeto para setar e possibilita separar dado por dado do objeto
    const [values, setValues] = useState(null);

    //Função que permite pegar os dados diretamente dos inputs cada vez que ele é alterado
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
        console.log(dadosUsuario)
    }

    //Função para enviar por meio de uma rota com a função POST do Axios os dados para o backend inserir no banco
    const handleClickButton = () => {
        Axios.post("http://localhost:3002/finalizardoacao", {
            cpf: values.cpf,
            doador: values.doador,
            Valor: values.Valor,
        }).then((response) => {
            console.log(response.data);
            if (response.data.success) {
                alert(setBackendMessage)
                openPopup();
                window.location.href = '/about';
            }
        })
    };


    const { Email } = useParams();
    const { doador } = useParams();

    //Ação de pegar os dados que vêm da função .GET do backend e setar os dados do usuário para que depois eles sejam separados em objetos e sejam atribuidos nos campos de input do formulário
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get(`http://localhost:3002/doacao/${Email}/${doador}`);
                setdadosUsuario(response.data);
                setValues(response.data)
            } catch (error) {
                console.error("Erro aos buscar dados: ", error)
            }

        };
        fetchData();
        console.log(values)
    }, [Email]);



    return (
        <div>
            <Header></Header>
            <Formulariodedoacao>
                {dadosUsuario ?
                    (
                        <div className="confirmacao-dados">
                            {/* <form action=""> */}
                            <fieldset>
                                <Titulo>
                                    <b>Confirmação de Dados</b>
                                </Titulo>
                                <br />
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        name="Nome"
                                        id="Nome"
                                        className="inputUser"
                                        required
                                        value={dadosUsuario[0].Nome}
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="Nome" className="labelInput">
                                        Nome Completo <i className="fa-solid fa-user"></i>
                                    </label>
                                </div>
                                <br /><br />
                                <div className="inputBox">
                                    <p>Tipo de Doador:</p>

                                    <input
                                        type="radio"
                                        id="Individuo"
                                        name="doador"
                                        value="Individuo"
                                        required
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="Individuo" style={{ paddingLeft: '10px' }}>Individuo <i className="fa-solid fa-venus">
                                    </i></label><br />

                                    <input
                                        type="radio"
                                        id="Empresa"
                                        name="doador"
                                        value="Empresa"
                                        required
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="Empresa" style={{ paddingLeft: '10px' }}>Empresa <i className="fa-solid fa-mars">
                                    </i></label><br />
                                </div>
                                <br /><br />


                                <div className="inputBox">
                                    <input
                                        type="cpf"
                                        name="cpf"
                                        id="cpf"
                                        className="inputUser"
                                        required
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="CPF" className="labelInput">
                                        CPF ou CNPJ <i className="fa-solid fa-phone"></i>
                                    </label>
                                </div>
                                <br />

                                <div className="inputBox">
                                    <input
                                        type="text"
                                        name="Enderoco"
                                        id="Enderoco"
                                        value={dadosUsuario[0].Endereco}
                                        className="inputUser"
                                        required
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="Enderoco" className="labelInput">Endereço</label>
                                </div>
                                <br /><br />

                                <div className="inputBox">
                                    <input
                                        type="text"
                                        name="cidade"
                                        id="cidade"
                                        value={dadosUsuario[0].Cidade}
                                        className="inputUser"
                                        required
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="cidade" className="labelInput">Cidade</label>
                                </div>
                                <br /><br />

                                <div className="inputBox">
                                    <input
                                        type="text"
                                        name="Estado"
                                        id="Estado"
                                        value={dadosUsuario[0].Estado}
                                        className="inputUser"
                                        required
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="Estado" className="labelInput">Estado</label>
                                </div>
                                <br /><br />

                                <div className="inputBox">
                                    <input
                                        type="tel"
                                        name="Telefone"
                                        id="Telefone"
                                        value={dadosUsuario[0].Telefone}
                                        className="inputUser"
                                        required
                                        onChange={handleChangeValues}
                                    />
                                    <label htmlFor="Telefone" className="labelInput">
                                        Telefone <i className="fa-solid fa-phone">
                                            <BsFillTelephoneFill
                                                style={{
                                                    width: "16px",
                                                    height: "auto"
                                                }} /></i>
                                    </label>
                                </div>
                                <br /> <br />

                                <div className="inputBox">
                                    <input
                                        type="text"
                                        name="Email"
                                        id="Email"
                                        className="inputUser"
                                        value={dadosUsuario[0].Email}
                                        required
                                        onChange={handleChangeValues} />
                                    <label htmlFor="Email" className="labelInput">
                                        Email <i className="fa-solid fa-envelope">
                                            <MdOutlineEmail
                                                style={{
                                                    width: "16px",
                                                    height: "auto"
                                                }} />
                                        </i>
                                    </label>
                                </div>
                                <br /><br />
                            </fieldset>
                            {/* </form> */}
                        </div>
                    ) : (
                        <p>Carregando...</p>
                    )

                }
                <div className="dados-bancarios">
                    <form action="">
                        <fieldset>
                            <Titulo>
                                <b>Dados Bancários:</b>
                            </Titulo>
                            <br />

                            <div className="inputBox">
                                <p><strong>Tipo de Pagamento:</strong></p>

                                <input
                                    type="radio"
                                    id="Crédito"
                                    name="tipo-pagamento"
                                    value="Crédito"
                                    required
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="Crédito" style={{ paddingLeft: '10px' }}>Crédito <i className="fa-solid fa-venus">
                                </i></label><br />



                                <input
                                    type="radio"
                                    id="Débito"
                                    name="tipo-pagamento"
                                    value="Débito"
                                    required
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="Débito" style={{ paddingLeft: '10px' }}>Débito <i className="fa-solid fa-mars">
                                </i></label><br />

                                <input
                                    type="radio"
                                    id="BoletoBancário"
                                    name="tipo-pagamento"
                                    value="BoletoBancário"
                                    required
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="BoletoBancário" style={{ paddingLeft: '10px' }}>Boleto Bancário <i className="fa-solid fa-mars">
                                </i></label><br />
                                <br />
                            </div>

                            <div className="inputBox">
                                <p><strong>Bandeira do Cartão:</strong></p>

                                <input
                                    type="radio"
                                    id="MasterCard"
                                    name="bandeira-cartão"
                                    value="MasterCard"
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="MasterCard" style={{ paddingLeft: '10px' }}>MasterCard <i className="fa-solid fa-venus">
                                </i></label><br />

                                <input
                                    type="radio"
                                    id="Visa"
                                    name="bandeira-cartão"
                                    value="Visa"
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="Visa" style={{ paddingLeft: '10px' }}>Visa <i className="fa-solid fa-mars">
                                </i></label><br />

                                <input
                                    type="radio"
                                    id="elo"
                                    name="bandeira-cartão"
                                    value="elo"
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="elo" style={{ paddingLeft: '10px' }}>Elo <i className="fa-solid fa-mars">
                                </i></label><br />

                                <input
                                    type="radio"
                                    id="Hipercard"
                                    name="bandeira-cartão"
                                    value="Hipercard"
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="Hipercard" style={{ paddingLeft: '10px' }}>Hipercard <i className="fa-solid fa-mars">
                                </i></label><br />

                                <input
                                    type="radio"
                                    id="DinersClub"
                                    name="bandeira-cartão"
                                    value="DinersClub"
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="DinersClub" style={{ paddingLeft: '10px' }}>DinersClub <i className="fa-solid fa-mars">
                                </i></label><br />

                                <input
                                    type="radio"
                                    id="AmericanExpress"
                                    name="bandeira-cartão"
                                    value="AmericanExpress"
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="AmericanExpress" style={{ paddingLeft: '10px' }}>AmericanExpress <i className="fa-solid fa-mars">
                                </i></label><br />
                            </div>
                            <br /><br />

                            <div className="inputBox">
                                <input
                                    type="text"
                                    name="Valor"
                                    id="Valor"
                                    className="inputUser"
                                    required
                                    onChange={handleChangeValues}
                                />
                                <label htmlFor="Valor" className="labelInput">
                                    Valor da Doação <i className="fa-solid fa-user"></i>
                                </label>
                            </div>
                            <br /><br></br>

                            <button
                                type="submit"
                                name="submit"
                                id="submit"
                                onClick={() => handleClickButton()}>Finalizar Doação</button>
                        </fieldset>
                    </form>
                </div>
            </Formulariodedoacao>
        </div>
    )
};

export default ConfirmacaoeDoacao;