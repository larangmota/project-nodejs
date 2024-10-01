const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Products = db.define('products', {
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

// products.belongsTo(User);
// User.hasMany(products);

module.exports = Products;