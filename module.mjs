// suppose you want to export out these 2 function together

function square(num) {
  return num ** 2;
}

function cube(num) {
  return num ** 3;
}

function sqrt(num) {
  return Math.sqrt(num);
}

// to do that you can use named exports

export { square, cube };

// if you want to export out a function with different name, use this

export { sqrt as numberSquareRoot };

// default export (only one per module)

function addSub(num1, num2) {
  return [num1 + num2, num1 - num2];
}

export default addSub;
