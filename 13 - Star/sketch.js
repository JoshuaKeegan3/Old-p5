

var stars = [];
var star;
function setup() {
  createCanvas(720, 500);
  background(0);
  fill(255);
  noStroke();
  for (var i = 0; i < 200; i++){
  	stars[i] = new Star();

  }
}
function draw() {
	background(51);
	  for (var i = 0; i < stars.length-1; i++){
	  	stars[i].show()
	  	stars[i].move(stars[i].x, stars[i].y, stars[i].z)
	  }
}
function Star(){
	this.x = random(width);
	this.y = random(height);
	this.z = random(width/4.5);
	this.show = function(){
		fill(255);
		ellipse(this.x,this.y,1, this.z* 0.1);
	}
	this.move = function(x,y,z){
		this.x = x;
		this.y = y;
		this.z = z;
		this.speed = ((this.x + this.y) * this.z/4)/100500;
		if (this.y > height){
			this.y = random(height);
			this.z = random(width/4)
			this.x = random(width);
		}else{
			this.y += this.speed * this.z;
			this.z += 2
		}
		if (this.x > width/2){
			this.x += this.z/100
		}else{
			this.x -= this.z/100
		}

	}
}
//
// var stars = [];
// var star;
// function setup() {
//   createCanvas(720, 500);
//   background(0);
//   fill(255);
//     for (var i = 0; i < 100; i++){
//   		stars[i] = new Star();
//   }
// }
// function draw() {
// 	background(51);
// 	  for (var i = 0; i < stars.length-1; i++){
// 	  	stars[i].show(stars[i].x, stars[i].y, stars[i].ax, stars[i].ay)
// 	  	stars[i].move(stars[i].x, stars[i].y, stars[i].zx, stars[i].zy, stars[i].ax, stars[i].ay)
// 	  }
// }
// function Star(){
// 	this.x = random(0,50);
// 	this.y = random(0,50);
// 	this.change = random(0,2)
// 	this.x = this.x * Math.pow(-1, this.change)
// 	this.change = random(0,2)
// 	this.y = this.y * Math.pow(-1, this.change)
// 	this.zx = random(width);
// 	this.zy = random(height);
// 	this.ax = this.x;
// 	this.ay = this.y;

// 	this.show = function(x,y,ax,ay){
// 		this.ax = ax;
// 		this.ay = ay;
// 		this.x = x;
// 		this.y = y;	
// 		strokeWeight(10);
// 		line(this.x, this.y, this.ax, this.ay);

// 	}
// 	this.move = function(x,y,zx,zy,ax,ay){
// 		this.x = x;
// 		this.y = y;
// 		this.zx = zx;
// 		this.zy = zy;	
// 		this.ax = ax;
// 		this.ay = ay;	
// 		this.xspeed = (this.zx + this.x) / 2;
// 		this.yspeed = (this.zy + this.y) / 2;
// 		if (this.ax < this.zx){
// 			this.ax += this.xspeed;
// 		}
// 		if (this.ay < this.zy){
// 			this.ay += this.yspeed;
// 		}
// 	}
// }


