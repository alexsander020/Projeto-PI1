const db = require('./db')

const Individuo = db.sequelize.define('Individuo', {
    Nome: {
      type: db.Sequelize.STRING(100),
      allowNull: false
    },
    CPF: {
      type: db.Sequelize.INTEGER(20),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    Endereco: {
      type: db.Sequelize.STRING(200),
      allowNull: false
    },
    Cidade:{
      type: db.Sequelize.STRING(200),
    },
    Estado:{
      type: db.Sequelize.STRING(200),
    },
    Telefone: {
      type: db.Sequelize.INTEGER(20)
    },
    Email: {
      type: db.Sequelize.INTEGER(20)
    }
});

module.exports = Individuo;