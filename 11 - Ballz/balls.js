var balls = [];
var balln = 1;
var blocks = [];
var intspeed;
var BALLSIZE = 20;
var SPEEDMULT = 6;
var shot = false;
var a;
var ballsShot = 0;
var ballsGone = 0;
ROWS = 7;
COLUMNS = 7; ///?


var speeds = []

var score = 0;

function setup(){
	createCanvas(630, 630);
	background(0);
	initspeed = createVector(0, 0);
}

function Block(x){
	this.active = true;
	this.x = floor(x * width / ROWS); 
	this.y = 0
	this.hit = false;
	this.dobl = floor(random(0,5));
	if (this.dobl == 0){
		this.value = balln * 2;
	}
	else{
		this.value = balln;
	}
	this.width = width / ROWS
	this.height = height / COLUMNS
	this.location = createVector(this.x, this.y * height / COLUMNS)
	this.update = function(){
		if (this.hit == true && this.active){
			this.value -= 1;
			this.hit = false;
			if (this.value == 0){
				this.active = false;
			}
		}
		this.show()
	}
	this.show = function(){
		if (this.active){
		//fill with some sine wave stuff
			this.location.y = this.y * height / COLUMNS	
			fill(255)
			rect(this.location.x, this.location.y, this.height, this.width)
			fill(0,0,0)
			text(this.value, this.location.x + this.width / 2, this.location.y + this.height / 2)
		}
	}
}

function mousePressed(){
	if (!shot){
		initspeed = createVector(mouseX - width / 2, mouseY - height);
		initspeed.normalize();
		initspeed.mult(SPEEDMULT);
		shot = true;
		for (var i = 0; i < balln; i++){
			balls[i] = new Ball(i, initspeed);
			speeds[i] = initspeed
		}
	}

}

function Ball(delay, s = 0){
	this.delay = floor(delay * 30 / SPEEDMULT);
	this.location = createVector(width/2, height - BALLSIZE - 10);
	this.gone = false;
	this.shot = false;
	this.value = delay
	this.speed = s
	this.shoot = function(){	
		if (this.delay > 0 && shot){
			this.delay -= 1;
		}
		else if (this.delay == 0 && shot){
			//this.location.add(this.speed);
			this.location.add(speeds[this.value])
			if (!this.shot){
				ballsShot += 1
				this.shot = true
			}
		}
	}
	this.show = function(){
		fill(255);
		ellipse(this.location.x, this.location.y, BALLSIZE);
	}

	this.boundary = function() {
		if (this.location.x + BALLSIZE > width || this.location.x - BALLSIZE < 0){
			//this.speed.x = - this.speed.x;
			speeds[this.value].x = -speeds[this.value].x
		}
		else if(this.location.y - BALLSIZE < 0){
			//this.speed.y = - this.speed.y;
			speeds[this.value].y = -speeds[this.value].y
		}
		else if (this.location.y - BALLSIZE > height && !this.gone){
			this.gone = true;
			ballsGone += 1;
		}
		this.collide()
	}
	this.collide = function(){
		for(var i = 0; i < blocks.length; i++){
			if ((this.location.x >= blocks[i].location.x)
				&& (this.location.x <= blocks[i].location.x + blocks[i].width) && 
				(this.location.y >= blocks[i].location.y )
				&& (this.location.y <= blocks[i].location.y + blocks[i].height
				&& blocks[i].active)){
				templ = Math.abs(this.location.x - blocks[i].location.x );
				tempr = Math.abs(this.location.x - blocks[i].location.x + blocks[i].width)
				tempu = Math.abs(this.location.y - blocks[i].location.y )
				tempd = Math.abs(this.location.y - blocks[i].location.y + blocks[i].height)
				console.log(this.value)
				if (templ < tempr){
					if (tempu < tempd){
						if (tempd > tempr){
							//this.speed.y = -this.speed.y
							console.log(speeds)
							speeds[this.value].y = -speeds[this.value].y
							console.log(speeds)
						}
						else{
							//this.speed.x = -this.speed.x
							speeds[this.value].x = -speeds[this.value].x
						}
					}
					else{
						if (tempd > tempr){
							//this.speed.y = -this.speed.y
							speeds[this.value].y = -speeds[this.value].y
						}
						else{
							//this.speed.x = -this.speed.x
							speeds[this.value].x = -speeds[this.value].x
						}
					}
				}
				else{
					if (tempu < tempd){
						if (tempd > templ){
							//this.speed.y = -this.speed.y
							speeds[this.value].y = -speeds[this.value].y
						}
						else{
							//this.speed.x = -this.speed.x
							speeds[this.value].x = -speeds[this.value].x
						}
					}
					else{
						if (tempd > templ){
							//this.speed.y = -this.speed.y
							speeds[this.value].y = -speeds[this.value].y
						}
						else{
							//this.speed.x = -this.speed.x
							speeds[this.value].x = -speeds[this.value].x
						}
					}
				}
				blocks[i].hit = true
			}
		}
	}
	console.log(speeds)
}	

function draw(){
	background(0);
	fill(255)
	text(balln - ballsShot, width/2, height - BALLSIZE * 2 - 10 , 20)
	if (balls.length == 0){
		shot = false;
		balls[0] = new Ball(0,0)
		for (var i = 0; i < blocks.length; i++){
				blocks[i].y = blocks[i].y + 1
				blocks[i].update()
			}
		for (var i = 0; i < ROWS; i++){
			if (floor(random(3)) == 1){
				blocks.push(new Block(i-1))
			}
		}
	}
	else{
		for (var i = 0; i < balls.length; i++){
			balls[i].show();
			balls[i].shoot();
			balls[i].boundary();
			if (ballsGone == balls.length){
				balls = []
				ballsGone = 0
				ballsShot = 0
				balln += 1;
			}
		}
		for (var i = 0; i < blocks.length; i++){
			blocks[i].update()
		}
	}
}