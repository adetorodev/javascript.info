// let userA = new Object(); // "object constructor" syntax
// let userB = {}; // "object literal" syntax

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

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// console.log(bag.apple); // 5 if fruit="apple"

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };
// console.log(obj.for + obj.let + obj.return);
// // 6

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__); // [object Object], didn't work as intended

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }
// let user = makeUser("John", 30);
// console.log(user.name); // John

// let user = {}
// console.log(user.noSuchProperty === undefined);

// let user = {
//   name: "John",
//   age: 30
// }

// console.log("age" in user);
// console.log("blabla" in user);
// console.log("John" in user);

// let obj = {
//   test: undefined
// }

// console.log(obj.test);
// console.log("test" in obj);

// for..in loop

// for(key in object){
//   // code to execute
// }

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(key, ":", user[key]);
//   // console.log(user[key]);
// }

// Ordered like an object

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   1: "USA",
// };

// for(let code in codes){
//   console.log(code);
// }

// let user = {
//   name: "John",
//   surname: "Smith"
// }

// user.age = 25
// for(let prop in user){
//   console.log(prop);
// }

// let Phonecodes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   "+1": "USA",
// };

// for(let code in Phonecodes){
//   console.log(code);
// }

// Coping by reference
// objects are stored and copied “by reference”

// A variable stores not the object itself, but its
//  “address in memory”, in other words “a reference” to it.

// let user = { name: "John"}

// When an object variable is copied – the reference is copied, 
// the object is not duplicated.

// let admin = user

// admin.name = "Pete"

// console.log(user.name);

// Comparison by reference
// The equality == and strict equality === operators for objects work exactly the same.
// let a = {}
// let b = a
// console.log(a == b);
// console.log(a === b);


// Const object
// An object declared as const can be changed.

// const user = {
//   name: "John"
// }
// user.age = 25
// console.log(user.age);
// console.log(user);

// const fixes the value of user itself
// And here user stores the reference to the same object all the time
// user = {
//   name: "Pete"
// }
// // error can't re-assign

// console.log(user);

// Cloning and merging, Object.assign

// let user = {
//   name: "John",
//   age: 30
// }

// let clone = {}

// for (let key in user){
//   clone[key] = user[key]
// }
// // clone is fully independent
// console.log(clone);
// clone.name = "pete"
// console.log(clone);
// console.log(user);

// we can also use object.assign for it
//  Object.assign(dest, [src1, src2, src3 ... ])

// Object.assign(clone, user)
// console.log(clone);

// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }