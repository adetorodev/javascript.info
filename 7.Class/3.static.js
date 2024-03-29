class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

// class User() { }

// User.staticMethod = function() {
// console.log(this === User);
// };

// The value of this inside User.staticMethod() is the class constructor User itself

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles[0].title); // CSS

// Statics and inheritance

class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}
// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}
let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];
rabbits.sort(Rabbit.compare);
rabbits[0].run(); // Black Rabbit runs with speed 5.
