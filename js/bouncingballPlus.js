// setup canvas
const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", loop);

const stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click", stopLoop);

const countP = document.querySelector("p");
let ballsCnt = 0;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

class EvilCircle extends Shape {
    constructor(x, y, size) {
        super(x, y, 20, 20);
        this.color = "white";
        this.size = size;

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "a":
                    this.x = Math.max(this.x - this.velX, this.size);
                    break;
                case "d":
                    this.x = Math.max(this.x + this.velX, this.size);
                    break;
                case "w":
                    this.y = Math.max(this.y - this.velY, this.size);
                    break;
                case "s":
                    this.y = Math.max(this.y + this.velY, this.size);
                    break;
            }
        })
    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    checkBounds() {
        if (this.x + this.size >= width || this.x - this.size <= 0
            || this.y + this.size >= height || this.y - this.size <= 0) {
            this.size = Math.max(this.size - 1, 1);
        }
    }

    collisionDetect() {
        for (const ball of balls) {
            if (ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= this.size - ball.size) {
                    ball.exists = false;
                    ballsCnt--;
                    countP.innerText = `Ball Count: ${ballsCnt}`;
                    this.size += ball.size;
                }
            }
        }
    }
}

class Ball extends Shape {
    exists = true;
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
        ballsCnt++;
    }

    draw() {
        if (!this.exists) return;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if (!this.exists) return;
        if (this.x + this.size >= width || this.x - this.size <= 0) {
            this.velX = -this.velX;
        }

        if (this.y + this.size >= height || this.y - this.size <= 0) {
            this.velY = - this.velY
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect() {
        if (!this.exists) return;
        for (const ball of balls) {
            if (this !== ball && ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

const balls = initalizeBalls();
const evilCircle = new EvilCircle(500, 500, 500);
var nowFrame = 0;

function loop() {
    console.log(evilCircle);
    if (ballsCnt === 0) {
        stopLoop();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgb(0 0 0 /25%)";
        ctx.fillRect(0, 0, width, height);
        evilCircle.draw();
        prompt(`You are champion!!!`);
        return;
    }

    ctx.fillStyle = "rgb(0 0 0 /25%)";
    ctx.fillRect(0, 0, width, height);




    for (const ball of balls) {
        if (!ball.exists) continue;
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();


    nowFrame = requestAnimationFrame(loop);
    console.log(nowFrame);
}

function stopLoop() {
    cancelAnimationFrame(nowFrame);
}

function initalizeBalls() {
    const balls = [];
    // ballsCnt = 0;
    console.log(ballsCnt);
    while (balls.length < 5) {
        const size = random(10, 20);
        const ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            randomRGB(),
            size
        );

        countP.innerText = `Ball Count: ${ballsCnt}`;
        balls.push(ball);
    }

    return balls;
}

