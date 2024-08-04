const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, next) => total + next, 0)
};

const multiply = function(array) {
  return array.reduce((total, next) => total * next);
};

const power = function(a, b) {
	return b == 0 ? 1 : power(a, b-1) * a;
};

const factorial = function(a) {
  return a == 0 ? 1 : factorial(a - 1) * a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
