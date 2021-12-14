"use strict";
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let sound = new Audio('KY3RAVB-game-ball-bounce.mp3');
class Ball {
    constructor() {
        this.color = "black";
        this.x = Math.floor(Math.random() * 460) + 1;
        this.radius = 20;
        this.y = Math.floor(Math.random() * 460) + 1;
        this.dy = Math.floor(Math.random() * 7) + 1;
        this.dx = Math.floor(Math.random() * 5) + 1;
    }
    draw() {
        ctx.clearRect(0, 0, 500, 500); //Clears the canvas
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke(); //draw the ball}
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
    hitWall() {
        if (this.x > 480 || this.x < 20) {
            this.dx = -this.dx;
        }
        if (this.y > 480 || this.y < 20) {
            this.dy = -this.dy;
        }
    }
}
const balls = [];
const numBalls = 20;
for (let i = 0; i < numBalls; i++) {
    balls.push(new Ball());
}
requestAnimationFrame(cycle);
function cycle() {
    ctx.clearRect(0, 0, 500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].hitWall();
    }
    requestAnimationFrame(cycle); // calls the next frame (1/60th of a second later)
}
//# sourceMappingURL=script.js.map