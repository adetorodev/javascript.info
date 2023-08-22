let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";
console.log(sayHi());

function makeCounter() {
  let count = 0;
  return function () {
    return count++; // has access to the outer "count"
  };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// “var” has no block scope
// “var” declarations are processed at the function start
