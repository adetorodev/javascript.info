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

// let user = {};
// // set
// user["likes birds"] = true;
// // get
// console.log(user["likes birds"]); // true
// // delete
// delete user["likes birds"];

// let key = "likes birds";
// // same as user["likes birds"] = true;
// user[key] = true;

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag.apple); // 5 if fruit="apple"

let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return);
// 6

let obj = {};
obj.__proto__ = 5;
alert(obj.__proto__); // [object Object], didn't work as intended
