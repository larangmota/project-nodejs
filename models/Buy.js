const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Buy = db.define('Buy', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }


})

module.exports = Buy;