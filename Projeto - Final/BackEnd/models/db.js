const Sequelize = require("sequelize");

const sequelize = new Sequelize('Chef_Aprendiz_Final', 'root', 'Dour@do01072004', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}