bows = []

function bow(a){
	this.mg = 31
	this.fre = 30
	this.x = this.mg * sin(frameCount/this.fre + a)+width/2
	this.y = this.mg * cos(frameCount/this.fre + a)+height/2
	this.sz = 0
	this.szi = 1.9
	this.len = dist(height, width, 0, 0)
	this.show = function(){
		noFill()
		strokeWeight(8)
		//stroke(sin(20*this.sz/this.len) * 255, 0, 255 * sin((25*this.sz/this.len) +0.6))
		stroke(sin(20*this.sz/this.len + a) * 255, 0, (a+3.14) * sin(20*this.sz/this.len + a) * 255)
		//stroke(255,0,100)
		ellipse(this.x, this.y, this.sz)
		this.sz += this.szi
	}
	this.check = function(a){
		if(this.sz > this.mg+this.len){
			bows.splice(a, 1)
		}
	}
}

function setup() {
  	createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
  	background(0)
  	if (frameCount % 4 == 0){
  		bows.push(new bow(0))
  		bows.push(new bow(3.14))
	}
  	for(var i = bows.length - 1 ; i > 0; i--){
  		bows[i].show()
  		bows[i].check(i)
  	}
}