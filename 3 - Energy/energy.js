// particles = []
// pwidth = 10
// function setup() {
//   createCanvas(720, 500);
//   background(0);
//   fill(255)
//   noStroke()
// }
// function Particle(){
// 	x = random(width)
// 	y = random (height)
// 	energy = random(255)
// 	ellipse(x, y, pwidth)
// 	fill(energy,0,0)
// }
// function draw() {
// 	for(var i = 0; i < 50; i++){
// 		particles[i] = new Particle
// 	}
// }
particles = []
pwidth = 10
function setup() {
  createCanvas(720, 500);
  background(0);
  fill(255)
  noStroke()
  for(var i = 0; i < 50; i++){
		particles[i] = new Particle
	}
}
function Particle(){
	noStroke()
	this.x = random(width)
	this.y = random (height)
	this.energy = random(255)
	this.random = random(this.energy)
	this.xspeed = this.energy - this.random
	this.yspeed = this.random
	// console.log('speed' + (this.xspeed + this.yspeed))
	// console.log('e' + this.energy)
	this.xspeed/=255
	this.yspeed/=255
	// console.log('speed' + (this.xspeed + this.yspeed))
	this.xspeed*=Math.pow(-1, int(random(2)))
	this.yspeed*=Math.pow(-1, int(random(2)))
	this.show = function(){
		ellipse(this.x, this.y, pwidth)
		fill(this.energy,0,0)
	}
	this.move = function(){
		this.y += this.yspeed
		this.x += this.xspeed
		if (this.x > width || this.x < 0){
			this.xspeed *= -1
		}
		if (this.y > height || this.y < 0){
			this.yspeed *= -1
		}
	}
	this.bounce = function(){
		this.x-=this.xspeed
		this.xspeed *=-1
		this.y-=this.yspeed
		this.yspeed *=-1
	}
}
function draw() {
	background(0)
  for(var i = 0; i < 50; i++){
  	particles[i].show()
  	particles[i].move()
  	for(var x = 0; x < 50; x++){
  		if ((particles[i].x > particles[x].x - pwidth && particles[i].x < particles[x].x + pwidth) && (particles[i].y > particles[x].y - pwidth && particles[i].y < particles[x].y + pwidth)) {
  			particles[i].bounce()
  			particles[x].bounce()
  		} 
  	}
	}
}
