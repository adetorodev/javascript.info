// let arr = new Array
// let arr = []

// let fruits = ['Apple', 'Orange', 'Plum']
// console.log(fruits)
// console.log(fruits[1])

// // replace element
// fruits[2] = 'pear'
// fruits[3] = 'lemon'
// console.log(fruits)

// // get length of the array
// console.log(fruits.length)

// let arr = ['apple', {name: 'John'}, true,  function(name) { console.log('Hello', name)}];
// console.log(arr)
// // get the object
// console.log(arr[1].name)
// // get the function
// console.log(arr[3]('Kike'))

// let fruits = ['Apple', 'Orange', 'Plum']
// console.log(fruits[fruits.length-1])
// same as fruits[fruits.length-1]
// console.log(fruits.at(-1))

// Methods pop/push, shift/unshift

// in queu
// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// in stack
// push adds an element to the end.
// pop takes an element from the end.

// For stacks, the latest pushed item is received 
// first, that’s also called LIFO 
// (Last-In-First-Out) principle. For queues, we 
// have FIFO (First-In-First-Out).
// console.log(fruits.pop())
// console.log(fruits)
// fruits.push('pear')
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)
// fruits.unshift('apple')
// console.log(fruits)


// Internals

// let fruits = ['Banana']
// let arr = fruits // copy by reference,
// two variable refernec the same array
// console.log(arr === fruits)
// arr.push('pear')
// console.log(fruits)

// let fruits = []
// fruits[9999] = 5;
// fruits.age = 24;
// console.log(fruits)
// console.log(fruits.length)

// The ways to misuse an array:

// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.


// Performance
// Methods push/pop run fast, while shift/unshift are slow.

// Loop
// let arr = ["Apple", "Orange", "Pear"];
// let fruits = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   console.log( arr[i] );
// }

// iterates over array elements
// for (let fruit of fruits) {
//     console.log( fruit );
// }

// for (let key in arr) {
//     console.log( arr[key] ); // Apple, Orange, Pear
// } // we shouldn’t use for..in for arrays.
// optimized for generic objects, not arrays


// Multidimensional arrays

let matrix = [
    [1, 2, 3], // 0
    [4, 5, 6], // 1
//   0  1  2
    [7, 8, 9] // 2
];
  
console.log( matrix[1][1] ); // 5, the central element

// toString
let arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true

// Don’t compare arrays with ==
console.log( [] == [] ); // false
console.log( [0] == [0] ); // false