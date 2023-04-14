// let sayHi = function () {
//   console.log("Hello");
// };

// console.log(sayHi); // shows the function code

// let func = sayHi; // (2) copy
// func(); // Hello
// sayHi(); // Hello// (3) run the copy (it works)!
// this line works too

// A Function Expression is created when the execution reaches
// it and is usable only from that moment.
// Function Declaration can be called earlier than it is defined.

// sayHi("John"); // Hello, John
// function sayHi(name) {
//   console.log(`Hello, ${name}`);
// }

// sayHi("John"); // error!
// let sayHi = function (name) {
//   console.log(`Hello, ${name}`);
// }; // cannot access 'sayHi' before initialization

// In strict mode, when a Function Declaration is within a code block,
// it’s visible everywhere inside that block. But not outside of it.

// Arrow Function

// let func = (arg1, arg2, ...argN) => expression

let sayHi = () => console.log("Hello!");
sayHi();

let age = prompt("What is your age?", 18);
let welcome = age < 18 ? () => alert("Hello") : () => alert("Greetings!");
welcome(); // ok now
