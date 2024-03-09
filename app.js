// server.js
require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
const app = express();
const Umzug = require('umzug');
const umzugConfig = require('./umzug_config');

//const umzug = new Umzug(umzugConfig);


const PORT = process.env.PORT || 6001;
const MONGODB_URL = process.env.MONGODB_URL

const connectMySql = require('./db/mySqlConnect');
const product_routes = require('./routes/product');

app.get('/', (req, res) => {
  res.send('I am live ghfhf');
});

app.use('/api/products', product_routes);

app.listen(PORT, async () => {
  try {
    // Connect to MySQL
    await connectMySql();

    async function runMigrationsAndSeeders() {
      try {
        // Check if migrations have already been executed
        const executedMigrations = await umzug.executed();
        if (executedMigrations.length === 0) {
          console.log('Running migrations...');
          await umzug.up();
          console.log('Migrations executed successfully.');
        } else {
          console.log('Migrations have already been executed.');
        }
    
        // Check if seeders have already been executed
        const executedSeeders = await umzug.executed({ migrations: ['seeders'] });
        if (executedSeeders.length === 0) {
          console.log('Running seeders...');
          await umzug.up({ migrations: ['seeders'] });
          console.log('Seeders executed successfully.');
        } else {
          console.log('Seeders have already been executed.');
        }
      } catch (error) {
        console.error('Error running migrations and seeders:', error);
      }
    }
    
    // Run the function
    runMigrationsAndSeeders();

    // Run Sequelize migrations
    const sequelize = new Sequelize({
      ...require('./config/config.json').development,
      logging: false, // Set to true to see SQL logs during migration
    });

    await sequelize.authenticate();
    console.log('Connected to Sequelize');



    // Run migrations
    await sequelize.sync({ force: true }); // Set force to true to drop and recreate tables

    console.log('Sequelize migrations running successfully');
    console.log('Sequelize migrations running successfully');
    console.log(`Server is running on port ${PORT}`);
    console.log("gkdfl")

    mongoose.connect(MONGODB_URL);
    console.log("mongodb connected")
    console.log("gkdfl")

  } catch (error) {
    console.error('Error starting the server:', error);
  }
});