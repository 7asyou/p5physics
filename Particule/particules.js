let createParticules = (number, canvas, particules) => {
	for (let i = 0; i < number; i++) {
		particules[i] = new Particule(canvas);
	}
};
