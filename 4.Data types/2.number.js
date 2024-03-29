// // let billion = 1000000000;

// // let billion = 1_000_000_000;
// // console.log(billion)

// let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

// console.log( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// 1e3 === 1 * 1000; // e3 means *1000
// 1.23e6 === 1.23 * 1000000; // e6 means *1000000

// let mсs = 0.000001;
// let mcs = 1e-6; // five zeroes to the left from 1

// // -3 divides by 1 with 3 zeroes
// 1e-3 === 1 / 1000; // 0.001

// // -6 divides by 1 with 6 zeroes
// 1.23e-6 === 1.23 / 1000000; // 0.00000123

// // an example with a bigger number
// 1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

// Hex, binary and octal numbers

// Hexadecimal numbers are widely used in JavaScript 
// to represent colors, encode characters, and for many other things

// console.log( 0xff ); // 255
// console.log( 0xFF ); // 255 (the same, case doesn't matter)
// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255

// console.log( a == b ); // true, the same number 255 at both sides


// toString(base)
// The method num.toString(base) returns a string 
// representation of num in the numeral system with the given base.

// let num = 255;

// console.log( num.toString(16) );  // ff
// console.log( num.toString(2) );   // 11111111


/* Common use cases for this are:

base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36: */

// console.log( 123456..toString(36) ); // 2n9c


// Rounding 
/*
Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
*/

// let num = 1.23456;

// console.log( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// let numA = 12.34;
// console.log( numA.toFixed(1) ); // "12.3"
// let numB = 12.36;
// console.log( numB.toFixed(1) ); // "12.4"
// let numC = 12.34;
// console.log( numC.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits

// Imprecise calculations

// console.log( 1e500 ); // Infinity
// console.log( 0.1 + 0.2 == 0.3 ); // false
// console.log( 0.1 + 0.2 ); // 0.30000000000000004
// let sum = 0.1 + 0.2;
// console.log( sum.toFixed(2) ); // "0.30"
// let sumFixed = 0.1 + 0.2;
// console.log( +sumFixed.toFixed(2) ); // 0.3

// Tests: isFinite and isNaN

// console.log( isNaN(NaN) ); // true
// console.log( isNaN("str") ); // true
// console.log( NaN === NaN ); // false
// console.log( isFinite("15") ); // true
// console.log( isFinite("str") ); // false, because a special value: NaN
// console.log( isFinite(Infinity) ); // false, because a special value: Infinity

// Number.isNaN(value) returns true if the argument 
// belongs to the number type and it is NaN. In any other case it returns false.

// console.log( Number.isNaN(NaN) ); // true
// console.log( Number.isNaN("str" / 2) ); // true

// Note the difference:
// console.log( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
// console.log( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

// Number.isFinite(value) returns true if the 
 //argument belongs to the number type and it is not 
 //NaN/Infinity/-Infinity. In any other case it returns false.

console.log( Number.isFinite(123) ); // true
console.log( Number.isFinite(Infinity) ); // false
// console.log( Number.isFinite(2 / 0) ); // false

// Note the difference:
console.log( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
console.log( isFinite("123") ); // true, because isFinite converts string "123" into a number 123