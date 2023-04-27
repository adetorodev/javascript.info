// let user = {
//     name: "John"
// }

// user = null

let user = {
  name: "John",
};

let admin = user;
user= null

console.log(user); // user is null
console.log(admin); // admin still remain in memory
