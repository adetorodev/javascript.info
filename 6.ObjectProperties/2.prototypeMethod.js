// ●
// Object.create(proto[, descriptors])  – creates an empty object with given proto as
// [[Prototype]] and optional property descriptors.
// ●Object.getPrototypeOf(obj)  – returns the [[Prototype]] of obj .
// ●Object.setPrototypeOf(obj, proto)  – sets the [[Prototype]] of obj to proto .

// let animal = {
//   eats: true,
// };
// create a new object with animal as a prototype
// let rabbit = Object.create(animal);
// console.log(rabbit.eats); // true
// console.log(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit
// Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

// Object.create has an optional second argument: property descriptors.
let animal = {
  eats: true,
};
let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});
console.log(rabbit.jumps); // true
