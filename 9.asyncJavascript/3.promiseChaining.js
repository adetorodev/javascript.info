new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)
    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  });

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function (result) {
  console.log(result);
  return result * 2; // <-- (1)
}); // <-- (2)
// .then…

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});
promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});
promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});
promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

// Returning promises

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)
    console.log(result); // 2
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });

//   Examples
loadScript("/article/promise-chaining/one.js")
  .then(function (script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function (script) {
    return loadScript("/article/promise-chaining/three.js");
  })
  .then(function (script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });

// Shorter

loadScript("/article/promise-chaining/one.js")
  .then((script) => loadScript("/article/promise-chaining/two.js"))
  .then((script) => loadScript("/article/promise-chaining/three.js"))
  .then((script) => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });

// Fetch url
fetch("/article/promise-chaining/user.json")
  // .then below runs when the remote server responds
  .then(function (response) {
    // response.text() returns a new promise that resolves with the full response text
    // when we finish downloading it
    return response.text();
  })
  .then(function (text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", isAdmin: true}
  });

// same as above, but response.json() parses the remote content as JSON
fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => alert(user.name)); // iliakan
