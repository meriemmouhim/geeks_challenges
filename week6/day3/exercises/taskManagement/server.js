const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks.route');

app.use(express.json());
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Task API running on port ${PORT}`);
});