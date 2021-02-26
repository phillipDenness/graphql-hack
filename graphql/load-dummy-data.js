const { sequelize } = require('./models/database')
const models = require('./models')

const createData = async () => {
    await models.User.create({
        name: 'Boby',
        username: 'boby',
        password: 'test1',
        cars: [{
            make: 'Mercedes',
            model: 'A250',
            colour: 'Black'
        }]
    }, {
        include: [models.Car]
    });

    await models.User.create({
        name: 'Toby',
        username: 'toby',
        password: 'test1',
        cars: [{
            make: 'Audi',
            model: 'A4',
            colour: 'White'
        }]
    }, {
        include: [models.Car]
    });

    await models.User.create({
        name: 'Makky',
        username: 'makky',
        password: 'test1',
        cars: []
    }, {
        include: []
    });
}

sequelize.sync({force: true}).then(async () => {
    try {
        await createData();
        process.exit();
    } catch (error) {
        console.error(error);
    }
});
