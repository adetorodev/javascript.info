// let arr = ['I', 'go', 'home'];

// delete arr[1]
// console.log(arr[1])
// console.log(arr)
// console.log(arr.length)

// console.log(arr.splice(1,1));
// console.log(arr)
// console.log(arr.length)

// let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");
// console.log(arr)

// let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// console.log( arr ); // "I", "study", "complex", "language", "JavaScript"

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

// Iterate: forEach

// arr.forEach(function(item, index, array) {
//     // ... do something with item
// });

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
// });

// arr.indexOf(item, from) – looks for item starting
// from index from, and returns the index where it
// was found, otherwise -1.
// arr.includes(item, from) – looks for item
// starting from index from, returns true if found.

// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1

// console.log( arr.includes(1) ); // true
// Please note that indexOf uses the strict equality
// === for comparison. So, if we look for false, it
// finds exactly false and not the zero.

// The includes method handles NaN correctly
// const arr = [NaN];
// console.log( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
// console.log( arr.includes(NaN) );// true (correct)

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
//   { id: 4, name: "John" },
// ];

// let user = users.find(item => item.id == 1);

// console.log(user.name); // John

// Find the index of the first John
// console.log(users.findIndex((user) => user.name == "John")); // 0

// Find the index of the last John
// console.log(users.findLastIndex((user) => user.name == "John")); // 3

// let results = arr.filter(function(item, index, array) {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
// });

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// // returns array of the first two users
// let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers.length); // 2

// let result = arr.map(function(item, index, array) {
//     // returns the new value instead of item
// });

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');

// for (let name of arr) {
//   console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result); // 15

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23


// Summary

/* 
To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.

To iterate over elements:

forEach(func) – calls func for every element, does not return anything.


To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.

*/