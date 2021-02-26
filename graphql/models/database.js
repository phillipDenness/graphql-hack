const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql', 'mysql', 'mysql', {
    dialect: 'mariadb',
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
}
