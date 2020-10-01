//create a variable to hold one ball
let b;
let anotherRoll;
let birdRoll
let bigTree
let littleTree



function setup() {
  createCanvas(800, 400);
  b = new Roll(20, 100,"blue"); //make a new ball from the Ball class and call it b.
  anotherRoll = new Roll(300,30,"green");
  birdRoll= new Roll(400,40,"red");
  bigTree= new Tree(500,100,"green")
  littleTree= new Tree(50,10,"green")
}


function draw(){
	background("blue");
    b.drawRoll(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveRoll(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherRoll.drawRoll();
    anotherRoll.moveRoll();
    birdRoll.drawRoll();
    birdRoll.moveRoll();
    bigTree.drawTree();
    littleTree.drawTree();
}

class Tree{
constructor(x,y,color){
  this.x = x;
  this.y = y;
  this.color= color;
}
drawTree(){
  stroke(4);
  fill(this.color);
  ellipse(this.x, this.y, 100,100)
}

}

//ball class from which to create new balls with similar properties.
class Roll {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawRoll(){  // draw a ball on the screen at x,y
    		stroke(3);
    		fill(this.color);
        ellipse(this.x, this.y, 10,10)

	}
	moveRoll(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
  function hypercube_1(x,y) {
  push();
  noFill();
  line(x+125-140,y+105-140,x+125-140,y+170-140);
  line(x+105-140,y+125-140,x+170-140,y+125-140);
  line(x+105-140,y+150-140,x+170-140,y+150-140);
  line(x+150-140,y+170-140,x+150-140,y+105-140);
  line(x+150-140,y+105-140,x+105-140,y+150-140);
  line(x+105-140,y+125-140,x+150-140,y+170-140);
  line(x+125-140,y+170-140,x+170-140,y+125-140);
  line(x+170-140,y+150-140,x+125-140,y+105-140);
  line(x+105-140,y+125-140,x+105-140,y+60-140);
  line(x+105-140,y+60-140,x+170-140,y+60-140);
  line(x+170-140,y+60-140,x+170-140,y+125-140);
  line(x+150-140,y+105-140,x+215-140,y+105-140);
  line(x+215-140,y+105-140,x+215-140,y+170-140);
  line(x+215-140,y+170-140,x+150-140,y+170-140);
  line(x+170-140,y+150-140,x+170-140,y+215-140);
  line(x+170-140,y+215-140,x+105-140,y+215-140);
  line(x+105-140,y+215-140,x+105-140,y+150-140);
  line(x+125-140,y+170-140,x+60-140,y+170-140);
  line(x+60-140,y+170-140,x+60-140,y+105-140);
  line(x+60-140,y+105-140,x+125-140,y+105-140);
  line(x+105-140,y+150-140,x+60-140,y+105-140);
  line(x+60-140,y+105-140,x+105-140,y+60-140);
  line(x+105-140,y+60-140,x+150-140,y+105-140);
  line(x+125-140,y+105-140,x+170-140,y+60-140);
  line(x+170-140,y+60-140,x+215-140,y+105-140);
  line(x+215-140,y+105-140,x+170-140,y+150-140);
  line(x+170-140,y+125-140,x+170-140,y+170-140);
  line(x+215-140,y+170-140,x+170-140,y+215-140);
  line(x+170-140,y+215-140,x+125-140,y+170-140);
  line(x+150-140,y+170-140,x+105-140,y+215-140);
  line(x+105-140,y+215-140,x+60-140,y+170-140);
  line(x+60-140,y+170-140,x+105-140,y+125-140);
  pop();
}
function hypercube(x,y) {
hypercube_1(x+2.5,y+2.5);
}
