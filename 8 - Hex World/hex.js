var octagons = []
var octagon_size = 20
var offsetr = 2
var offsetb = 1
var speed = 5
var id = 0
var octagonsn = []


//--------------------
//TODO:
//remove stuff from list to remove lag
// if getFrameRate() less than 50
//  take everything not b and put in new list 
//  set new list to octagons
//--------------------
//add collisions 
//remove midd collisions


function setup(){
	createCanvas(1200,600)
	noStroke()
	fill(255)
	// for (var i = 0; i< 500; i++){
	// 	octagons[octagons.length] = new myoctagon(random(octagon_size*Math.floor(width/octagon_size)),random(0,1),sin(offsetr)*255,0,sin(offsetb)*255,id)
	// }
}
function draw(){
	background(0,0,0)
	if(frameCount % 10 == 0){
		octagons[octagons.length] = new myoctagon(octagon_size*Math.floor(random(width/octagon_size)),random([0,1]),sin(offsetr)*255,0,sin(offsetb)*255,id)
		id +=1
	}
	for(var i = 0; i < octagons.length; i++){
		octagons[i].updateid(i)
		octagons[i].update()
	}
	if (getFrameRate() < 40){
		octagonsn = []
		for(var i = octagons.length-1; i >= 0; i--){
			if (octagons[i].active != 'b'){
				octagonsn.push(octagons[i])
			}
		}
		console.log(octagons.length, octagonsn.length)
		octagons = octagonsn
	}
}
function myoctagon(pos,orient,r,g,b,id){
	this.x = pos
	this.orient = orient
	this.y = this.orient * height
	this.active = true
	this.r = r
	this.g = g
	this.b = b
	this.id = id
	this.type = random([0])
	this.updateid = function(id){
		this.id = id
	}

	this.update = function(){

		if (this.type == 0){

		//fill(this.r,this.g,this.b)
			if (this.active != 'b'){
			polygon(this.x, this.y, octagon_size, 8)
			//movement
			if (this.active){
				if (this.orient == 1){
					this.y -= speed
				}
				else if (this.orient == 0){
					this.y += speed
				} 
			}
			for(var i = 0; i < octagons.length; i++){
					if (((Math.abs(octagons[i].y  - this.y) == octagon_size && Math.abs(octagons[i].x - this.x) == octagon_size))||((this.x == octagons[i].x) && (Math.abs(octagons[i].y - this.y)==octagon_size))){
						var rep = []
						this.active = false
						for(var j = 0; j < octagons.length; j++){
							if (octagons[j].x == this.x){
								if (octagons[j].active == false){
									if(j != this.id){//set to black to remove them
										octagons[j].active = 'b'
									}
								}
							}
						}					
					}
				}
			}
	// detect others
		}
		if (this.type == 1){

		}
	}
}		


function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = -TWO_PI/npoints/2; a < TWO_PI-TWO_PI/npoints/2; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}