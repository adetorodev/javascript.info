let year = 2015;
// if(year == 2015) console.log("You are right")

if (year == 2015) {
  console.log("You are right");
  console.log("You are smart");
}

// let accessAllowed;
let age = 12;
// if (age > 18) {
// accessAllowed = true;
// } else {
// accessAllowed = false;
// }
// console.log(accessAllowed);

// let result = condition ? value1 : value2;

let accessAllowed = age > 18 ? true : false;

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
console.log(message);
