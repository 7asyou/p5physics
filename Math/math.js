let myRand = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

let dotProduct = (vectA, vectB) => {
	let dp = 0;
	for (let axis in vectA) {
		dp += vectA[axis] * vectB[axis];
	}
	return dp;
};

let myDistance = (a, b) => {
	let distanceSquared = 0;
	for (let axis in a) {
		distanceSquared += (a[axis] - b[axis]) ** 2;
	}
	return Math.sqrt(distanceSquared);
};
