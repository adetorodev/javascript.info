// Promisification
// Promisification – is a long word for a
// simple transform. It’s conversion of a
// function that accepts a callback into a
// function returning a promise.

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));
//   document.head.append(script);
// }
// usage:
// loadScript('path/script.js', (err, script) => {...})

// promisify
// let loadScriptPromise = function (src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err);
//       else resolve(script);
//     });
//   });
// };
// usage:
// loadScriptPromise('path/script.js').then(...)

// MicroTasks

// What if the order matters for us? How can we make code finished work after
// promise done ?
// Easy, just put it into the queue with .then :
Promise.resolve()
  .then(() => alert("promise done!"))
  .then(() => alert("code finished"));

// "Unhandled rejection" occurs when a
// promise error is not handled at the end of
// the microtask queue.
// if we expect error we add a .catch to the promise

let promise = Promise.reject(new Error("Promise Failed!"));
promise.catch((err) => alert("caught"));
// doesn't run: error handled
window.addEventListener("unhandledrejection", (event) => alert(event.reason));
