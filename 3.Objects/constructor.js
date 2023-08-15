// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// let user = new User("Jack");
// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

/**
 When a function is executed as new User(...) , it does the following steps:
1. A new empty object is created and assigned to this .
2. The function body executes. Usually it modifies this , adds new properties to it.
3. The value of this is returned.


In other words, new User(...) does something like:

function User(name) {
// this = {}; (implicitly)
// add properties to this
this.name = name;
this.isAdmin = false;
// return this; (implicitly)
}

So the result of new User("Jack") is the same object as:

let user = {
name: "Jack",
isAdmin: false
};
 */

// Return from constructors

// Usually, constructors do not have a return
// statement. Their task is to write all necessary stuff
// into this , and it automatically becomes the result.

// If return is called with object, then it is returned instead of this .
// If return is called with a primitive, it’s ignored.

// function BigUser() {
//   this.name = "John";
//   return { name: "Godzilla" }; // <-- returns an object
// }
// console.log(new BigUser().name); // Godzilla, got that object ^^

function SmallUser() {
  this.name = "John";
  return; // finishes the execution, returns this
  // ...
}
console.log(new SmallUser().name); // John
