const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/index');
const sequelize = require('./config/db');

const app = express();
app.use(bodyParser.json());
app.use('/', userRoutes);

const PORT = 3000;
sequelize.sync({ alter: true }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});