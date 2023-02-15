// // There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT)

// /************************
//     || OR
// *********************** */

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// // let hour = 9;
// // if (hour < 10 || hour > 18) {
// // console.log( 'The office is closed.' );
// // }

// // let hour = 12;
// // let isWeekend = true;
// // if (hour < 10 || hour > 18 || isWeekend) {
// //   console.log("The office is closed."); // it is the weekend
// // }

// console.log(1 || 0); // 1 (1 is truthy)
// console.log(true || "no matter what"); // (true is truthy)
// console.log(null || 1); // 1 (1 is the first truthy value)
// console.log(null || 0 || 1); // 1 (the first truthy value)
// console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// let currentUser = null;
// let defaultUser = "John";
// let name = currentUser || defaultUser || "unnamed";
// console.log(name); // selects "John" – the first truthy value

// /************************
//     && AND
// *********************** */

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//   console.log("The time is 12:30");
// }

// // if the first operand is truthy,
// // AND returns the second operand:
// console.log( 1 && 0 ); // 0
// console.log( 1 && 5 ); // 5
// // if the first operand is falsy,
// // AND returns it. The second operand is ignored
// console.log( null && 5 ); // null
// console.log( 0 && "no matter what" ); // 0
// // We can also pass several values in a row. See how the first falsy one is returned:
// console.log( 1 && 2 && null && 3 ); // null
// // When all values are truthy, the last value is returned:
// console.log( 1 && 2 && 3 ); // 3, the last one

// // using AND && to replace if
// let x = 1;
// (x > 0) && console.log( 'Greater than zero!' ); // Greater than zero!

// /************************
//     ! NOT
// *********************** */

// // result = !value;
// // The operator accepts a single argument and does the following:
// // 1. Converts the operand to boolean type: true/false .
// // 2. Returns the inverse value.

// // A double NOT !! is sometimes used for converting a value to boolean type:
// console.log( !!"non-empty string" ); // true
// console.log( !!null ); // false
// console.log( Boolean("non-empty string") ); // true
// console.log( Boolean(null) ); // false

// /************************
//     NOTE
// *********************** */

// // The precedence of NOT ! is the highest of all logical operators, 
// // so it always executes first,
// // before && or || .

// // The precedence of AND && operator is higher than OR || .
// // So the code a && b || c && d is essentially 
// // the same as if the && expressions were
// // in parentheses: (a && b) || (c && d) .

// Tasks

// What is the code below going to output?
// console.log( null || 2 || undefined ); // 2

// What will the code below output?
console.log( console.log(1) || 2 || console.log(3) ); // 1 2

// What is this code going to show?
console.log( 1 && null && 2 ); // null
console.log( console.log(1) && console.log(2) );
console.log( null || 2 && 3 || 4 );