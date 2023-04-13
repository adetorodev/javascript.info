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
