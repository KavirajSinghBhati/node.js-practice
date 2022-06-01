const fs = require("fs");

console.log(fs.readFileSync("common.js", "utf8"));

// this is commonjs syntax

// but if i do something like

// import fs from "fs";

// console.log(fs.readFileSync("common.js", "utf8"));

// it will produce: SyntaxError: Cannot use import statement outside a module
// we can't use import system inside a .js file
// to circumvent the problem, use .mjs extension
