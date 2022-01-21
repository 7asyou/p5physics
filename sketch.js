const canvasHeight = 700;
const canvasWidth = 500;

const FR = 60; //frame rate
const deltaT = 1 / FR;
const unit = 5;
let a, b;
function setup() {
	createCanvas(canvasWidth, canvasHeight);
	frameRate(FR);
	a = new Particule(canvasWidth, canvasHeight);
	b = new Particule(canvasWidth, canvasHeight);
}

function draw() {
	background(220);
	a.show();
	a.positionUpdate(deltaT, unit);
	a.velocityUpdate(deltaT);
	b.show();
	b.positionUpdate(deltaT, unit);
	b.velocityUpdate(deltaT);
}
