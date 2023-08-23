class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped`);
  }
}

let animal = new Animal("My Animal");
// console.log(animal)

// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }
// let rabbit = new Rabbit("My rabbit");
// console.log(rabbit)

// Inherit from Animal by specifying "extends Animal"
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }
// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!

// Overriding a method

class Rabbit extends Animal {
    
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White rabbit hides!

// Classes provide "super" keyword for that.
// ●super.method(...) to call a parent method.
// ●super(...) to call a parent constructor (inside our constructor only).

// Overriding constructor

// if a class extends another class and has no constructor ,
// then the following “empty” constructor is generated:
class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}
