const books = require('../models/book.model.js');

// Get all books
exports.getAllBooks = (req, res) => {
    res.json(books);
};

// Get a specific book by ID
exports.getBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
};

// Create a new book
exports.createBook = (req, res) => {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: "Title, author, and publishedYear are required" });
    }
    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
};