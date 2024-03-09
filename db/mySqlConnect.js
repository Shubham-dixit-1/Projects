require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD,{
  host: '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 60000, // Set a higher value in milliseconds
  },
});

console.log("process is ", process.env.MYSQL_DATABASE)

const connectMySql = async () => {
  try {
     
    await sequelize.authenticate();
    console.log('Connected to MySQL database');

  } catch (error) {
    console.error('Unable to connect to the MySQL database:', error);
  }
};

module.exports = connectMySql;