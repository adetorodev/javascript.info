// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// Usage:
// let user = new User("John");
// console.log(user.sayHi());

// console.log(typeof User) // function

// In JavaScript, a class is a kind of a function.

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
// class is a function
console.log(typeof User); // function
// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true
// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // console.log(this.name);
// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// rewriting class User in pure functions
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// any function prototype has constructor property by default,
// so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function () {
  console.log(this.name);
};
// Usage:
let user = new User("John");
user.sayHi();



// 1. First, a function created by class is labelled
// by a special internal property
// [[FunctionKind]]:"classConstructor"

// Unlike a regular function, a class constructor
// can’t be called without new

class User {
  constructor() {}
}
alert(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'

// 2. Class methods are non-enumerable. A class definition 
// sets enumerable flag to false for all 
// methods in the "prototype" .

// 3. Classes always use strict . All code inside the 
// class construct is automatically in strict
// mode.
