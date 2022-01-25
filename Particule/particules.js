let createParticules = (number, canvas, particules) => {
	for (let i = 0; i < number; i++) {
		particules[i] = new Particule(canvas);
	}
};

let showParticules = (particules) => {
	for (let i in particules) {
		particules[i].show();
	}
};

let motionParticules = (particules, deltaT, unit) => {
	for (let i in particules) {
		borderCollision(particules[i], deltaT);
		particules[i].forceUpdate(forces(particules[i]));
		particules[i].velocityUpdate(deltaT);
		particules[i].positionUpdate(deltaT, unit);
		particules[i].show();
	}
};
