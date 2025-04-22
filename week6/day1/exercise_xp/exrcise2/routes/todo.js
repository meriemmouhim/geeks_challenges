const express = require('express');
const router = express.Router();
// Sample in-memory database for storing to-do items
const todos = [
    { id: 1, task: "Learn Express.js" },
    { id: 2, task: "Build a to-do app" }
];

// Get all to-do items
router.get('/todos', (req, res) => {
    res.json(todos);
});
// Add a new to-do item
router.post('/todos', (req, res) => {
    const {task} = req.body;
    if (!task) {
        return res.status(400).json({ message: 'Task is required' });
    }
    const newTodo = {
        id: todos.length + 1,
        task: task
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
// Update a to-do item by ID
router.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const {task} = req.body;
    const todo = todos.find(todo => todo.id === todoId);
    if (!todo) {
        return res.status(404).json({ error: "Todo item not found" });
    }
    if (task) todo.task = task;
    res.status(200).json(todo);

});

// Delete a to-do item by ID
router.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex === -1) {
        return res.status(404).json({ error: "To-do item not found" });
    }
    todos.splice(todoIndex, 1);
    res.status(204).send();
});

module.exports = router;