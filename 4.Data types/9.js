// iterations over objects

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

let user = {
  name: "John",
  age: 30,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Loop
for (let value of Object.values(user)) {
  console.log(value);
}
// Use Object.fromEntries(array) on the resulting array to turn it back into an object.
let prices = {
  banana: 1,
  ornage: 2,
  meat: 4,
};
let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices);

// Task

// Sum the properties
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all
// salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(arr) {
  let sum = 0;
  for (let value of Object.values(arr)) {
    sum += value;
  }
  return sum;
}

console.log(sumSalaries(salaries));

// reduce loops over array of salaries,
// adding them up
// and returns the result
// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
// }


// Count properties
let userb = {
    name: 'John',
    age: 30
  };

function countProp(arr){
    return Object.keys(arr).length
}

console.log(countProp(userb))