const express = require('express');
const router = express.Router();
const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');

const FILE_PATH = './tasks.json';

const readTasks = async () => {
  try {
    return await fs.readJson(FILE_PATH);
  } catch (err) {
    throw new Error('Failed to read tasks file.');
  }
};

const writeTasks = async (tasks) => {
  try {
    await fs.writeJson(FILE_PATH, tasks, { spaces: 2 });
  } catch (err) {
    throw new Error('Failed to write to tasks file.');
  }
};

router.get('/', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTask = {
    id: uuidv4(),
    title,
    description: description || '',
    completed: false,
    createdAt: new Date().toISOString(),
  };

  try {
    const tasks = await readTasks();
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const tasks = await readTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    const updatedTask = {
      ...tasks[index],
      title: title ?? tasks[index].title,
      description: description ?? tasks[index].description,
      completed: completed ?? tasks[index].completed,
      updatedAt: new Date().toISOString()
    };

    tasks[index] = updatedTask;
    await writeTasks(tasks);
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const newTasks = tasks.filter(t => t.id !== req.params.id);
    if (tasks.length === newTasks.length)
      return res.status(404).json({ error: 'Task not found' });

    await writeTasks(newTasks);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;