function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
console.log(user.name); // Jack
console.log(user.isAdmin); // false

/**
 When a function is executed as new User(...) , it does the following steps:
1. A new empty object is created and assigned to this .
2. The function body executes. Usually it modifies this , adds new properties to it.
3. The value of this is returned.


In other words, new User(...) does something like:

function User(name) {
// this = {}; (implicitly)
// add properties to this
this.name = name;
this.isAdmin = false;
// return this; (implicitly)
}

So the result of new User("Jack") is the same object as:

let user = {
name: "Jack",
isAdmin: false
};
 */