document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const userData = {
        name: name,
        lastname: lastname
    };
    document.getElementById('output').textContent = JSON.stringify(userData, null, 2);
});