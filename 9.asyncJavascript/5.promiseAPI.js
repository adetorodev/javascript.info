// Promise.resolve
// let promise = Promise.resolve(value);
// Same as:
// let promise = new Promise(resolve => resolve(value));

function loadCached(url) {
  let cache = loadCached.cache || (loadCached.cache = new Map());
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  }
  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      cache.set(url, text);
      return text;
    });
}

// Promise.reject
// let promise = Promise.reject(error);
// Same as:
// let promise = new Promise((resolve, reject) => reject(error));

// Promise.all

// let promise = Promise.all([...promises...]);

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

// use case
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];
// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));
// Promise.all waits until all jobs are resolved
Promise.all(requests).then((responses) =>
  responses.forEach((response) => alert(`${response.url}: ${response.status}`))
);


// use case 2
let names = ["iliakan", "remy", "jeresig"];
let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);
Promise.all(requests)
  .then((responses) => {
    // all responses are ready, we can show HTTP status codes
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }
    return responses;
  })
  // map array of responses into array of response.json() to read their content
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then((users) => users.forEach((user) => alert(user.name)));
