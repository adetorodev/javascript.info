let obj = {}

function A() {
    return obj
}

function B() {
    return obj
}

let a = new A;
let b = new B

console.log(a == b)


function Calculator() {
    this.read() = function () {
        this.a = +prompt("a?", 0)
        this.b = +prompt("b?", 0)
    };
    this.sum() = function() {
        return this.a + this.b
    };
    this.mul() = function() {
        return this.a * this.b
    }
}
let calculator = new Calculator()

function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);