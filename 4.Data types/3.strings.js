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

// let str = 'Hi';
// str = 'h' + str[1]; // replace the string
// console.log( str ); // hi

// Searching for a substring
// str.indexOf
// let str = 'Widget with id';
// console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
// console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
// console.log( str.indexOf('id', 2) ) // 12

// Running indexOf in loop
// let str = 'As sly as a fox, as strong as an ox'
// let target = 'as'
// let pos = 0
// while(true){
//   let foundPos = str.indexOf(target, pos)
//   if(foundPos == -1) break
//   console.log(`Found at ${foundPos}`)
//   pos = foundPos + 1
// }

/*
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
alert( pos );
}
*/

// includes, startsWith, endsWith
// console.log( "Widget with id".includes("Widget") ); // true
// console.log( "Hello".includes("Bye") ); // false
// console.log( "Midget".includes("id") ); // true
// console.log( "Midget".includes("id", 3) ); // false, from position 3 there is no "id"
// console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
// console.log( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

// Getting a substring
// str.slice(start [, end])
// let str = "stringify";
// console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
// console.log( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
// console.log( str.slice(2) ); // ringify, from the 2nd position till the end
// console.log( str.slice(-4, -1) ); // gif

// str.substring(start [, end])
// these are same for substring
// console.log( str.substring(2, 6) ); // "ring"
// console.log( str.substring(6, 2) ); // "ring"
// ...but not for slice:
// console.log( str.slice(2, 6) ); // "ring" (the same)
// console.log( str.slice(6, 2) ); // "" (an empty string)

// str.substr(start [, length])
// console.log( str.substr(2, 4) ); // ring, from the 2nd position get 4 characters
// console.log( str.substr(-4, 2) ); // gi, from the 4th position get 2 characters


