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