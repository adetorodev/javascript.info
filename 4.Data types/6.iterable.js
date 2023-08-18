// Iterable objects are a generalization of arrays.
// That’s a concept that allows us to make any object
// useable in a for..of loop.

// If an object isn’t technically an array, but
// represents a collection (list, set) of something,
// then for..of is a great syntax to loop over it, so
// let’s see how to make it work.

// let range = {
//   from: 1,
//   to: 5,
// };

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5

/*

To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
Onward, for..of works only with that returned object.
When for..of wants the next value, it calls next() on that object.
The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.
*/

// let range = {
//   from: 1,
//   to: 5,
// };

// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function () {
//   // ...it returns the iterator object:
//   // 2. Onward, for..of works only with the iterator object below, asking it for next values
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() is called on each iteration by the for..of loop
//     next() {
//       // 4. it should return the value as an object {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// // now it works!
// for (let num of range) {
//   alert(num); // 1, then 2, 3, 4, 5
// }

// String is iterable

// For a string, for..of loops over its characters:

// for (let char of "test") {
//   // triggers 4 times: once for each character
//   alert( char ); // t, then e, then s, then t
// }

let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, and then 😂
}


let stri = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = stri[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}