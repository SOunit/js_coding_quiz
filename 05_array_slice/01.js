// array slice
// 1. return new array
// 2. no change to original
// 3. slice(start, end) * end is not included
// 4. slice(start) = until end of array
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 2));
console.log(arr.slice(2));
console.log(arr);
