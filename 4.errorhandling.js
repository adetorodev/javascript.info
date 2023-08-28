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
