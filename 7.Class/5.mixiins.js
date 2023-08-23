// a mixin  is a class that contains methods for
// use by other classes
// without having to be the parent
// class of those other classes.

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};
// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
