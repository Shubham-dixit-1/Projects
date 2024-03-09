const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING, // Corrected data type
        allowNull: false,
    },
    Address: {
        type: DataTypes.STRING, // Corrected data type
        defaultValue: "NOida",
        allowNull: true,
    }
});

module.exports = User