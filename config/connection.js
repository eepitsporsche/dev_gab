//Node Modules
require('dotenv').config();

//Sequelize Import
const Sequelize = require('sequelize');

//Sequelize Environmental Variables
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
});

module.exports = sequelize;