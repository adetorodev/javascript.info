// ●writable – if true , can be changed, otherwise it’s read-only.
// ●enumerable – if true , then listed in loops, otherwise not listed.
// ●configurable – if true , the property can be deleted and these attributes can be
// modified, otherwise not.

// let user = {
//   name: "John",
// };
// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(JSON.stringify(descriptor, null, 2));

// let user = {};
// Object.defineProperty(user, "age", {
//   value: "34",
// });
// let descriptor = Object.getOwnPropertyDescriptor(user, "age");
// console.log(JSON.stringify(descriptor, null, 2));

let user = {
  name: "John",
};
Object.defineProperty(user, "name", {
  writable: false,
});
user.name = "Pete"; // Error: Cannot assign to read only property 'name'...

let user = {};
Object.defineProperty(user, "name", {
  value: "Pete",
  // for new properties need to explicitly list what's true
  enumerable: true,
  configurable: true,
});
console.log(user.name); // Pete
user.name = "Alice"; // Error
