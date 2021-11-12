Array.prototype.mySomeMethod = function (callback) {
	for (let i = 0; i < this.length; i++) {
		let passesTest = callback(this[i], i, this);

		if (passesTest) {
			return true;
		}
	}
	return false;
};

let scores = [7, 8];
let evenNum = scores.mySomeMethod((el) => el % 2 === 0);
console.log(evenNum);
