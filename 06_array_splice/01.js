// change original
// splice(start, count, item to add)
// 1. remove item from original, and return new array
// 2. add item
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal4 = [1, 2, 3, 4, 5];

// returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2);

// returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3);

//returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, 'a', 'b', 'c');

//
let arrayIntegers4 = arrayIntegersOriginal4.splice(3, 2, 'a', 'b', 'c');
console.log(arrayIntegers4);
console.log(arrayIntegersOriginal4);
