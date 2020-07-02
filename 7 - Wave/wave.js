nodes = []
function setup(){
	createCanvas(600,600)
	noStroke()
}
function draw(){
	background(0,0,0,50)
	if (frameCount % 30 == 1){
		for (var i = 0; i < 6.28; i+=0.3){
			nodes.push(new wave(i))
		}
	}
	for (var i = nodes.length-1; i >= 0; i--){
		nodes[i].show()
		nodes[i].move()
		nodes[i].fade()
		if(nodes[i].c < 1){
			nodes.pop(nodes[i])
			console.log('test')
		}
	}

}
function wave(t){
	this.xi = sin(t)
	this.yi = cos(t)
	this.x = width/2 + this.xi
	this.y = width/2 + this.yi
	this.c = 255/2
	this.show = function(){
		fill(this.c, this.c, this.c, 80)
		ellipse(this.x,this.y,4)
	}
	this.move = function(){
		this.x += this.xi
		this.y += this.yi
	}
	this.fade = function(){
		this.c = this.c / 1.03
	}
}