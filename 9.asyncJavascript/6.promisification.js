// Promisification
// Promisification – is a long word for a
// simple transform. It’s conversion of a
// function that accepts a callback into a
// function returning a promise.

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}
// usage:
// loadScript('path/script.js', (err, script) => {...})

// promisify
let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};
// usage:
// loadScriptPromise('path/script.js').then(...)
