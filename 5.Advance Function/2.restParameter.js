function sumAll(...args) {
  // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6

// Spread operator

let arr = [3, 5, 1];
console.log( Math.max(arr) ); // NaN
console.log( Math.max(...arr) );

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) );