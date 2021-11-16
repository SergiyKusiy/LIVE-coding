function getSenseOfLife() {
   return 42
}

// const res = getSenseOfLife();
// console.log(res);

console.log(getSenseOfLife());

// ===========
function getSquare(num) {
   return num * num
}
console.log(getSquare(6))
console.log(getSquare(10))
console.log(getSquare(2))

// ===========
let printMessage = (num) => {
   console.log(`I am, ${num} years old`);
}

// test data
console.log(printMessage(50));

// Arrow func
const mult = (firstNum, secondNum) => firstNum * secondNum;
console.log(mult(10, -4));

// func expr
const printMessage = function (num) {
   console.log();
}