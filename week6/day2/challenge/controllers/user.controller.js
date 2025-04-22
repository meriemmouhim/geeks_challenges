const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize');
const User = require('../models/user');
const HashPwd = require('../models/hashpwd');
const sequelize = require('../config/db');

// Register a new user
exports.registerUser = async (req, res) => {
    const { email, username, first_name, last_name, password } = req.body;

    const transaction = await sequelize.transaction();
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in the users table
        const newUser = await User.create({ email, username, first_name, last_name }, { transaction });

        // Store the hashed password in the hashpwd table
        await HashPwd.create({ username, password: hashedPassword }, { transaction });

        await transaction.commit();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ error: 'Failed to register user', details: error.message });
    }
};

// Login a user
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await HashPwd.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login', details: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users', details: error.message });
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user', details: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const { email, first_name, last_name } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.email = email || user.email;
        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        await user.save();

        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user', details: error.message });
    }
};