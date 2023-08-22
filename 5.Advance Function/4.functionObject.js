// function sayHi() {
//   console.log("Hi");
// }
// console.log(sayHi.name);

// Function Expression
// let sayHi = function () {
//   console.log("Hi");
// };
// console.log(sayHi.name);

// function f(sayHi = function () {}) {
//     console.log(sayHi.name); // sayHi (works!)
// }
// f();

// The "new Function" syntax
// let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function("a", "b", "return a + b");
console.log(sum(1, 2)); // 3

// closure
// function getFunc() {
//   let value = "test";
//   let func = new Function("console.log(value)");
//   return func;
// }
// getFunc()(); // error: value is not defined

function getFunc() {
  let value = "test";
  let func = function () {
    console.log(value);
  };
  return func;
}
getFunc()(); // "test", from the Lexical Environment of getFunc
