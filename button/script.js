document.addEventListener('DOMContentLoaded', function() {
    const snake = document.getElementById('snake');
    let x = 50;
    let y = 50;
    let dx = 2;
    let dy = 1;

    function moveSnake() {
        x += dx;
        y += dy;
        snake.style.left = x + 'px';
        snake.style.top = y + 'px';

        // Reverse direction if the snake reaches the edges of the window
        if (x >= window.innerWidth - snake.offsetWidth || x <= 0) {
            dx = -dx;
        }
        if (y >= window.innerHeight - snake.offsetHeight || y <= 0) {
            dy = -dy;
        }

        requestAnimationFrame(moveSnake);
    }

    moveSnake();
});
