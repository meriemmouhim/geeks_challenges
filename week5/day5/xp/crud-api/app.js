const express = require('express');
const app = express();
const fetchPosts = require('./data/dataService.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts(); 
        console.log('Data Fetched successfully ');
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});