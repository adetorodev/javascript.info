// **********************
// * WHile and for Loop  *
// **********************

// while (condition) {
//Code
// Loop body
// }

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// OR

while (i) {
  console.log(i);
  i--;
}
// when i becomes 0, the condition becomes falsy, and the loop stops

// let i = 3;
// while (i) alert(i--)

// do ... while loop

// do {
//     // loop body
// } while(consition)

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 3);

// the do ...while loop should be use when you want the loop to execute once.

//  For Loop
// for(begin, condition, step){
//     loop body
// }

for (let j = 0; j < 3; j++) {
  console.log(j);
}

// Here’s exactly what happens in our case:
// for (let j = 0; j < 3; i++) console.log(j)
// run begin
let j = 0;
// if condition → run body and run step
if (j < 3) {
  console.log(j);
  j++;
}
// if condition → run body and run step
if (j < 3) {
  console.log(j);
  j++;
}
// if condition → run body and run step
if (j < 3) {
  console.log(j);
  i++;
}
// ...finish, because now j == 3

// skipping part

let g = 0; // we have i already declared and assigned
for (; g < 3; i++) {
  // no need for "begin"
  console.log(g); // 0, 1, 2
}

// Break

let sum = 0;
while (true) {
  let value = 8
  if (!value) break; // (*)
  sum += value;
}
console.log("Sum: " + sum);


// continue

for (let y = 0; y < 10; y++) {
  // if true, skip the remaining part of the body
  if (y % 2 == 0) continue;
  console.log(y); // 1, then 3, 5, 7, 9
  }