// Horizontal indents: 2 or 4 spaces.
show(
  parameters,
  aligned, // 5 spaces padding at the left
  one,
  after,
  another
){
    //
}

// Vertical indents: empty lines for splitting code into logical blocks

function pow(x, n) {
  let result = 1;
  //
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  //
  return result;
}

// Nesting Levels
for (let i = 0; i < 10; i++) {
    if (cond) {
        // <- one more nesting level
    }
}
// We can write:

for (let i = 0; i < 10; i++) {
    if (!cond) continue;
        // <- no extra nesting level
}

// with if/else and return
function pow(x, n){
    if (n < 0){
        console.log("Negative 'n' not supported");
    }else {
        let result = 1;

        for (let i = 0; i < n; i++){
            result *= x;
        }
        return result
    }
}

function pow(x, n){
    if (n < 0){
        console.log("Negative 'n' not supported");
    }
    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }
    return result
}

// Function Placement
// function declarations
function createElement() {
    ...
}
function setHandler(elem) {
    ...
}
function walkAround() {
    ...
}
// the code which uses them
let elem = createElement();
setHandler(elem);
walkAround();