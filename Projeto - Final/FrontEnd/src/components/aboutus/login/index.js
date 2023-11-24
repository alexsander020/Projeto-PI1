import { useState } from "react";
import Estilo from '../login/Estilo.css';
import { Link } from "react-router-dom";
import Axios from "axios";


function Login() {

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
    Axios.post("http://localhost:3002/login", {
      Email: values.Email,
      senha: values.senha,
      doador: values.doador,
    }).then((response) => {
      console.log(response.data);

      //Caso a resposta enviada seja true para sucesso, o usuário é redirecionado para uma página que guarda os valores do seu e-mail e o seu tipo de doador, para que a confirmação de dados seja feita
      if (response.data.successo){
        window.location.href = `/doacao/${values.Email}/${values.doador}`;
      }
    })
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          {/* <form className="login-form"> */}
            <span className="login-form-title"> Bem vindo </span>
            <br></br>
            <br></br>

            <div className="inputBox">

            <input
              type="radio"
              id="Individuo"
              name="doador"
              value="Individuo"
              required
              onChange={handleChangeValues}
            />
            <label htmlFor="Individuo" style={{ color: 'white', paddingLeft: '10px' } }>Individuo <i className="fa-solid fa-venus">
            </i></label><br />

            <input
              type="radio"
              id="Empresa"
              name="doador"
              value="Empresa"
              required
              onChange={handleChangeValues}
            />
            <label htmlFor="Empresa" style={{ color: 'white', paddingLeft: '10px', paddingTop: '10px' }}>Empresa <i className="fa-solid fa-mars">
            </i></label><br />
          </div>
          <br /><br />

            <span className="login-form-title">
              {/* <img src={jpIMG} alt="Jovem Programador" /> */}
            </span>

            <div className="wrap-input">
              <input
                type="text"
                name="Email"
                id="Email"
                className={email !== "" ? "has-val input" : "input"}
                required
                onChange={handleChangeValues}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                type="password"
                name="senha"
                id="senha"
                className={password !== "" ? "has-val input" : "input"}
                required
                onChange={handleChangeValues}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={() => handleClickButton()}>Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link className="txt2" to="/signup">
                Criar conta
              </Link>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
export default Login;