// checkes if the particule is near the border
// input:  particule
// output: if a colision is in action returns an object with a true status and an axis (x or y)
// 		   else it returns false
let isBorderCollision = (particule) => {
	for (let axis in particule.position) {
		if (
			(particule.position[axis] + particule.radius >= canvas[axis] &&
				particule.velocity[axis] > 0) ||
			(particule.position[axis] - particule.radius <= 0 &&
				particule.velocity[axis] < 0)
		) {
			return { status: true, axis: axis };
		}
	}
	return false;
};

// if a collision occures, it updates the velocity attribute of the paticule's velocity to its opposite + it adds the proper change in velocity
// input: a particule
let borderCollision = (particule, deltaT) => {
	let res = isBorderCollision(particule);
	if (res) {
		particule.velocity[res.axis] = -(
			particule.velocity[res.axis] +
			(particule.force[res.axis] * deltaT) / particule.mass
		);
	}
};

let particuleCollision = (particuleA, particuleB) => {
	let relativeVelocity = {
		x: particuleA.velocity.x - particuleB.velocity.x,
		y: particuleA.velocity.y - particuleB.velocity.y,
	};

	let relativePosition = {
		x: particuleB.position.x - particuleA.position.x,
		y: particuleB.position.y - particuleA.position.y,
	};

	if (
		myDistance(particuleA.position, particuleB.position) <=
			particuleA.radius + particuleB.radius &&
		dotProduct(relativePosition, relativeVelocity) >= 0
	) {
		return true;
	}
	return false;
};

let particuleCollisionEnergy = (particuleA, particuleB) => {
	let temp = [{ ...particuleA }, { ...particuleB }];
	let u1 = temp[0].velocity;
	let m1 = temp[0].mass;
	let v1 = {
		x: 0,
		y: 0,
	};
	let u2 = temp[1].velocity;
	let m2 = temp[1].mass;
	let v2 = {
		x: 0,
		y: 0,
	};

	v1.x = ((m1 - m2) / (m1 + m2)) * u1.x + ((2 * m2) / (m1 + m2)) * u2.x;
	v1.y = ((m1 - m2) / (m1 + m2)) * u1.y + ((2 * m2) / (m1 + m2)) * u2.y;

	v2.x = ((2 * m1) / (m1 + m2)) * u1.x + ((m2 - m1) / (m1 + m2)) * u2.x;
	v2.y = ((2 * m1) / (m1 + m2)) * u1.y + ((m2 - m1) / (m1 + m2)) * u2.y;
	particuleA.velocity = v1;
	particuleB.velocity = v2;
};

let particuleCollisionUpdate = (particules) => {
	for (let i = 0; i < particules.length - 1; i++) {
		for (let j = i + 1; j < particules.length; j++) {
			if (particuleCollision(particules[i], particules[j])) {
				particuleCollisionEnergy(particules[i], particules[j]);
				console.log("collision");
			}
		}
	}
};

//! unused code
// border collision using seperate checking function for each axis
let borderColisionSecondary = (particule, deltaT) => {
	if (isBorderCollisionHorizontal(particule)) {
		particule.velocity.y = -(
			particule.velocity.y +
			(particule.force.y * deltaT) / particule.mass
		);
	} else if (isBorderCollisionVertical(particule)) {
		particule.velocity.x =
			-particule.velocity.x +
			(particule.force.x * deltaT) / particule.mass;
	}
};

// checks if there is a collision with the horizontal borders
// input: particule
let isBorderCollisionHorizontal = (particule) => {
	if (
		(particule.position.y + particule.radius >= canvas.y &&
			particule.velocity.y > 0) ||
		(particule.position.y - particule.radius <= 0 &&
			particule.velocity.y < 0)
	) {
		return true;
	}
	return false;
};

// checks if there is a collision with the vertical borders
// input: particule
let isBorderCollisionVertical = (particule) => {
	if (
		(particule.position.x + particule.radius >= canvas.x &&
			particule.velocity.x > 0) ||
		(particule.position.x - particule.radius <= 0 &&
			particule.velocity.x < 0)
	) {
		return true;
	}
	return false;
};
