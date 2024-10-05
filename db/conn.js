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
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nome do banco de dados
  process.env.DB_USER,       // Usuário do banco de dados
  process.env.DB_PASSWORD,   // Senha do banco de dados
  {
    host: process.env.DB_HOST,     // Host do banco de dados (remoto ou local)
    dialect: process.env.DB_DIALECT // Dialeto do banco (MySQL)
  }
);

try {
    sequelize.authenticate();
    console.log("Conectamos no Sequelize com sucesso");
} catch (err) {
    console.log('Não foi possível conectar: ', err);
}

module.exports = sequelize;
