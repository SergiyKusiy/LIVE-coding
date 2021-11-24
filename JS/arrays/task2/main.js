const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func, this (optional)
// output : arr

// callback
// input: el, index (optional)
// output : el
const mapRes = numberList.map(el => el * el);

// bad
// const mapRes = numberList.map(el => {
//    let res = el * el;
//    return res;
// });
console.log(mapRes);

// forEach
// input: func, this (optional)
// output : arr

// callback
// input: el, index (optional)
// output : undef

// numbersList.forEach(el => {
//    if (el > 100) {
//       console.log(el);
//    }
// })

// find
// input: func, this (optional)
// output : el;

// callback
// input: el, index (optional)
// output : boolean

// bad
// numbersList.find(el => {
//    if (el % 2 === 0) {
//       return true
//    }
//    return false;
// })

// good
console.log(numberList.find(el => el % 2 === 0));

// wrong method
console.log(numbersList.filter(el => el % 2 === 0)[0]);

// reduce 
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: func, this(optional)

// callback
// input: acc(num), elem(num)
// output : acc(num)

//bad
const sumRes = transactions.reduce((acc, el) => {
   console.log(acc);
   console.log(el);
   return acc + el;
});

// good
const sumRes = transaction.reduce((acc, el) => acc + el);

