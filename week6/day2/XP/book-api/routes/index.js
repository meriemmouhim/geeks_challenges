const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller.js');

// Define routes
router.get('/api/books', bookController.getAllBooks);
router.get('/api/books/:bookId', bookController.getBookById);
router.post('/api/books', bookController.createBook);

module.exports = router;