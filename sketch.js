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
	createParticules(5, canvas, particules);
}

function draw() {
	background(220);
	particuleCollisionUpdate(particules);
	motionParticules(particules, deltaT, unit);
}
