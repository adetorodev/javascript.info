// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    console.log(`Cool, the ${script.src} is loaded`);
    console.log(_); // function declared in the loaded script
  }
);

// Callback in callback

loadScript("/my/script.js", function (script) {
  alert(`Cool, the ${script.src} is loaded, let's load one more`);
  loadScript("/my/script2.js", function (script) {
    alert(`Cool, the second script is loaded`);
  });
});

// one more script
loadScript("/my/script.js", function (script) {
  loadScript("/my/script2.js", function (script) {
    loadScript("/my/script3.js", function (script) {
      // ...continue after all scripts are loaded
    });
  });
});

// Handling errors
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}

loadScript("/my/script.js", function (error, script) {
  if (error) {
    // handle error
  } else {
    // script loaded successfully
  }
});

// Pyramid of Doom
loadScript("1.js", function (error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", function (error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript("3.js", function (error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });
      }
    });
  }
});


// In the code above:
// 1. We load 1.js , then if there’s no error.
// 2. We load 2.js , then if there’s no error.
// 3. We load 3.js , then if there’s no error – do something else (*) .
// That’s sometimes called “callback hell” or “pyramid of doom.”