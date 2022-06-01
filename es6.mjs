// import export syntax practice

// named exports are imported as below

import { square, cube } from "./module.mjs";
import { numberSquareRoot } from "./module.mjs";

// importing default exports
import addSub from "./module.mjs";

console.log(square(5));
console.log(cube(5));
console.log(numberSquareRoot(16));
console.log(addSub(10, 5));
