// 
/* 
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.
*/

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
// let [firstName, surname] = arr;

// console.log(firstName); // John
// console.log(surname);  // Smith

// let [firstName, surname] = "John Smith".split(' ');
// console.log(firstName); // John
// console.log(surname);  // Smith
// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( title ); // Consul
console.log( firstName );