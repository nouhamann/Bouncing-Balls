"use strict"
let c=<HTMLCanvasElement>document.getElementById("myCanvas")
let ctx=<CanvasRenderingContext2D>c.getContext("2d")

let sound = new Audio('KY3RAVB-game-ball-bounce.mp3')


class Ball {
    color:string = "black"
    x:number = Math.floor(Math.random()*460)+1
    radius:number = 20
    y:number=Math.floor(Math.random()*460)+1
    dy:number = Math.floor(Math.random()*7)+1
    dx:number = Math.floor(Math.random()*5)+1

    
    draw(){
        ctx.clearRect(0,0,500,500)  //Clears the canvas
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
const numBalls=20
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
