const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_voz', 'postgres', '2820', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});

const testConnection =async () => {


    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection ();
const db = {
    Sequelize,
    sequelize
}
module.exports = db;