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

console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (the same, case doesn't matter)
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b ); // true, the same number 255 at both sides