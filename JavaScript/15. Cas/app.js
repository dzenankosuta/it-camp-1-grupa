// HOISTING

a = 5;

console.log(a);

// let a;   Deklarisanje nakon inicijalizacije nije dozvoljeno putem let keyword
// const a; Deklarisanje nakon inicijalizacije nije dozvoljeno putem const keyword
var a; // Deklarisanje nakon inicijalizacije jeste dozvoljeno putem var keyword

console.log(myFunc());

// Hoisting se nece izvrsiti:
// const myFunc = function () {
//   let a = 10;
//   return a;
// };

// Hoisting ce se izvrsiti:
function myFunc() {
  let a = 10;
  return a;
}

// Hoisting se nece izvrsiti:
const myArrow = () => {
  let a = 14;
  return a;
};

// Dobra praksa je uvek prvo deklarisati promenljivu (funkciju), pa je tek nakon toga koristiti.
// Sve kako bismo izbegli eventualne greske u kodu.
