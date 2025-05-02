const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const USERS_FILE = './users.json';

const getUsers = () => {
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Please provide username and password');
  }

  const users = getUsers();
  if (users.find(u => u.username === username)) {
    return res.status(400).send('Username already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  saveUsers(users);
  res.send('register');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.username === username);

  if (!user) return res.status(400).send('pleease provide username or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid password');

  res.send('login');
});

router.get('/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const users = getUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

router.put('/users/:id', (req, res) => {
  let users = getUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).send('User not found');

  users[index] = { ...users[index], ...req.body };
  saveUsers(users);
  res.send('User updated');
});

module.exports = router;