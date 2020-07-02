var balls = [];
var Lpaddle;
var Rpaddle;
paddleWidth = 3
paddleHeight = 50
p1Score = 0
p2Score = 0
function setup(){
	createCanvas(320, 200);
	for (var i = 0; i < 1; i++){
		balls[i] = new Ball();
	}
	lPaddle = new Paddle('l');
	rPaddle = new Paddle('r'); 
	background(0)
	noStroke()
}

function draw(){
	background(0)
	lPaddle.show(lPaddle.x, lPaddle.y);
	lPaddle.move('l');
	rPaddle.show(rPaddle.x, rPaddle.y);
	rPaddle.move('r');
	for (var i = 0; i < balls.length; i++){
		balls[i].show(balls[i].x, balls[i].y);
		balls[i].update(i);
		balls[i].bounce(rPaddle.x,rPaddle.y,lPaddle.x,lPaddle.y)
	}
}

function Ball(){
	this.x = width/2;
	this.y = height/2; 
	this.xspeed = random(1,2);
	this.yspeed = 3 - this.xspeed
	this.change = int(random(1,3))
	this.yspeed *= Math.pow(-1, this.change)
	this.change = int(random(1,3))
	this.xspeed *= Math.pow(-1, this.change)
	this.show = function(x, y){
		fill(255)
		this.x = x;
		this.y = y;
		ellipse(this.x, this.y, 5);
	}
	this.update = function(i){
		this.y += this.yspeed;
		this.x += this.xspeed;
		if (this.x > width){
			balls[i] = new Ball()
			p1Score += 1
		}
		else if (this.x < 0){
			balls[i] = new Ball()
			p2Score += 1
		}
		text(p1Score, 20, 20, 20 )
		text(p2Score, width - 20, 20, 20)
		if (this.xspeed > 0){
			this.xspeed += 0.001
		}else{
			this.xspeed += 0.001
		}
		if (this.yspeed > 0){
			this.yspeed += 0.001
		}else{
			this.yspeed -= 0.001
		}
	}
	this.bounce = function(rx,ry,lx,ly){
		//Add a boost off the paddle to stop sticky bug//
		//acutally teleport the ball to the edge pf the paddle//
		//ball bounces behind right paddle change signs

		//make it so the ball bounces in a different direction depending on where it hits the paddle
		//do this by seting the y speed to the point the ball is in relation to the paddle's position 

		this.rx = rx
		this.ry = ry -0.01
		if (this.y < 0 || this.y > height){
			this.yspeed *= -1;
		}
		if (this.x <= this.rx + paddleWidth && this.x >= this.rx){
			if (this.y <= this.ry + paddleHeight && this.y >= this.ry){
				this.xspeed *= -1
			}
		}
		this.lx = lx + paddleWidth + 0.01
		this.ly = ly
		if (this.x <= this.lx + paddleWidth && this.x >= this.lx){
			if (this.y <= this.ly + paddleHeight && this.y >= this.ly){
				this.xspeed *= -1
			}
		}
	}
}

function Paddle(p){
	if (p == 'l'){
		this.x = 10;
	}
	else if (p == 'r'){
		this.x = width-10;
	}
	this.speed = 0;
	this.paddleWidth = paddleWidth
	this.paddleHeight = paddleHeight
	this.y = height/2
	this.show = function(){
		rect(this.x, this.y, this.paddleWidth, this.paddleHeight);
	}
	this.move = function(p){
		// Stop the paddles from moving off the screen (please)(pretty please)

		//if (false) runs
		//if (p==a) doesnt run
		//if (false == true) doesnt run
		//in conclusion I dont think that < is a comparitive in p5js I think it needs to be a comparision '=='

		//OMG IM A FRICKING GENIUS!!!!
		//WTF WHY DOES THAT WORK?!?!?!?!
		//SO MUCH TIME HAS BEEN WASTED

		//constrain(this.y += this.speed, (height - paddleHeight), 0)
		//Math.max(0, Math.min(this.y += this.speed, height - paddleHeight))
		//constrain(this.y, 0, (height - paddleHeight))
		if ((this.y + this.speed) < (height - paddleHeight) && (this.y + this.speed) > 0){
			this.y += this.speed
		}

		// this.y += this.speed
		if (p == 'r'){
			if (keyCode === UP_ARROW){
				this.speed = -3;
			}
			else if (keyCode === DOWN_ARROW) {
				this.speed = 3;
			}
		}		
		else if (p == 'l'){
			if (key === 'w'){
				this.speed = -3;
			}
			else if (key === 's') {
				this.speed = 3;
			}
		}		
	}	
	this.stop = function(){
		this.speed = 0
	}
}
function keyReleased() {
	if (keyCode == UP_ARROW || keyCode == DOWN_ARROW){
		keyCode = TAB
		rPaddle.stop()
	}
	else if (key === 'W' || key === 'S'){
		key = 't'
		lPaddle.stop()
	}
}