var bars = []
var spe = 20
var fre = 0.01
var mg = 150
var m1x = 0
var m1y = 0
var m2x = 0
var m2y = 0

function m12(){
  if(frameCount % 2 == 0){
    m1x = mouseX
    m1y = mouseY
  }
  if(frameCount % 2 == 1){
    m2x = mouseX
    m2y = mouseY
  }
}

function bar(x){
	this.x = x
	this.y = height/2
	this.show = function(){
		noStroke()
		fill(255*sin((this.x-30)/10),0,255*sin((this.x+30)/10))
		rect(this.x, mg*sin( (this.x*fre) + (frameCount/spe) )+height/2, 2, mg*sin( (this.x*fre) + (frameCount/spe) ) )
	}
}

function setup() {
  	createCanvas(window.innerWidth, window.innerHeight)
  	for (var i = 0; i < width; i++){
  		bars.push(new bar(i))
  	}
}

function draw() {
  	background(0)
  	for (var i = 0; i < bars.length; i++){
  		bars[i].show()
  	}
    //m12()
    //mg = dist(m1x, m1y, m2x, m2y)
}