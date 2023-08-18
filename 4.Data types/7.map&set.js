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

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

let john = { name: "John" };
let ben = { name: "Ben" };

// for every user, let's store their visits count
let visitsCountObj = {}; // trying obj
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

console.log( visitsCountMap.get(john) ); // 123
console.log( visitsCountObj["[object Object]"] ); // 123