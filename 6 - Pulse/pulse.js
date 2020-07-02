// reset = true
// colour = 0
// var redy;
// var greeny;
// var bluey;
// cwidth = 0
// circles = []
// function setup() {
// 	createCanvas(720, 500);
// 	background(0);
// 	fill(255)
// 	stroke(255)
// 	line(0,0,width,height,1)
// 	line(0,height,width,0,1)
// }
// function Red(){
// 	this.g = height/width
// 	this.x = 0
// 	this.y = height
// 	this.move = function(){
// 		fill(255,0,0)
// 		reset = false
// 		stroke(255)
// 		ellipse(this.x-50+1,this.y+this.g*50,0.8)
// 		if(this.x < width/2){
// 			stroke(255,0,0)
// 			ellipse(this.x+1,this.y,0.9)
// 		}
// 		this.y-=this.g
// 		this.x+=1
// 		if(this.x-50 >= width/2){
// 			circles.push([255,0,0])
// 			reset=true
// 		}
// 	}
// }
// function Green(){
// 	this.g = height/width
// 	this.x = 0
// 	this.y = height
// 	this.move = function(){
// 		fill(0,255,0)
// 		reset = false
// 		stroke(255)
// 		ellipse(this.x-50+1,this.y+this.g*50,0.8)
// 		if(this.x < width/2){
// 			stroke(0,255,0)
// 			ellipse(this.x+1,this.y,0.9)
// 		}
// 		this.y-=this.g
// 		this.x+=1
// 		if(this.x-50 >= width/2){
// 			circles.push([0,255,0])
// 			reset=true
// 		}
// 	}
// }
// function Blue(){
// 	this.g = height/width
// 	this.x = 0
// 	this.y = height
// 	this.move = function(){
// 		fill(0,0,255)
// 		reset = false
// 		stroke(255)
// 		ellipse(this.x-50+1,this.y+this.g*50,0.8)
// 		if(this.x < width/2){
// 			stroke(0,0,255)
// 			ellipse(this.x+1,this.y,0.9)
// 		}
// 		this.y-=this.g
// 		this.x+=1
// 		if(this.x-50 >= width/2){
// 			circles.push([0,0,255])
// 			reset=true
// 		}
// 	}
// }
// function draw() {
// 	for(var i =0;i<circles.length;i++){
// 		stroke(circles[i][0],circles[i][1],circles[i][2])
// 		ellipse(width/2,height/2,(circles.length-i)*cwidth)
// 	}
// 	if(reset){
// 		colour = int(random(0,3))
// 		redy = new Red()
// 		bluey = new Blue()
// 		greeny = new Green()
// 	}
// 	reset=false
// 	if(colour == 1){
// 		redy.move()
// 	}
// 	else if(colour == 2){
// 		bluey.move()
// 	}
// 	else{
// 		greeny.move()
// 	}
// }

reset = true;
var redy;
var greeny;
var bluey;
cwidth = 1;
circles = [];
function setup() {
	createCanvas(720, 500);
	background(0);
	fill(255)
	stroke(255)
	line(0,0,width,height,1)
	line(0,height,width,0,1)
	lines = []
}
function Red(){
	this.g = height/width
	this.x = 0
	this.y = height
	this.move = function(){
		fill(255,0,0)
		reset = false
		stroke(255)
		ellipse(this.x-50+1,this.y+this.g*50,0.8)
		if(this.x < (width-circles.length*cwidth)/2){
			stroke(255,0,0)
			ellipse(this.x+1,this.y,0.9)
		}
		this.y-=this.g
		this.x+=1
		if(this.x-50 >= (width-circles.length*cwidth)/2){
			circles.push([255,0,0])
			reset=true
		}
	}
}
function Green(){
	this.g = height/width
	this.x = 0
	this.y = height
	this.move = function(){
		fill(0,255,0)
		reset = false
		stroke(255)
		ellipse(this.x-50+1,this.y+this.g*50,0.8)
		if(this.x <(width-circles.length*cwidth)/2){
			stroke(0,255,0)
			ellipse(this.x+1,this.y,0.9)
		}
		this.y-=this.g
		this.x+=1
		if(this.x-50 >= (width-circles.length*cwidth)/2){
			circles.push([0,255,0])
			reset=true
		}
	}
}
function Blue(){
	this.g = height/width
	this.x = 0
	this.y = height
	this.move = function(){
		fill(0,0,255)
		reset = false
		stroke(255)
		ellipse(this.x-50+1,this.y+this.g*50,0.8)
		if(this.x <(width-circles.length*cwidth)/2){
			stroke(0,0,255)
			ellipse(this.x+1,this.y,0.9)
		}
		this.y-=this.g
		this.x+=1
		if(this.x-50 >= (width-circles.length*cwidth)/2){
			circles.push([0,0,255])
			reset=true
		}
	}
}
function draw() {
	if(frameCount == 1){
		colour = int(random(0,3))
		if(colour == 0){
			lines[i] = new Red()
		}
		else if(colour == 1){
			lines[i] = new Blue()
		}
		else{
			lines[i] = new Green()
		}
	}
	else if(frameCount == 150){
		colour = int(random(0,3))
		if(colour == 0){
			lines[i] = new Red()
		}
		else if(colour == 1){
			lines[i] = new Blue()
		}
		else{
			lines[i] = new Green()
		}
	}	
	for(var i=0; i<lines.length; i++){
		console.log('test')
		console.log(i)
		if(reset){
			colour = int(random(0,3))
			if(colour == 0){
				lines[i] = new Red()
			}
			else if(colour == 1){
				lines[i] = new Blue()
			}
			else{
				lines[i] = new Green()
			}
			for(var i =0;i<circles.length;i++){
				stroke(circles[i][0],circles[i][1],circles[i][2])
				ellipse(width/2,height/2,(circles.length-i)*cwidth)
			}
		}
		if (lines.length == 4){
			reset=false
		}

		lines[i].move()
	}
}
