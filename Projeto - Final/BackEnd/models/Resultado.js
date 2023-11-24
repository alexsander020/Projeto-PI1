const db = require('./db')

const Resultado = db.sequelize.define('Resultado', {
    Total: {
      type: db.Sequelize.DOUBLE(10, 2)
    }
});

module.exports = Resultado;