let friction = (frictionConstant, particule) => {
	let res = {
		x: 0,
		y: 0,
	};
	for (const axis in res) {
		res[axis] = -frictionConstant * particule.velocity[axis];
	}
	return res;
};

let gravity = (g, particule) => {
	let res = {
		x: 0,
		y: 0,
	};
	res.y = g * particule.mass;

	return res;
};

let gravitation = (gravitationalConstant, particule) => {
	let res = {
		x: 0,
		y: 0,
	};
	return res * 10;
};

let forces = (particule) => {
	return [gravity(g, particule)];
};
