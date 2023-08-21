// iterations over objects

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

let user = {
    name: "John",
    age: 30,
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// Loop
for(let value of Object.values(user)){
    console.log(value)
}
// Use Object.fromEntries(array) on the resulting array to turn it back into an object.
let prices = {
    banana: 1,
    ornage: 2,
    meat: 4,
}
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
)

console.log(doublePrices)