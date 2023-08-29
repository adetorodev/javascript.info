// Async Function
// async function f() {
//   return 1;
// }
// The word “async” before a function means one
// simple thing: a function always returns a
// promise.

// async function f() {
//   return 1;
// }
// f().then(alert); // 1

// return a promise
// async function f() {
//   return Promise.resolve(1);
// }
// f().then(alert); // 1

// So, async ensures that the function returns a promise, and wraps non-promises in it. Simple
// enough, right? But not only that. There’s another keyword, await , that works only inside
// async functions,

// Await
// The syntax:
// works only inside async functions
// let value = await promise;

// make all Javascript wait untill that promise settles and return
// it result

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   let result = await promise; // wait till the promise resolves (*)
//   console.log(result); // "done!"
// }
// f();

// ⚠ Can’t use await in regular functions
// If we try to use await in non-async function, there would be a syntax error:
// function f() {
// let promise = Promise.resolve(1);
// let result = await promise; // Syntax error
// }

// async function showAvatar() {
//   // read our JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();
//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();
//   // show the avatar
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);
//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//   img.remove();
//   return githubUser;
// }
// showAvatar();

//  await won’t work in the top-level code
// syntax error in top-level code
// let response = await fetch("/article/promise-chaining/user.json");
// let user = await response.json();

// We can wrap it into an anonymous async function

// (async () => {
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();
//   // ...
// })();

// await accepts “thenables”
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}
async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  console.log(result);
}
f();
