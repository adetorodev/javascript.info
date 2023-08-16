// Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// Filter range

function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arrA = [5, 3, 8, 1];

filterRangeInPlace(arrA, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

// Sort in decreasing order
let arrB = [5, 2, 1, -10, 8];

arrB.sort((a, b) => b - a);

console.log( arrB );