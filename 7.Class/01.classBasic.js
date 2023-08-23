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

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// class is a function
// console.log(typeof User); // function
// ...or, more precisely, the constructor method
// console.log(User === User.prototype.constructor); // true
// The methods are in User.prototype, e.g:
// console.log(User.prototype.sayHi); // console.log(this.name);
// there are exactly two methods in the prototype
// console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// rewriting class User in pure functions
// 1. Create constructor function
// function User(name) {
//   this.name = name;
// }
// any function prototype has constructor property by default,
// so we don't need to create it
// 2. Add the method to prototype
// User.prototype.sayHi = function () {
//   console.log(this.name);
// };
// Usage:
// let user = new User("John");
// user.sayHi();

// 1. First, a function created by class is labelled
// by a special internal property
// [[FunctionKind]]:"classConstructor"

// Unlike a regular function, a class constructor
// can’t be called without new

// class User {
//   constructor() {}
// }
// console.log(typeof User); // function
// User(); // Error: Class constructor User cannot be invoked without 'new'

// 2. Class methods are non-enumerable. A class definition
// sets enumerable flag to false for all
// methods in the "prototype" .

// 3. Classes always use strict . All code inside the
// class construct is automatically in strict mode.

// / Class Expression

// let User = class {
//   sayHi() {
//     console.log("Hello");
//   }
// };
// Class expression may not have name, or may have  name
// if it has name, it is visible inside the class only

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
// let Userb = class MyClass {
//   sayHi() {
//     console.log(MyClass); // MyClass is visible only inside the class
//   }
// };
// new User().sayHi(); // works, shows MyClass definition
// console.log(MyClass); // error, MyClass not visible outside of the class

// dynamic class

// function makeClass(phrase) {
//   // declare a class and return it
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }
// Create a new class
// let Userc = makeClass("Hello");
// new Userc().sayHi(); // Hello

// Getters/setters, other shorthands
// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }
// let user = new User("John");
// console.log(user.name); // John
// user = new User(""); // Name too short.

// Object.defineProperties(User.prototype, {
//   name: {
//     get() {
//       return this._name;
//     },
//     set(name) {
//       // ...
//     },
//   },
// });

function f() {
  return "sayHi";
}
class User {
  [f()]() {
    console.log("Hello");
  }
}
new User().sayHi();
