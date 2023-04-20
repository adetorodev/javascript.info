let userA = new Object(); // "object constructor" syntax
let userB = {}; // "object literal" syntax

// Literals and properties
// let user = {
//   name: "John",
//   age: 30,
// };

// get fields of the object:
// console.log( user.name ); // John
// console.log( user.age ); // 30

// user.isAdmin = true;

// delete user.age;

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true,
// };

let user = {};
// set
user["likes birds"] = true;
// get
console.log(user["likes birds"]); // true
// delete
delete user["likes birds"];

