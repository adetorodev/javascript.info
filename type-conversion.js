let value = true;
console.log(typeof value);
 
console.log("4" / "2") // convert the string to number

let str = "123"
num = Number(str)
console.log(typeof num)

/*************************
    undefined - NaN
    null - 0
    true - 1
    false - 0

*************************/

let he = true
num2 = Number(he)
console.log(he, num2) // true  1

console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)

console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log(7 / 0) // Infinity

console.log(" -9 " + 5) // -9 5
console.log(" -9 " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN