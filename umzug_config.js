// umzug-config.js

const Umzug = require('umzug');
const path = require('path');
const connectMySql = require("./db/mySqlConnect")

module.exports = {
  migrations: {
    path: path.join(__dirname, 'migrations'),
    pattern: /^\d+[\w-]+\.js$/,
    customResolver: (file) => require(file),
  },
  storage: 'sequelize', // or choose another storage adapter
  storageOptions: {
    sequelize: connectMySql, // provide your Sequelize instance
  },
  logging: true, // Set to true to see logging during migration
};