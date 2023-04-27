// object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols

// “Symbol” value represents a unique identifier.

let id = Symbol("id"); // id is a new symbol with the decription "id"

// symbol are guaranteed to be unique

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false

console.log(id1);