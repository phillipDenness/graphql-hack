const Sequelize = require('sequelize')
const { sequelize } = require('./database');

const UserModel = require('./user')(sequelize, Sequelize);
const CarModel = require('./car')(sequelize, Sequelize);

const models = {
    User: UserModel,
    Car: CarModel
};

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models)
    }
})

module.exports = models;
