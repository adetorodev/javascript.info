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

// Symbol.toPrimitive

/**
 obj[Symbol.toPrimitive] = function(hint) {
    return a primitive value
     hint = one of "string", "number", "default"
}
**/

let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// console.log(user)
// console.log(+user)
// console.log(user + 500)

let userA = {
  name: "John",
  toString() {
    return this.name;
  },
};
console.log(userA); // toString -> John
console.log(userA + 500); // toString -> John500
