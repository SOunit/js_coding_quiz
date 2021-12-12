// 1. object contructor
// not recommended
let obj1 = new Object();
console.log(obj1);

// 2. object create method
// pass prototype
let obj2 = Object.create(null);
console.log(obj2);

// 3. object literal syntax
let obj3 = {};
console.log(obj3);

// 4. function constructor
function Person(name) {
  this.name = name;
  this.age = 21;
}
let obj4 = new Person('Jack');
console.log(obj4);

// 5. function constructor with prototype
function Person5() {}
Person5.prototype.name = 'Jack';
var obj5 = new Person5();
console.log(obj5);

// 6. ES6 class feature
class Person6 {
  constructor(name) {
    this.name = name;
  }
}
let person6 = new Person('Jack');
console.log(person6);