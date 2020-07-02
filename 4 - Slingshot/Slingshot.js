var ball = new Ball()
var score = new Score()
shot = false
chargeing = false
shootfromx = 0
shootfromy = 0
function setup() {
  createCanvas(720, 500);
  background(0);
  fill(255)
  ball.ballsetup()
  stroke(0)
}

//TO DO LIST:
//
//Make on click a point saved
//from that point draw a line to the mouse x
//fire on second click
//calculate an x plus y speed from the points
//change background color by score
//add a reset for when the ball goes off the screen
function Ball(){
	this.startx = 50;
	this.starty = 250;
	this.yspeed = 0;
	this.xspeed = 0;
	this.x = this.startx
	this.y = this.starty
	this.shootfromx = 0
	this.shootfromy = 0
	this.ballsetup = function(){
		ellipse(this.startx,this.starty)
	}
	this.charge = function(){
		fill(255)
		if (chargeing == false && this.x < 300){
			background(0)
			ellipse(mouseX,mouseY,5)
			ellipse(mouseX,mouseY,5)
		}	
		if (shot != true && chargeing != true){
			this.x = mouseX
			this.y = mouseY
		}
		if (chargeing == true){
			background(0)
			stroke(255)
			line(shootfromx, shootfromy, mouseX, mouseY)
			stroke(0)
		}
	}
	this.speed = function(){
		this.xspeed = (shootfromx - mouseX) 
		this.yspeed = (shootfromy - mouseY) //make this work
		this.xspeed /= 100
		this.yspeed /= 100
	}
	this.shoot = function(){
		if (shot){
			fill(255)
			background(score.return()/12,0,0)//make agreithim to make the color loop through all the colors
			ellipse(this.x,this.y,5)
			this.yspeed += 0.01
			score.update(this.xspeed)
			if (this.x >= 300){	
				this.y += this.yspeed
			}
			else{
				this.x += this.xspeed
				this.y += this.yspeed
			}
		}
	}
}
function Score(){
	this.score = 0
	this.show = function(){
		fill(255)
		text(this.score, 690, 10)
	}
	this.update = function(n){
		this.score += n
	}
	this.return = function(){
		return this.score
	}
}

function mouseReleased(){
	if (chargeing == true){
		shot = true
		ball.speed()
	}
	else{
		chargeing = true
		shootfromx = mouseX
		shootfromy = mouseY
	}
}
function draw() {
	ball.charge()
	ball.shoot()
	score.show()
}

