// Objects are used for storing keyed collections.
// Arrays are used for storing ordered collections.

// Map is a collection of keyed data items, just like 
// an Object. But the main difference is that Map 
// allows keys of any type.

/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
// console.log( map.get(1)   ); // 'num1'
// console.log( map.get('1') ); // 'str1'

// console.log( map.size ); // 3

// let john = { name: "John" };
// let ben = { name: "Ben" };

// for every user, let's store their visits count
// let visitsCountObj = {}; // trying obj
// let visitsCountMap = new Map();

// john is the key for the map
// visitsCountMap.set(john, 123);

// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// console.log( visitsCountMap.get(john) ); // 123
// console.log( visitsCountObj["[object Object]"] ); // 123

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
  // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
//   }
  
  // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }
  
  // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     console.log(entry); // cucumber,500 (and so on)
//   }

// A Set is a special type collection – “set of values” 
// (without keys), where each value may occur only once.

/*
new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// set keeps only unique values
// console.log( set.size ); // 3

// for (let user of set) {
//   console.log(user.name); // John (then Pete and Mary)
// }
// console.log(set)

// Looping

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});