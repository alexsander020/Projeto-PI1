const db = require('./db')

const Doacao = db.sequelize.define('Doacao', {
    ValorDoacao: {
      type: db.Sequelize.DOUBLE(10, 2),
      allowNull: false
    },
    TipoDoador: {
      type: db.Sequelize.STRING(20),
      allowNull: false
    },
    DataDoacao: {
      type: db.Sequelize.DATE,
      defaultValue: db.Sequelize.NOW
    },
    CPF: {
      type: db.Sequelize.INTEGER(20),
      references: {
        model: 'Individuos',
        key: 'CPF'
      }
    },
    CNPJ: {
      type: db.Sequelize.INTEGER(20),
      references: {
        model: 'Empresas',
        key: 'CNPJ'
      }
    }
})

module.exports = Doacao;