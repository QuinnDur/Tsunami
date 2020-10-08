//create an empty array called balls
let arrows = [];

//create a variable to hold your avatar
let me;

let mySound

var fisherman;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('boom.wav')
  fisherman = loadAnimation('fishermanSprite/FishermanWalk1.png', 'fishermanSprite/FishermanWalk4.png');
  wave = loadAnimation('waveSprite/Wave1.png','waveSprite/Wave2.png');
}

function setup() {
  createCanvas(500, 400);

  animation(wave, 300, 100);
  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  if (frameCount % 10 == 0) {
      let  b = new Arrow(width, random(0,height), -3);
      arrows.push(b);
      console.log(arrows); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < arrows.length; i++) {
	 	      arrows[i].drawArrow();
       	  arrows[i].moveArrow();
        	arrows[i].bounceArrow();
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
    		/*stroke("green");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);*/
        animation(fisherman, this.x, this.y);

	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
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
class Arrow {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawArrow(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  line(this.x,this.y,this.x-20,this.y+5);
      line(this.x-20, this.y+5,this.x-11, this.y+8)
      line(this.x-20, this.y+5, this.x-11, this.y-2)
      line(this.x,this.y,this.x+5,this.y-3)
      line(this.x,this.y,this.x+5, this.y+1)
	}

	//update the location of the ball, so it moves across the screen
	moveArrow(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceArrow(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
            this.speed = -this.speed;
            fill("red")
            ellipse(this.x, this.y, 30,30)
            mySound.setVolume(0.1);
            //mySound.play();
    		}
  	}

}
