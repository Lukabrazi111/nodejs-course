const {Sequelize: Database} = require('sequelize');

const sequelize = new Database('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;