const express = require("express");
const app = express();
const mysql = require('mysql2')
const controller = new AbortController();


//Conexão com o Banco de Dados
const db = mysql.createConnection({
  host: '127.0.0.1',
  // port: 3306,
  user: 'root',
  database: 'Chef_Aprendiz_Final',
  password: '',
});

const cors = require("cors");

app.use(cors());
app.use(express.json());

//Ação de postar os dados no banco vindos da rota /cadastro do frontend
app.post("/cadastro", (req, res) => {
  const { Nome } = req.body;
  const { CPF } = req.body;
  const { Enderoco } = req.body;
  const { cidade } = req.body;
  const { Estado } = req.body;
  const { Telefone } = req.body;
  const { Email } = req.body;
  const { doador } = req.body;
  const { senha } = req.body;

//Pega a variável "Doador" vinda do FrontEnd e condiciona as inserções de dados no banco
  if (doador == "Individuo") {
    db.query("SELECT * FROM individuos WHERE Email = ?;", [Email],
      (err, result) => {
        if (err) {
          res.status(500).json({ success: false, message: err.message });
          console.log("erro1")
        }
        if (result.length == 0) {
          db.query("INSERT INTO individuos(Nome, CPF, Endereco, Cidade, Estado, Telefone, Email, senha) values (?, ?, ?, ?, ?, ?, ?, ?);",
            [Nome, CPF, Enderoco, cidade, Estado, Telefone, Email, senha], (err, result) => {
              if (err) {
                res.status(500).json({ success: false, message: err.message });
                console.log("erro2")
              } else {
                res.status(200).json({ success: true, message: "Cadastrado com Sucesso!" });
              }
            })
        }
        else {
          res.status(409).json({ success: false, message: "Usuário já cadastrado" });
          console.log("erro3")
        }
      })
  }

  if (doador == "Empresa") {
    db.query("SELECT * FROM empresas WHERE Email = ?", [Email],
      (err, resultado) => {
        if (err) {
          res.status(500).json({ success: false, message: err.message });
          console.log("erro1")
        }
        if (resultado.length == 0) {
          db.query("INSERT INTO empresas(Nome, CNPJ, Endereco, Cidade, Estado, Telefone, Email, senha) values (?, ?, ?, ?, ?, ?, ?, ?)",
            [Nome, CPF, Enderoco, cidade, Estado, Telefone, Email, senha], (err, resultado) => {
              if (err) {
                res.status(500).json({ success: false, message: err.message });
                console.log(err)
                console.log("erro2")
              }
              res.status(200).json({ success: true, message: "Cadastrado com Sucesso!" });
              console.log("Cadastrado com Sucesso!")
            })
        } else {
          res.status(409).json({ success: false, message: "Usuário já cadastrado" });
          console.log("erro3")
        }

      })
  }
});

//Ação de verificar os dados inseridos pelo usuário na tela de login, que manda uma variável booleana indicando se o login foi bem sucedido ou não
app.post("/login", (req, res) => {
  const { doador } = req.body;
  const { Email } = req.body;
  const { senha } = req.body;

  if (doador == "Individuo") {

    db.query("SELECT * FROM Individuos WHERE Email = ? AND senha = ?", [Email, senha],
      (err, result) => {
        if (err) {
          res.status(500).json({ successo: false, message: err.message });
          console.log(err);
        }
        if (result.length > 0) {
          res.status(200).json({ successo: true, message: "Usuário logado com sucesso!", });
          console.log("Usuário logado com sucesso! (individuo)");
        }
        else {
          res.status(200).json({ successo: true, message: "Conta não encontrada" });
          console.log("Conta não encontrada");
        }
        controller.abort();
      })

  }

  else if (doador == "Empresa") {
    db.query("SELECT * FROM Empresas WHERE email = ? AND senha = ?", [Email, senha],
      (err, result) => {
        if (err) {
          res.status(500).json({ successo: false, message: err.message });
        }
        if (result.length > 0) {
          res.status(200).json({ successo: true, message: "Usuário logado com sucesso!(empresa)" });
        }
        else {
          res.status(200).json({ successo: true, message: "Conta não encontrada" });
        }
      })
  }
});

//Rota responsável por pegar os dados armazenados na URL que vem da rota do frontend
app.get("/doacao/:Email/:doador", (req, res) => {
  const { cpf } = req.body;
  const { doador } = req.body;
  const { Valor } = req.body;

  if (req.params.doador == "Individuo") {

    db.query(`SELECT * FROM Individuos WHERE Email = ?`, [req.params.Email],
      (err, result) => {
        if (err) {
          res.status(500).json({ success: false, message: err.message });
          console.log(err)
        }
        if (result.length > 0) {
          res.send(result)
        }
        else {
          res.status(404).json({ success: false, message: "Usuário não encontrado" });
          console.log("Usuário não encontrado")
        }
      })

  }

  else if (req.params.doador == "Empresa") {

    db.query(`SELECT * FROM Empresas WHERE Email = ?`, [req.params.Email],
      (err, result) => {
        if (err) {
          res.status(500).json({ success: false, message: err.message });
          console.log(err)
        }
        if (result.length > 0) {
          res.send(result)
        } else {
          res.status(404).json({ success: false, message: "Usuário não encontrado" });
          console.log("Usuário não encontrado")
        }
      })

  }
});

//Abertura da porta 3002 para ser o host do servidor
app.listen(3002, () => {
  console.log("rodando servidor")
});

//Aqui, o backend recebe os dados do frontend para finalizar a doação e subi-la no banco de dados
app.post("/finalizardoacao", (req, res) => {
  const { cpf } = req.body;
  const { doador } = req.body;
  const { Valor } = req.body;

  // console.log(cpf)
  // console.log(doador)
  // console.log(Valor)

  if (doador == "Individuo") {

    db.query("INSERT INTO doacaos(ValorDoacao, CPF, TipoDoador) values (?, ?, ?)",
      [Valor, cpf, doador],
      (err, result) => {
        if (err) {
          res.status(500).json({ success: false, message: err.message });
          console.log(err);
        }
        else
        {res.status(200).json({ success: true, message: "Usuário logado com sucesso!", });
        console.log("Doação realizada com sucesso! (individuo)");}
      })

  }

  else if (doador == "Empresa") {
    db.query("INSERT INTO doacaos(ValorDoacao, CNPJ, TipoDoador) values (?, ?, ?)",
      [Valor, cpf, doador],
      (err, result) => {
        if (err) {
          res.status(500).json({ success: false, message: err.message });
          console.log(err);
        }

        res.status(200).json({ success: true, message: "Usuário logado com sucesso!", });
        console.log("Doação realizada com sucesso! (empresa)");
      })
  }
});

