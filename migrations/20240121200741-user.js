'use strict';
const { DataTypes} = require('sequelize');

module.exports = {
  async up(query, Sequelize) {
    await query.createTable('Users', {
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING, // Corrected data type
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING, // Corrected data type
        defaultValue: "NOida",
        allowNull: true,
      },
    });
  },

  async down(query, Sequelize) {
    await query.dropTable('Users');
  }
};