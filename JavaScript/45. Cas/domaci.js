//  2. Zadatak
// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

const niz = [-3, 4.8, 5, 3, -3.2];
const squareList = (arr) => {
  const filtered = arr.filter(function (number) {
    return number > 0 && number % 1 === 0;
  });
  const squares = filtered.map(function (number) {
    return number ** 2;
  });
  return squares;
};

console.log(squareList(niz));
const a = 14;
const b = 14.15;
// console.log(a % 1 === 0);
// console.log(b % 1 === 0);

// Number.isInteger() metoda varaca boolean u zavisnosti od toga da li je argument date metode ceo broj ili nije.

console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
