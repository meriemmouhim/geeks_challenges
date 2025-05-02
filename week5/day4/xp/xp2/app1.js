import { people as ppl } from './data.js'
const averageAge = ppl.reduce((sum, person) => sum + person.age, 0) / ppl.length;
console.log(`the average age is: ${averageAge.toFixed(1)}`);