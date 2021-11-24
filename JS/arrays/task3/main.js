// const array = [1, 2, 3, 4];
// console.log(array);

// input: arr, func
// output: arr

// callback
// input: el, index, array 
// output: boolean

// algo
// 1. iterate arr
// 2. apply callback for every el
// 3. if callback true add to the new arr
const filterArrayElements = (arr, callback) => {
   const result = [];
   for (let index = 0; index < arr.length; index += 1) {
      const el = arr[index];
      if (callback(el, index, arr)) {
         result.push(el)
      }
   }
   return result
};
 
// test data
const array = [1, 2, 3, 4];
console.log(filterArrayElements(array, (el) => el > 2));

// 3 
filterArrayElements(arr, (el, index) => {
   if (index < 3) {
      return true;
   }
   return false
})