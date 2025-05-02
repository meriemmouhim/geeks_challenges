const { greet } = require('./greeting');
const { coloredMessage } = require('./colorful-message');
const { readFile } = require('./read-file');

const greeting = greet('meriem');
console.log(greeting);

const colorfulMessage = coloredMessage();
console.log(colorfulMessage);

readFile();