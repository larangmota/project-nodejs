// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('products', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// })
// try{
//     sequelize.authenticate()
//     console.log("Conectamos no sequelize com sucesso")
// }catch(err){
//     console.log('Não foi possível conectar: ', err)
// }
// module.exports = sequelize;

require('dotenv').config(); // Carrega as variáveis de ambiente do .env
const { Sequelize } = require('sequelize');

// Usando as variáveis de ambiente
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || 3306,  
});

try {
    sequelize.authenticate();
    console.log("Conectamos no Sequelize com sucesso");
} catch (err) {
    console.log('Não foi possível conectar: ', err);
}

module.exports = sequelize;
