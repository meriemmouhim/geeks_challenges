document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const chat = document.getElementById('chat');
    const form = document.getElementById('form');
    const messageInput = document.getElementById('message');
    const usersList = document.getElementById('users');
  
    // Collect username and avatar URL
    let username = prompt("Enter your username:");
    let avatar = prompt("Enter your profile picture URL (or leave blank for default):");
    if (!avatar) {
        avatar = "https://static.vecteezy.com/system/resources/previews/023/556/431/non_2x/cute-robot-waving-hand-cartoon-icon-illustration-science-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"; // default avatar
    }

    socket.emit('new-user', { username, avatar });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const message = messageInput.value;
        if (message.trim() !== '') {
            appendMessage(`You`, message, avatar);
            socket.emit('send-chat-message', message);
            messageInput.value = '';
        }
    });

    socket.on('chat-message', data => {
        appendMessage(data.name, data.message, data.avatar);
    });

    socket.on('user-connected', user => {
        appendMessage("System", `${user.username} joined the chat`, user.avatar);
    });

    socket.on('user-disconnected', user => {
        appendMessage("System", `${user.username} left the chat`, user.avatar);
    });

    socket.on('active-users', users => {
        usersList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${user.avatar}" class="avatar"> ${user.username}`;
            usersList.appendChild(li);
        });
    });

    function appendMessage(name, message, avatar) {
        const div = document.createElement('div');
        div.classList.add('message');
    
        let content = `<strong>${name}</strong>: ${escapeHTML(message)}`;
    
        // Check if the message contains image/GIF URL
        const imgRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi;
        const matches = message.match(imgRegex);
        if (matches) {
            matches.forEach(url => {
                content += `<br><img src="${url}" class="chat-img">`;
            });
        }
    
        div.innerHTML = `
            <img src="${avatar}" class="avatar">
            <div>${content}</div>
        `;
        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;
    }
    
    function escapeHTML(str) {
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    const emojiPicker = document.getElementById('emoji-picker');
    const emojiBtn = document.getElementById('emoji-btn');

    // Check if emoji elements exist before adding event listeners
    if (emojiBtn && emojiPicker) {
        // Toggle emoji picker
        emojiBtn.addEventListener('click', () => {
            emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
        });

        // Add selected emoji to input
        emojiPicker.addEventListener('emoji-click', event => {
            messageInput.value += event.detail.unicode;
            emojiPicker.style.display = 'none';
        });
    }
});