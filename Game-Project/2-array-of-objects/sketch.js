
//create an empty array called balls

let squares= [];
let balls = [];

function setup() {
  createCanvas(1000, 1000);

}

function draw(){
	background(200, 140, 100);

  for (let i = 0; i < squares.length; i++) {
      squares[i].drawSquare();
      squares[i].moveSquare();
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].moveBall();
	  }
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
  let  b = new Ball(random(0,1000), random(0,1000));
  balls.push(b);
  print(balls);
}
  if (keyCode === DOWN_ARROW) {
  let  s = new Square(random(0,1000), random(0,1000));
  squares.push(s);
  print(squares);
}
}


//ball class from which to create new balls with similar properties.
class Ball {
	constructor(x,y){//every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;

	}

	drawBall(){  // draw a ball on the screen at x,y
    stroke(0);
    fill(random(0,270), random(0,270), random(0,270));
    ellipse(this.x,this.y,40,40);
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
    this.x = this.x+random(-5,5);
		this.y = this.y+random(-2,2);
	}


}

class Square {
	constructor(x,y){//every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;

	}

	drawSquare(){  // draw a ball on the screen at x,y
    stroke(0);
    fill(random(0,270), random(0,270), random(0,270));
    rect(this.x,this.y,50,50);
	}

	moveSquare(){ //update the location of the ball, so it moves across the screen
    this.x = this.x+random(-4,4);
		this.y = this.y+random(-3,3);
	}
}
