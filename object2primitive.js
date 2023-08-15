// explicit conversion
// let num = Number(obj);
// maths (except binary plus)
// let n = +obj; // unary plus
// let delta = date1 - date2;
// less/greater comparison
// let greater = user1 > user2;

// obj == string/number/symbol
// if (user == 1) { ... };
// The greater/less operator <> can work with both strings and numbers too.
// binary plus
// let total = car1 + car2;

// To do the conversion, JavaScript tries to find and call three object methods:
// 1. Call obj[Symbol.toPrimitive](hint) if the method exists,
// 2. Otherwise if hint is "string"
// try obj.toString() and obj.valueOf() , whatever exists.
// 3. Otherwise if hint is "number" or "default"
// try obj.valueOf() and obj.toString() , whatever exists.

