let john = { name: "John" };
let array = [john]
john = null
// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]
// console.log(john)
// console.log(array)

// using Map
let map = new Map();
map.set(john, '...');
john = null;
// john is stored inside the map,
// we can get it by using map.keys()
// console.log(map.keys())

// WeakMap is fundamentally different in this aspect. It 
// doesn’t prevent garbage-collection of key objects.
// The first difference between Map and WeakMap is that 
// keys must be objects, not primitive values:

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object

