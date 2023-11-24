import React, { useState } from 'react';
import './style.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineMan } from "react-icons/ai";
import { AiOutlineWoman } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from "axios";
import { userValidationSchema } from '../../../validations/userValidation';
import Popup from '../../popup';
import styled from 'styled-components'

function Cadastro() {

  //Função que determina um objeto para setar e possibilita separar dado por dado do objeto
  const [values, setValues] = useState();

  //Função que permite pegar os dados diretamente dos inputs cada vez que ele é alterado
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));

  }

  //Função para enviar por meio de uma rota com a função POST do Axios os dados para o backend inserir no banco
  const handleClickButton = () => {
    Axios.post("http://localhost:3002/cadastro", {
      Nome: values.Nome,
      CPF: values.CPF,
      Enderoco: values.Enderoco,
      cidade: values.cidade,
      Estado: values.Estado,
      Telefone: values.Telefone,
      Email: values.Email,
      doador: values.doador,
      senha: values.senha,
    }).then((response) => {
      console.log(response);
      setBackendMessage(response.data.message);
      // alert(setBackendMessage)
      // openPopup();

      //Caso a resposta enviada seja true para sucesso, o usuário é redirecionado para a página de login
      if (response.data.success) {
        window.location.href = '/login';
      }
    })
  };

  const [showPopup, setShowPopup] = useState(false);
  const [backendMessage, setBackendMessage] = useState('');

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: yupResolver(userValidationSchema)
  // })

  // const onSubmit = data => {
  //   console.log(data);
  // }

  return (
    <div className="boxum">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <fieldset>
        <legend>
          <b>Formulário de Cadastro</b>
        </legend>
        <br />
        <div className="inputBox">
          <input
            type="text"
            name="Nome"
            id="Nome"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('Nome')}
          />
          <label htmlFor="Nome" className="labelInput">
            Nome Completo <i className="fa-solid fa-user"></i>
          </label>
          {/* <div>{errors.Nome?.message}</div> */}
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
          // {...register('doador')}
          />
          <label htmlFor="Individuo">Individuo <i className="fa-solid fa-venus">
          </i></label><br />

          <input
            type="radio"
            id="Empresa"
            name="doador"
            value="Empresa"
            required
            onChange={handleChangeValues}
          // {...register('doador')}
          />
          <label htmlFor="Empresa" >Empresa <i className="fa-solid fa-mars">
          </i></label><br />
          {/* <div>{errors.doador?.message}</div> */}
        </div>
        <br /><br />


        <div className="inputBox">
          <input
            type="CPF"
            name="CPF"
            id="CPF"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('CPF')}
          />
          <label htmlFor="CPF" className="labelInput">
            CPF ou CNPJ <i className="fa-solid fa-phone"></i>
          </label>
          {/* <div>{errors.CPF?.message}</div> */}
        </div>
        <br />

        <div className="inputBox">
          <input
            type="text"
            name="Enderoco"
            id="Enderoco"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('Enderoco')}
          />
          <label htmlFor="Enderoco" className="labelInput">Endereço</label>
          {/* <div>{errors.Enderoco?.message}</div> */}
        </div>
        <br /><br />

        <div className="inputBox">
          <input
            type="text"
            name="cidade"
            id="cidade"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('cidade')}
          />
          <label htmlFor="cidade" className="labelInput">Cidade</label>
          {/* <div>{errors.cidade?.message}</div> */}
        </div>
        <br /><br />

        <div className="inputBox">
          <input
            type="text"
            name="Estado"
            id="Estado"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('Estado')}
          />
          <label htmlFor="Estado" className="labelInput">Estado</label>
          {/* <div>{errors.Estado?.message}</div> */}
        </div>
        <br /><br />

        <div className="inputBox">
          <input
            type="tel"
            name="Telefone"
            id="Telefone"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('Telefone')}
          />
          <label htmlFor="Telefone" className="labelInput">
            Telefone <i className="fa-solid fa-phone">
              <BsFillTelephoneFill
                style={{
                  width: "16px",
                  height: "auto"
                }} /></i>
          </label>
          {/* <div>{errors.Telefone?.message}</div> */}
        </div>
        <br /> <br />

        <div className="inputBox">
          <input
            type="email"
            name="Email"
            id="Email"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('Email')}
          />
          <label htmlFor="Email" className="labelInput">
            E-mail <i className="fa-solid fa-envelope">
              <MdOutlineEmail
                style={{
                  width: "16px",
                  height: "auto"
                }} />
            </i>
          </label>
          {/* <div>{errors.Email?.message}</div> */}
        </div>
        <br /><br />

        <div className="inputBox">
          <input
            type="password"
            name="senha"
            id="senha"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('senha')}
          />
          <label htmlFor="Senha" className="labelInput">
            Senha <i className="fa-solid fa-envelope">

            </i>
          </label>
          {/* <div>{errors.senha?.message}</div> */}
        </div>
        <br /><br />

        <div className="inputBox">
          <input
            type="password"
            name="confirmarsenha"
            id="confirmarsenha"
            className="inputUser"
            required
            onChange={handleChangeValues}
          // {...register('ConfirmarSenha')}
          />
          <label htmlFor="ConfirmarSenha" className="labelInput">
            Confirmar Senha <i className="fa-solid fa-envelope">

            </i>
          </label>
          {/* <div>{errors.ConfirmarSenha?.message}</div> */}
        </div>
        <br /><br />

        <button
          type="submit"
          name="submit"
          id="submit"
          className='submit-button'
          onClick={handleClickButton}>Enviar</button>

        <Popup
          isOpen={showPopup}
          onClose={closePopup}
          message={backendMessage}
        />
      </fieldset>
      {/* </form> */}
    </div>
  );
}

export default Cadastro;
