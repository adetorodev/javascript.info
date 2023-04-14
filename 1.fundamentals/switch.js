// A switvh statement can replace multiple if checks

// switch(x){
//     case "value1" // if (x === 'value')
//     ...
//     [break]

//     case 'value2': // if (x === 'value2)
//     ...
//     [break]

//     default:
//         ...
//     [break]
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log("too small");
//     break;
//   case 4:
//     console.log("Exactly");
//     break;
//   case 5:
//     console.log("Too large");
//     break;
//   default:
//     console.log("I don't know such values");
// }

// If there is no break then the execution continues with the next case without any
// checks.

// let c = 2 + 2;
// switch (c) {
//   case 3:
//     console.log("Too small");
//   case 4:
//     console.log("Exactly!");
//   case 5:
//     console.log("Too big");
//   default:
//     console.log("I don't know such values");
// }

// Grouping of “case”

let a = 2 + 3;
switch (a) {
  case 4:
    console.log("Right!");
    break;
  case 3:
  // (*) grouped two cases
  case 5:
    console.log("Wrong!");
    console.log("Why don't you take a math class?");
    break;
  default:
    console.log("The result is strange. Really.");
}
