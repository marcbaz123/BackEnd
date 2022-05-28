const { DataTypes } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');
const {sequelize} = require('../services/bd.service');

const VozModel = sequelize.define('portavoz', {
    // Model attributes are defined here
    id_voz: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contra: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },


},
    {
        // Other model options go here
    tableName: 'portavoz',
    timestamps: false
    });

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
module.exports = {
    VozModel
};