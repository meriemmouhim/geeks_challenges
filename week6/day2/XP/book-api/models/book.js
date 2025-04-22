const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Post model
const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    publishedYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'books', 
    timestamps: false, 
});

module.exports = Book;