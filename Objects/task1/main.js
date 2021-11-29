// input: obj, string, value; 
// output: obj;

function addPropertyV1(obj, key, value) {
   obj[key] = value;
   return obj;
}

// test data
const transaction = {
   value: 170,
 };
console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);

// ========
// input: obj, string, value; 
// output: obj;

// function addPropertyV2(obj, key, value) {
//    const sourceObj = { [key]: value };
//    // input: target obj, source obj1; ...source objN
//    // output: target obj;
//    Object.assign(obj, sourceObj)
//    return obj;
// }

// function addPropertyV2(obj, key, value) {
//   return Object.assign(obj, { [key]: value })
// }


// const transaction = {
//    value: 170,
//  };
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);

function addPropertyV3(obj, key, value) {
   return Object.assign({}, obj, { [key]: value })
}
 
// wrong
// function addPropertyWrong(obj, key, value) {
//    const objNew = Object.assign({ [key]: value }, obj);
//    return objNew;
//  }

function addPropertyV4(obj, key, value) {
   return {...obj, [key]: value }
}

const transaction = {
   value: 170,
 };
console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);
