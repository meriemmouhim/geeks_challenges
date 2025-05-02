const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const users = {};

io.on('connection', (socket) => {
    socket.on('new-user', ({ username, avatar }) => {
        users[socket.id] = { username, avatar };
        socket.broadcast.emit('user-connected', users[socket.id]);
        io.emit('active-users', Object.values(users));
    });

    socket.on('send-chat-message', (message) => {
        const user = users[socket.id];
        if (user) {
            io.emit('chat-message', {
                message: message,
                name: user.username,
                avatar: user.avatar
            });
        }
    });

    socket.on('disconnect', () => {
        const user = users[socket.id];
        if (user) {
            socket.broadcast.emit('user-disconnected', user);
            delete users[socket.id];
            io.emit('active-users', Object.values(users));
        }
    });
});


server.listen(3000, () => console.log('Server is running on http://localhost:3000'));