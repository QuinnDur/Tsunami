
let boats = [];

let waves =[];

let me;

let mySound;

let hits = 0

let img;

let wave1;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('impact.wav')
  boat = loadAnimation('boat/Boat0001.png','boat/Boat0004.png')
  img = loadImage('BackImage.jpeg')
  wave = loadAnimation('waveSprite/Wave1.png','waveSprite/Wave1.png');
  fisherman = loadAnimation('fishermanSprite/FishermanWalk1.png', 'fishermanSprite/FishermanWalk4.png');



}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

  wave1 = new Wave(680, 250, 2);

}

function draw(){
	background(img,0,0,500,400);

  noStroke();
   fill(3,96,167);
   rect(0,311,500,89);


   wave1.drawWave();
   wave1.moveWave();
   wave1.hitWave();

   if (frameCount % 300 == 0) {
       let  b = new Wave(680, 250, 2);
       waves.push(b);
       console.log(waves); //print the balls array to the console
     }

 // draw all the balls in that array
 for (let i = 0; i < waves.length; i++) {
      waves[i].drawWave();
          waves[i].moveWave();
           waves[i].hitWave();

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
    if (keyIsDown(32)) {
      me.vel.y=-3
       //When spacebar is pressed, character moves upward at speed of 50 frames per second, increasing by 10 each time. Once they hit a height of 150, they drop by 55 units per second until they hit the ground
    }

    if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
    }
    if (this.x < 0){
    this.x = width/2
    }
    if (this.x > width){
    this.x = width/2
    }
    if (this.y < 0){
    this.y = height/2
  }
    if (this.y > height){
    this.y = height/2
    }
  }


  die(){
   textSize(30);
   fill("black");
   stroke("black");
   if (hits >= 3) {
     text("Game Over", 180, 100);
     //exit();
   } else if (hits == 2) {
     text("Lives: 1", 180, 100);
   } else if (hits == 1) {
     text("Lives: 2", 180, 100);
   } else if (hits == 0) {
     text("Lives: 3", 180, 100);
   }
  }

}

class Wave {

  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  drawWave(){
    animation(wave, this.x, this.y);
  }
  moveWave(){
    this.x = this.x- this.speed;
  }
  hitWave(){
    if (this.x >= me.x-50 && this.x <= me.x+50 && this.y > me.y-100 && this.y < me.y+100){
        //me.x = width/2
        //me.y = 300
        if (frameCount % 50 == 0) {
          hits = hits + 1
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
animation(boat, this.x/10, this.y/10 )
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
