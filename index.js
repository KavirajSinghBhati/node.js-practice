const { makeAFile } = require("./utils");
const fs = require("fs");

makeAFile("test.txt", "I made this file using fs in node.js");
console.log(fs.readdirSync("."));
console.log(fs.readFileSync("index.js", "utf8"));
// prints contents of a file
