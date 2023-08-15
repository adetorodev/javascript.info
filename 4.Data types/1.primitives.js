/* 
A primitive

Is a value of a primitive type.
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.


An object

Is capable of storing multiple values as properties.
Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
*/

// let n = 1.23456;
// console.log(n.toFixed(2))

// console.log(typeof 0);
// console.log(typeof new Number(0))

// The special primitives null and undefined are exceptions. They have no corresponding 
// “wrapper objects” and provide no methods. In a sense, they are “the most primitive”.

let str = 'Hello';
str.test = 5;
console.log(str.test)

// undefined (no strict mode)
// An error (strict mode).

/* 
Why? Let’s replay what’s happening at line (*):

When a property of str is accessed, a “wrapper object” is created.
In strict mode, writing into it is an error.
Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.
*/