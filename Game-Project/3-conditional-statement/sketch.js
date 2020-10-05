
let boat

let me;

let mySound

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('impact.wav')
}

function preload(){
  boat= loadAnimation('boat/Boat0001.png','boat/Boat0004.png')
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 50 == 0) {
      let  b = new Boat(width, 200, -2);
      boats.push(b);
      console.log(boats); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < boats.length; i++) {
	 	      boats[i].drawBoat();
       	  boats[i].moveBoat();
        	boats[i].bounceBoat();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(32)) {
       this.y -= this.speed;
       //y velocity, y position, y acceleration
       //When spacebar is pressed, character moves upward at speed of 50 frames per second, increasing by 10 each time. Once they hit a height of 150, they drop by 55 units per second until they hit the ground
    }

    if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Boat{

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed/2;
	}

	// draw a ball on the screen at x,y
	drawBoat(){
    	stroke(0);
      strokeWeight(1);
animation(boat, this.x, this.y )
	}

	//update the location of the ball, so it moves across the screen
	moveBoat(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBoat(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
            this.speed = -this.speed;
            fill("red")
            ellipse(this.x, this.y, 30,30)
            mySound.setVolume(0.1);
            mySound.play();
    		}
  	}

}
