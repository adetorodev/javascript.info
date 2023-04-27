// let user = {
//   name: "John",
//   age: 30,
// };
// user.sayHi = function () {
//   console.log("Hello!");
// };
// user.sayHi(); // Hello!

// To access the object, a method can use the this keyword.
// The value of this is the object “before dot”

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(this.name);
//   },
// };
// user.sayHi(); // John

// this is not bound

let user = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
  console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John (this == user)
admin.f(); // Admin (this == admin)
admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)
