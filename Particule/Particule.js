class Particule {
	constructor(canvas) {
		this.position = {
			x: random(50, canvas.x - 50),
			y: random(50, canvas.y - 50),
		};
		this.velocity = {
			x: random(-150, 150),
			y: random(-600, 600),
			// x: 0,
			// y: 0,
		};
		this.force = {
			x: 0,
			y: 10000,
		};
		this.mass = random(10, 60);
		this.diameter = this.mass;
		this.radius = this.diameter / 2;
		this.color = random(255);
	}

	// shows the particule
	show() {
		stroke(2);
		fill(this.color);
		circle(this.position.x, this.position.y, this.diameter);
	}

	// updates the position (euler implicit method)
	// it takes:
	//	deltaT: time unite = 1/frameRate
	// 	unit: unit destance
	positionUpdate(deltaT, unit) {
		for (let axis in this.position) {
			this.position[axis] += this.velocity[axis] * deltaT * unit;
		}
	}

	// updates the velocity (euler implicit method)
	// it takes:
	//	deltaT: time unite = 1/frameRate
	velocityUpdate(deltaT) {
		for (let axis in this.velocity) {
			this.velocity[axis] += (this.force[axis] * deltaT) / this.mass;
		}
	}

	// should take a set of forces (array of forces) and sum them up
	forceUpdate() {}
}
