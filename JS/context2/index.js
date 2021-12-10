function printMessage(country, city) {
   console.log(this);
 
   console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
 }
 
 const user = {
   firstName: 'Andrey',
   age: 111,
   tempFunc: 'some secret data',
};

// input: obj, args (optional)
// output:  func
const bindedFunc = printMessage.bind(user);
bindedFunc('Ukraine', 'Odessa');

// optional 2
const bindedFunc2 = printMessage.bind(user, 'UK');
bindedFunc2('London');

// optional 3
const bindedFunc2 = printMessage.bind(user, 'UK', 'London');
bindedFunc2();

// input: func, obj, args (optional)
// output:  func
function myBind(func, context, ...bindArgs) {
   return function (...funcArgs) {
      // input: obj, array;
      // output: result of func;
      func.apply(context, [...bindArgs, ...funcArgs])
   }
}

// test data
// option 1
const myBindedFunc1 = myBind(printMessage, user);
myBindedFunc1('Ukraine', 'Odessa')
// option 3
const myBindedFunc3 = myBind(printMessage, user, 'UK', 'Liverpool');
console.log(myBindedFunc);
