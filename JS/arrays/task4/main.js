
// input: arr, func
// output: arr

// callback
// input: el, index, array 
// output: boolean

// algo
// 1. iterate arr
// 2. apply callback for every el
// 3. if callback true add to the new arr



const mapArrayElements = (arr, callback) => {
   const result = [];
   for (let index = 0; index < arr.length; index += 1) {
      const el = arr[index];
      if (callback(el, index, arr)) {
         result.push(el.length)
      }
   }
   return result
};
let array = ["cat","dog","fish"];
console.log(mapArrayElements(array, (el) => el.length));





