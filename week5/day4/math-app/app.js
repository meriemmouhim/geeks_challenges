const _ = require('lodash');
const math = require('./math');

console.log("5 + 3 =", math.add(5, 3));
console.log("5 * 3 =", math.multiply(5, 3));
console.log("Lodash sum:", _.sum([1, 2, 3, 4, 5]));
