"use strict"
let c=<HTMLCanvasElement>document.getElementById("myCanvas")
let ctx=<CanvasRenderingContext2D>c.getContext("2d")

let sound = new Audio('KY3RAVB-game-ball-bounce.mp3')


class Ball {
    color:string = "black"
    x:number = Math.floor(Math.random()*400)+1
    radius:number = Math.floor(Math.random()*400)+1
    y:number=50
    dy:number = Math.floor(Math.random()*17)+1
    dx:number = Math.floor(Math.random()*14)+1

    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle= "black";
        ctx.fill();
        ctx.stroke(); //draw the ball}
    }
    move(){
        this.x+=this.dx
        this.y+=this.dy
    }

    hitWall(){ 
        if(this.x>480 || this.x<20){
            this.dx=-this.dx
        }
        if(this.y>480 || this.y<20){
            this.dy=-this.dy
        }
    }
}

const balls:Ball[]=[]
const numBalls=25
for(let i= 0; i<numBalls; i++){
    balls.push(new Ball())

}


requestAnimationFrame(cycle)

function cycle(){
ctx.clearRect(0,0,500,500)
    for (let i= 0; i<numBalls; i++){
        balls[i].draw()
        balls[i].move()
        balls[i].hitWall()
    }
    requestAnimationFrame(cycle) // calls the next frame (1/60th of a second later)
}
