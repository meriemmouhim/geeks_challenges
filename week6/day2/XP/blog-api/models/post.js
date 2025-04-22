const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Post model
const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'posts', 
    timestamps: false, 
});

module.exports = Post;