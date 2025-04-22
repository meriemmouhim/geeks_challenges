const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const HashPwd = sequelize.define('HashPwd', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'hashpwd',
    timestamps: false,
});

module.exports = HashPwd;