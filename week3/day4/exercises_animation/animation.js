// Exercise 1
setTimeout(() => {
    alert("Hello World");
}, 2000);
setTimeout(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}, 2000);
const intervalId = setInterval(() => {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
    if (container.getElementsByTagName('p').length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

// Exercise 2
function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0;
    const id = setInterval(frame, 1);
    function frame() {
        if (pos >= 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}