class Particule {
	constructor() {
		this.position = {
			x: 0,
			y: 0,
		};
		this.velocity = {
			x: 0,
			y: 0,
		};
		this.force = {
			x: 0,
			y: 0,
		};
		this.mass = 1;
		this.radius = 1;
	}

	// shows the particule
	show() {}

	// updates the position (euler implicit method)
	positionUpdate() {}

	// updates the velocity (euler implicit method)
	velocityUpdate() {}

	// should take a set of forces (array of forces) and sum them up
	forceUpdate() {}
}
