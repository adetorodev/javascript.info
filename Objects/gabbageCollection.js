// let user = {
//     name: "John"
// }

// user = null

// let user = {
//   name: "John",
// };

// let admin = user;
// user= null

// console.log(user); // user is null
// console.log(admin); // admin still remain in memory

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman,
  };
}
let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

console.log(family);

delete family.father
console.log(family);
