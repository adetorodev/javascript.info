// object create entity of the world like user, cars, orders etc.
//  let user = {
//     name: "john",
//     age: 45,
//     sayhi: function() {
//         console.log("Hi!")
//     }
//  }

//  console.log(user.sayhi())

// let user = {
//   name: "john",
//   age: 45,
//   sayhi: function () {
//     console.log("Hi!", this.name);
//   },
// };
// // this keyword is use to access a part of the object.

// console.log(user.sayhi());

// let admin = user;
// user = null;
// console.log(admin.sayhi());

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(user.name); // leads to an error
//   },
// };
// let admin = user;
// user = null; // overwrite to make things obvious
// admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

// In JavaScript, “this” keyword behaves unlike most other programming languages. It can be used in any function

// let user = { name: "John" };
// let admin = { name: "Admin" };
// function sayHi() {
//   console.log(this.name);
// }
// use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
// user.f(); // John (this == user)
// admin.f(); // Admin (this == admin)
// admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

// let user = {
//   name: "John",
//   hi() {
//     console.log(this.name);
//   },
//   bye() {
//     console.log("Bye");
//   },
// };
// user.hi(); // John (the simple call works)
// now let's call user.hi or user.bye depending on the name
// (user.name == "John" ? user.hi : user.bye)(); // Error!

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   },
// };
// user.sayHi(); // Ilya

// soln

// let obj, method;
// obj = {
//   go: function () {
//     console.log(this);
//   },
// };
// obj.go();
// (1) [object Object]
// obj.go(); // (2) [object Object]
// (method = obj.go)(); // (3) undefined
// (obj.go || obj.stop)();

// Here’s the explanations.
// 1.
// That’s a regular object method call.
// 2.
// The same, brackets do not change the order of operations here, the dot is first
// anyway.
// 3.
// Here we have a more complex call (expression).method() . The call works as
// if it were split into two lines:
// f = obj.go; // calculate the expression
// f();
// // call what we have
// Here f() is executed as a function, without this .
// 4.
// The similar thing as (3) , to the left of the dot . we have an expression.
// To explain the behavior of (3) and (4) we need to recall that property accessors (dot
// or square brackets) return a value of the Reference Type.

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name);

// Here the value of this inside makeUser() is undefined , because it is called as a
// function, not as a method with “dot” syntax.