// fetch() asinhrona funkcija za prikupljanje nekih podataka.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => console.log(post.title));
  })
  .catch((err) => console.log(err));

// Pravljenje asinhrone funkcije:
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

getUsers().then((users) => console.log(users));
