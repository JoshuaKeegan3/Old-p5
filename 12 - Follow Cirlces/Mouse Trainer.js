var circle;
var dying = 0;
var particles = [];

function setup() {
  createCanvas(window.windowWidth, window.windowHeight);
  background(0);
  fill(255);
  circle = new Circle()
}

function Circle(){
	this.location = createVector(width/2, height/2);
	this.size = 200;
	this.colour = 0;
	this.speed = createVector(0,0);
	this.mag = 1;
	this.fill = 255
	this.show = function(){
		strokeWeight(3);
		stroke(255);
		fill(255)
		ellipse(this.location.x, this.location.y, this.size);
	}
	this.move = function(){
		this.mag = 1 * (1+ frameCount/300);
		this.size = 300 - (1 + frameCount/10);
		this.pspeed = this.speed

		do{
			this.speed = this.pspeed
			this.speed.add(random(-0.3*this.mag,0.3*this.mag), random(-0.3*this.mag,0.3*this.mag));
			this.speed.normalize();
			this.speed.mult(this.mag)
			
		}
		while((this.location.x + this.speed.x) < Math.abs(this.size/2) || (this.location.x + this.speed.x) > Math.abs(width - this.size/2)
			|| (this.location.y + this.speed.y) < Math.abs(this.size/2) || (this.location.y + this.speed.y) > Math.abs(height - this.size/2))
		this.location.add(this.speed)
	}
	this.outside = function(){
		this.m = (this.location.x - mouseX) / (this.location.y - mouseY)
		this.d = (this.location.x - mouseX)**2 + (this.location.y - mouseY)**2
		this.d = this.d ** 0.5
		if (this.d > this.size/2){
			dying += 5
		}
		else{
			dying -= 1
		}
		if (dying >= 255){
			this.fill = this.fill - 255
		}
	}
}
// class Particle{
// 	constructor{

// 	}
// }
// this.tpMouse = function(){

// }
// this.tpCircle = function(){

// }
// this.growCircleOnMouse = function(){

// }
// this.vanishCircleOnHit = function(){

// }
// }


function draw() {
	console.log(dying)
	background(dying,0,0);

	circle.show();
	circle.move();
	circle.outside();
}
