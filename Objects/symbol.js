// object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols

// “Symbol” value represents a unique identifier.

// let id = Symbol("id"); // id is a new symbol with the decription "id"

// symbol are guaranteed to be unique

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 == id2); // false

// console.log(id1);

// let user = { name: "John" };
// let id = Symbol("id");
// user[id] = "ID Value";
// console.log(user[id]);
// console.log(user);

// let id = Symbol("id");
// let user = {
//   name: "John",
//   [id]: 123, // not just "id: 123"
// };

// console.log(user[id]);
// console.log(user);

// Symbolic properties do not participate in for..in loop.

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123,
// };
// for (let key in user) console.log(key); // name, age (no symbols)
// // the direct access by the symbol works
// console.log("Direct: " + user[id]);
