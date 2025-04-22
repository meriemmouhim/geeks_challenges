const express = require('express');
const app = express();

const books = [
    { id: 1, title: "Book One", author: "Author A", publishedYear: 2020 },
    { id: 2, title: "Book Two", author: "Author B", publishedYear: 2024 },
    { id: 3, title: "Book Three", author: "Author C", publishedYear: 2026 }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
});

app.post('/api/books', (req, res) => {
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
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});