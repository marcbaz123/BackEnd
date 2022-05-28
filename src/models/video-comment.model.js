const { DataTypes } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');
const {sequelize} = require('../services/bd.service');

const VideoComment = sequelize.define('video_comment', {
    // Model attributes are defined here
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        // Other model options go here
        tableName: 'videos_Comment'

    });

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
module.exports = VideoComment;