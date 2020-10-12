// experimenting with classes, made a cube
const Pallete = ['#EA526F','#FFA785','#FFFFFF','#25CED1'];

function setup() {
	createCanvas(windowWidth, windowHeight);
	box1 = new Cube(width/2,height/2);
	box2 = new Cube(width/2,height/2-50);
}

function draw() {
	background(Pallete[3]);
	box1.display(50);
	box2.update();
	box2.display(50);
}

class Cube{
	constructor(x,y) {
	this.xPos = x;
	this.yPos = y;
	this.xVel = 2;
	this.yVel = 1;
	}

	update(){
	this.xPos = this.xPos + this.xVel;
	this.yPos = this.yPos + this.yVel;


	}

	display(size){
		let h = size * 0.5 * sqrt(3);
		for(let i = 0; i < 3; i++)
		{
			fill(Pallete[i]);
			push();
			translate(this.xPos,this.yPos);
	    rotate(TAU/12);
			rotate(i * TAU/3);
	    shearX(-PI/6);
			rect(0,0, -size, -h);
			pop();
		}
}
}
