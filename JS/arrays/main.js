const numbersList = [1, 2, 3, 4, 5];

// input: num;
// output: num;

const res = numbersList.push(222);
console.log(res);

// =======
// input: none;
// output: num;

const numbersList2 = [1, 2, 3, 4, 5];
console.log(numbersList2.shift());



// =======
// input: num, num, func;
// output: undef;

// callback
// input: num;
// output: undef;
function sum(from, to, printer) {
   let result = 0;
   for (let index = from; index <= to; index += 1) {
      result += index;
   }
   printer(result)
}
 

// test data
const num1 = 5;
const num2 = 10;

function printResultExample(res) {
   console.log('Result is ' + res);
   // alert(res)
}
sum(num1, num2, printResultExample)


// =======
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func;
// output: arr;

// callback
// input: num, index(optional), array(optional);
// output: boolean;

// bad
// const filterRes = anotherNumbersList.filter(function filterCallback(num) {
//    if (num > 5) {
//       return true;
//    } else {
//       return false;
//    }
// });
// console.log(filterRes);

// good
const filterRes = anotherNumbersList.filter(el => el > 10);
console.log(filterRes);
