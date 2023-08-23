/* 
In object-oriented programming, properties and methods are split into two groups:
Internal interface – methods and properties, accessible from other methods of the class, but
not from the outside.
External interface – methods and properties, accessible also from outside the class.
*/

// class CoffeeMachine {
//   waterAmount = 0; // the amount of water inside
//   constructor(power) {
//     this.power = power;
//     console.log(`Created a coffee-machine, power: ${power}`);
//   }
// }
// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);
// // add water
// coffeeMachine.waterAmount = 200;

class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = -10; // Error: Negative water
