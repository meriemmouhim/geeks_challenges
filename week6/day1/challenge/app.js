const express = require('express');
const app = express();
const router = require('./routes/index.js'); 

app.use(express.urlencoded({ extended: true })); 
app.use('/', router); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});