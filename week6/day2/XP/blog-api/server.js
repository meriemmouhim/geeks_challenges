const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index.js');
const sequelize = require('./config/db');
const Post = require('./models/post.js');

const app = express();
app.use(bodyParser.json());
app.use('/', router);

const PORT = 3000;
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});