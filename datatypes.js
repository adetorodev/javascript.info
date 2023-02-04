/************************
    Number
*********************** */ 

// The number type represents both integer and floating point numbers.
// special numbers: infinity, NaN, -infinity
console.log(1/0) // Infinity

// aN represents a computational error. It is a result of an incorrect or an undefined
// mathematical operation

console.log("Ade" / 0) // NaN

/************************
    String
*********************** */ 

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`; // Backticks can be use with embed variable in string

/************************
 Boolean (logical type)
*********************** */ 

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
console.log(isGreater)

/************************
 Null and Undefined
*********************** */

// null is of its type null, null is not a “reference to a non-existing object”
// It’s just a special value which represents “nothing”, “empty” or “value unknown”

// The meaning of undefined is “value is not assigned”

let y;
console.log(y) // undefined

// typeof

typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"(1)
typeof null // "object"(2)
typeof alert // "function"

let name = "Ilya";
console.log( `hello ${1}` ); // hello 1
console.log( `hello ${"name"}` ); // hello name
console.log( `hello ${name}` ); // hello Ilya


