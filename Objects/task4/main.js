// input:obj
// output:arr

// algo
// 1.get keys & values
// 2. add id to every value (map)
// 3. sort

// draft solution
const getCustomersList = obj => {
   const keys = Object.keys(obj);
   
   return  Object.values(obj)
      .map((el, index) =>  ({ ...el, id: keys[index] }))
      .sort((a, b) => a.age - b.age);
};

const getCustomersList = obj => {
   return Object.entries(obj)
      .map(([id, customer]) => ({...customer, id}))
      .sort((a, b) => a.age - b.age)
};

// destructing 
const arr = [10, 22, 11];
const [el1, el2] = arr;

const obj = {
   name: 'James',
   age: 111,
   city: London,
}
const { age, name, city } = obj;
console.log(age);
console.log(name);
console.log(city);

const consumers = {
   'consumer-id-1': {
     name: 'William',
     age: 54,
   },
   'consumer-id-2': {
     name: 'Tom',
     age: 17,
   },
 };

 getCustomersList(consumers)

 
 