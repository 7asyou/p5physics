let canvas = {
	x: 300,
	y: 700,
};
const FR = 60; //frame rate
const deltaT = 1 / FR;
const unit = 5;
let a;
let particules = [];

function setup() {
	createCanvas(canvas.x, canvas.y);
	frameRate(FR);
	a = new Particule(canvas);
	createParticules(3, canvas, particules);
}

function draw() {
	background(220);
	borderCollision(a, deltaT);
	a.velocityUpdate(deltaT);
	a.positionUpdate(deltaT, unit);
	a.show();
	motionParticules(particules, deltaT, unit);
}
