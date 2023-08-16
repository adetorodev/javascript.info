// function sum(a, b) {
//   return a + b;
// }
// console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// let guestList = `Guests:
// * John
// * Pete
// * Mary
// `;
// console.log(guestList);


// Special characters
// let guestList = "Guests:\n * John\n * Pete\n * Mary"
// console.log(guestList);

// let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
// two lines using a normal newline and backticks
// let str2 = `Hello
// World`;
// console.log(str1 == str2); // true

// console.log( "\u00A9" ); // ©
// console.log( "\u{20331}" ); // 佫, a rare Chinese hieroglyph (long unicode)
// console.log( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)

// Accessing characters

// let str = `Hello`;
// console.log( str[0] ); // H
// console.log( str.charAt(0) ); // H
// the last character

// console.log( str[1000] ); // undefined
// console.log( str.charAt(1000) ); // '' (an empty string)

// We can iterate over character
// for (let char of "Hello") {
//   console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// }

// Strings are immutable

// let str = 'Hi';
// str[0] = 'h'; // error
// console.log( str[0] ); // doesn't work

// This is better

let str = 'Hi';
str = 'h' + str[1]; // replace the string
console.log( str ); // hi