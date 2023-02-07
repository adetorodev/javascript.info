// “unary”, “binary”, “operand”

// String concatenation, binary +

let s = "my" + "string";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // "41" and not "221"

// String concatenation and conversion is a special feature of the binary plus + . 
// Other arithmetic
// operators work only with numbers and always convert their operands to numbers
console.log( 2 - '1' ); // 1
console.log( '6' / '2' ); // 3
console.log("3" * "3") // 9

// from HTML input
let apples = "2";
let oranges = "3";
console.log( apples + oranges ); // "23", the binary plus concatenates strings

// Convert them to number
let applesA = "2";
let orangesA = "3";
// both values converted to numbers before the binary plus
console.log( +applesA + +orangesA ); // 5
// the longer variant
// console.log( Number(applesA) + Number(orangesA) ); // 5