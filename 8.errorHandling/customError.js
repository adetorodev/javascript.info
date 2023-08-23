// The "pseudocode" for the built-in Error class defined by JavaScript itself

// The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//     constructor(message) {
//         this.message = message;
//         this.name = "Error"; // (different names for different built-in error classes)
//         this.stack = <nested calls>;
//         // non-standard, but most environments support it
//     }
// }

// Now let’s go on and inherit ValidationError from it:
// class ValidationError extends Error {
//   constructor(message) {
//     super(message); // (1)
//     this.name = "ValidationError"; // (2)
//   }
// }
// function test() {
//   throw new ValidationError("Whoops!");
// }
// try {
//   test();
// } catch (err) {
//   console.log(err.message); // Whoops!
//   console.log(err.name); // ValidationError
//   console.log(err.stack); // a list of nested calls with line numbers for each
// }

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
// Usage
function readUser(json) {
  let user = JSON.parse(json);
  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }
  return user;
}
// Working example with try..catch
try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) {
    // (*)
    console.log("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}
