const db = require('./db')

const Empresa = db.sequelize.define('Empresa', {
    CNPJ: {
      type: db.Sequelize.INTEGER(20),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    NomeEmpresa: {
      type: db.Sequelize.STRING(100),
      allowNull: false
    },
    EnderecoEmpresa: {
      type: db.Sequelize.STRING(200),
      allowNull: false
    },
    TelefoneEmpresa: {
      type: db.Sequelize.INTEGER(20)
    }
});

module.exports = Empresa;