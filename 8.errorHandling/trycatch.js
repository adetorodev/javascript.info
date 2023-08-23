// try {
//   // code...
// } catch (err) {
//   // error handling
// }

/*
1. First, the code in try {...} is executed.
2. If there were no errors, then catch(err) is ignored: the execution reaches the end of
try and then jumps over catch .
3. If an error occurs, then try execution is stopped, and the control flows to the beginning of
catch(err) . The err variable (can use any name for it) contains an error object with
details about what’s happened.
*/

// try {
//   console.log("Start of try runs");
//   // (1) <--
//   // ...no errors here
//   console.log("End of try runs");
//   // (2) <--
// } catch (err) {
//   console.log("Catch is ignored, because there are no errors"); // (3)
// }
// console.log("...Then the execution continues");

// try {
//   console.log("Start of try runs");
//   // (1) <--
//   lalala; // error, variable is not defined!
//   console.log("End of try (never reached)");
//   // (2)
// } catch (err) {
//   console.log(`Error has occurred!`); // (3) <--
// }
// console.log("...Then the execution continues");

// try..catch only works for runtime errors
// try..catch works synchronously

// try {
//   setTimeout(function () {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (e) {
//   console.log("won't work");
// }

// setTimeout(function () {
//   try {
//     noSuchVariable; // try..catch handles the error!
//   } catch {
//     console.log("error is caught here!");
//   }
// }, 1000);

// try {
//   lalala; // error, variable is not defined!
// } catch (err) {
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // lalala is not defined
//   console.log(err.stack); // ReferenceError: lalala is not defined at ...
  // Can also show an error as a whole
  // The error is converted to string as "name: message"
//   console.log(err); // ReferenceError: lalala is not defined
// }

// Throwing our own errors
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   console.log(user.name); // no name!
// } catch (e) {
//   console.log("doesn't execute");
// }

// The throw operator generates an error.
// The syntax is:
// throw <error object>

// let error = new Error("Things happen o_O");
// console.log(error.name); // Error
// console.log(error.message); // Things happen o_O

// let error = new Error(message);
// // or
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);

let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json); // <-- no errors
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
}
