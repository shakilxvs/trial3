document.addEventListener('DOMContentLoaded', () => {
    // Snowfall effect
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const snowflakes = [];
    function createSnowflakes() {
        for (let i = 0; i < 100; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                speed: Math.random() * 3 + 1
            });
        }
    }
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let flake of snowflakes) {
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        }
        ctx.fill();
        updateSnowflakes();
    }
    function updateSnowflakes() {
        for (let flake of snowflakes) {
            flake.y += flake.speed;
            if (flake.y > canvas.height) {
                flake.y = 0;
            }
        }
    }
    createSnowflakes();
    setInterval(drawSnowflakes, 30);
});
document.addEventListener('DOMContentLoaded', () => {
    // Snowfall effect
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const snowflakes = [];
    function createSnowflakes() {
        for (let i = 0; i < 100; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                speed: Math.random() * 3 + 1
            });
        }
    }
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let flake of snowflakes) {
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        }
        ctx.fill();
        updateSnowflakes();
    }
    function updateSnowflakes() {
        for (let flake of snowflakes) {
            flake.y += flake.speed;
            if (flake.y > canvas.height) {
                flake.y = 0;
            }
        }
    }
    createSnowflakes();
    setInterval(drawSnowflakes, 30);
});
document.addEventListener('DOMContentLoaded', () => {
    // Snowfall effect
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const snowflakes = [];
    function createSnowflakes() {
        for (let i = 0; i < 100; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                speed: Math.random() * 3 + 1
            });
        }
    }
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let flake of snowflakes) {
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        }
        ctx.fill();
        updateSnowflakes();
    }
    function updateSnowflakes() {
        for (let flake of snowflakes) {
            flake.y += flake.speed;
            if (flake.y > canvas.height) {
                flake.y = 0;
            }
        }
    }
    createSnowflakes();
    setInterval(drawSnowflakes, 30);
});
