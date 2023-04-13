// syntax
// function showMessage() {
//     console.log("Hello!")
// }
// showMessage();

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable
//   console.log(message);
// }
// showMessage();

// let userName = "John";
// function showMessage() {
//   let message = "Hello, " + userName;
//   console.log(message);
// }
// showMessage(); // Hello, John

// let userName = "John";
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable
//   let message = "Hello, " + userName;
//   console.log(message);
// }
// console.log(userName); // John before the function call
// showMessage();

// Parameters

function showMessage(from, text) {
  // arguments: from, text
  console.log(from + ": " + text);
}
showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)

function showMessageb(from, text) {
  from = "*" + from + "*"; // make "from" look nicer
  console.log(from + ": " + text);
}

let from = "Ann";
showMessageb(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

// Returning a value

function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
console.log(result); // 3

let age = 20;
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

// If a function does not return a value, it is the same as if it returns undefined :

function doNothing() {
  /* empty */
}
console.log(doNothing() === undefined); // true

// An empty return is also the same as return undefined :
function doNothing() {
  return;
}
console.log(doNothing() === undefined); // true
