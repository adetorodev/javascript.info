/*
1. A “producing code” that does something and takes time. For instance, the code loads data
over a network. That’s a “singer”.
2. A “consuming code” that wants the result of the “producing code” once it’s ready. Many
functions may need that result. These are the “fans”.
3. A promise is a special JavaScript object that links the “producing code” and the “consuming
code” together. In terms of our analogy: this is the “subscription list”. The “producing code”
takes whatever time it needs to produce the promised result, and the “promise” makes that
result available to all of the subscribed code when it’s ready.
*/

// let promise = new Promise(function (resolve, reject) {
//   // executor (the producing code, "singer")
// });

// ●state — initially “pending”, then changes to either “fulfilled” or “rejected”,
// ●result — an arbitrary value, initially undefined .

// ●resolve(value) — to indicate that the job finished successfully:
//     ●sets state to "fulfilled" ,
//     ●sets result to value .
// ●reject(error) — to indicate that an error occurred:
//     ●sets state to "rejected" ,
//     ●sets result to error .

let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed
  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

let promise = new Promise(function (resolve, reject) {
  resolve("done");
  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});


// The properties state and result of the Promise object are internal. We can’t directly
// access them from our “consuming code”. We can use the methods
// .then / .catch / .finally for that. They are described below.
