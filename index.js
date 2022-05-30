// CommonJS module syntax (not ES6)
const util = require("./utils");

console.log(util);
// { a: 100, b: 20, addTwoNumbers: [Function: addTwoNumbers] }

console.log(util.addTwoNumbers(20, 3));
