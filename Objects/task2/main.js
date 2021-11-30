// algo
// 1. crate empty object
// 2. iterate arrays & put key/value to the obj

// BAD
// function buildObject(keysList, valuesList) {
//    const res = {};

//    for (let index = 0; index < keysList.length; index++) {
//       res[keysList[index]] = valuesList[index]
//    }
//    return res;
// }

const keys = ['name', 'country', 'car'];
const values = ['Jack', 'USA', true];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

function buildObject(keysList, valuesList) {
  return  keysList.reduce((acc, key, index) => 
      ({ ...acc, [key]: valuesList[index]}), {});
}
// test data 
const keys = ['name', 'country', 'car'];
const values = ['Jack', 'USA', true];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }