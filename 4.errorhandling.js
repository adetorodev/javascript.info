// We can use
// .catch to handle errors (rejections).

fetch("https://no-such-server.blabla") // rejects
  .then((response) => response.json())
  .catch((err) => console.log(err)); // TypeError: failed to fetch (the text may vary)

//   The easiest way to catch all errors is to append .catch to the end of chain:

fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise((resolve, reject) => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch((error) => console.log(error.message));

// Implicit try…catch

new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!

//    …Works exactly the same as this:
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => {
    throw new Error("Whoops!"); // rejects the promise
  })
  .catch(alert); // Error: Whoops!

// the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    alert("The error is handled, continue normally");
  })
  .then(() => alert("Next successful handler runs"));

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    // (*)
    if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");
      throw error; // throwing this or another error jumps to the next catch
    }
  })
  .then(function () {
    /* never runs here */
  })
  .catch((error) => {
    // (**)
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
  });

// Fetch error handling example
fetch("no-such-user.json") // (*)
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`)) // (**)
  .then((response) => response.json())
  .catch(alert); // SyntaxError: Unexpected token < in JSON at position 0
// ...

//

class HttpError extends Error {
  // (1)
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
function loadJson(url) {
  // (2)
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}
loadJson("no-such-user.json") // (3)
  .catch(alert); // HttpError: 404 for .../no-such-user.json

// asking user to modify request if error exists

function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err; // (*)
      }
    });
}
demoGithubUser();

// Unhandled rejections

new Promise(function () {
  noSuchFunction(); // Error here (no such function)
}).then(() => {
  // successful promise handlers, one or more
}); // without .catch at the end!
// In case of an error, the promise state becomes
// “rejected”, and the execution should jump to
// the closest rejection handler
// the error become stuck

// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// As said in the chapter, there’s an "implicit 
// try..catch " around the function code. So
// all synchronous errors are handled.
// But here the error is generated not while the 
// executor is running, but later. So the
// promise can’t handle it.
