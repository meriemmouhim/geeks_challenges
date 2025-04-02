document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const clearBtn = document.getElementById('clear');
    const colorBtns = document.querySelectorAll('.color-btn');
    let isDrawing = false;
    let currentColor = 'black';
    document.getElementById('C').classList.add('selected');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    clearBtn.addEventListener('click', function() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = currentColor;
    });
    colorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            colorBtns.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            switch(this.id) {
                case 'C': currentColor = 'black'; break;
                case 'F': currentColor = 'red'; break;
                case 'G': currentColor = 'green'; break;
                case 'D': currentColor = 'blue'; break;
                case 'S': currentColor = 'yellow'; break;
                case 'V': currentColor = 'violet'; break;
                case 'P': currentColor = 'pink'; break;
                case 'B': currentColor = 'brown'; break;
            }
            ctx.strokeStyle = currentColor;
        });
    });
    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }
    function draw(e) {
        if (!isDrawing) return;
        
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }
});