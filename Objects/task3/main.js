// input: obj, obj
// output: boolean

// algo
// 0. compare length, if not equal => false
// 1. iterate obj1 keys
// 2. compare value1 != value2
function compareObjects(obj1, obj2) {
   const key1 = Object.keys(obj1);
   const key2 = Object.keys(obj2);
  if(key1.length !== key2.length) {
    return false;
  }
  let result = true;
  key1.forEach(elem => {
    if(obj1[elem] !== obj2[elem]) {
     return  result = false
    }
  })
   return result
 }

const obj1 = {
   name: 'Tom',
   age: 17,
 };
 
 const obj2 = {
   name: 'Bob',
   age: 17,
 };
 
 const obj3 = {
   name: 'Bob',
   age: 17,
   student: false,
 };
 
 const obj4 = {
   name: 'Tom',
   age: 17,
 };
 
 compareObjects(obj1, obj2); // ==> false
 compareObjects(obj2, obj3); // ==> false
 compareObjects(obj1, obj4); // ==> true
 