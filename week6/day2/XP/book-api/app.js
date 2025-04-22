const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON
app.use('/', router); // Mount the router

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});