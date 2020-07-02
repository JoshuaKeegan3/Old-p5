width=720
height=500
waves = []
freq = 0.001
tobewaves = []
function setup() {
	createCanvas(720, 500);
  	background(0);
 	fill(255)
 	stroke(255)
 	waves.push(new wave(0,width*freq,height,height*freq,0))
 	waves.push(new wave(0,width*freq,height,height*freq,0))
}

function wave(a,b,c,d,e){
	this.x=a
	this.xi = b
	this.y=c
	this.xtoy = d
	this.xtoyi=e
	this.draw = function(){
		while (this.x < width || this.y > 0){
			line(this.x,this.y,this.x+this.xi,this.y-this.xtoy)
			this.x+=this.xi
			this.y-=this.xtoy
			this.xtoy+=this.xtoyi
		}
	}
	this.duplicateup = function(){
		waves.push(new wave(a,b,c-0.01,d,e+0.001))
	}
	this.duplicateup = function(){
		waves.push(new wave(a,b,c+0.01,d,e-0.001))
	}
}

function draw() {
	if(waves.length < 50){
		waves[waves.length-1].draw()
		waves[waves.length-1].duplicateup()
	}
	else if(waves.length == 50){
		waves.push(new wave(0,width*freq,height,height*freq,0))
	}
	else if(waves.length > 50 && waves.length < 100){
		waves[waves.length-1].draw()
		waves[waves.length-1].duplicatedown()
	}
	else{
	 	waves.push(new wave(0,width*freq,height,height*freq,0))
	}
}

//

// var points = []
// sides = 4
// turniness = 300
// function setup() {
//    createCanvas(window.innerWidth, window.innerHeight)
//    background(0)
//    points = [[0, 0], [0, height-1], [width-1, height-1], [width-1, 0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
//    //points = [[0, 0], [0, 400], [400, 400], [400, 0], [0,0], [0, 400], [400, 400], [400, 0], [0,0], [0,0]]
// }

// function draw() {
//    for (var i = 0; i < sides + 1; i++){
//        stroke(frameCount/turniness*100,frameCount/turniness*100,frameCount/turniness*100)
//       line(points[i][0], points[i][1], points[i+1][0], points[i+1][1])
//    }

//    var alt = 0

//    for (var i = 0; i < sides + 1; i++){
//     points[i + sides + 1][0] = (1/turniness) * ((turniness-1)*points[i][0] + points[i+1][0])
//        points[i + sides + 1][1] = (1/turniness) * ((turniness-1)*points[i][1] + points[i+1][1])
     
//    }
//     for (var i = 0; i < sides + 1; i++){
//        points[i][0] = points[i + sides + 1][0]
//        points[i][1] = points[i + sides + 1][1]
//     }
//     points[sides][0] = points[0][0]
//     points[sides][1] = points[0][1]
// }