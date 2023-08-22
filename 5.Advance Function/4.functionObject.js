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

// Scheduling: setTimeout and setInterval

// setTimeout allows to run a function once after the interval of time.
// ●setInterval allows to run a function regularly with the interval between the runs.

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi() {
  console.log("Hello");
}
console.log(setTimeout(sayHi, 1000))

// Canceling with clearTimeout
// let timerId = setTimeout(...);
// clearTimeout(timerId);

// let timerId = setTimeout(() => alert("never happens"), 1000);
// console.log(timerId); // timer identifier
// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)


// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);
// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);