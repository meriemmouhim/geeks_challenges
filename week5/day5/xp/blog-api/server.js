const express = require('express');
const app = express();

app.use(express.json());

let posts = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "This is the content of the second post." },
    { id: 3, title: "Third Post", content: "This is the content of the third post." }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
});

app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    const newPost = {
        id: posts.length + 1,
        title,
        content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    res.json(post);
});

app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    posts.splice(postIndex, 1);
    res.status(204).send(); // No content
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});