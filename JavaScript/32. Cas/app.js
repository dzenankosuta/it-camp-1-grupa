// 1. Zadatak:
// Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:
const numbers = [2, 5, 10, 3, 4, 8];

const kvadrati = numbers.map((element) => Math.pow(element, 2));
console.log(kvadrati);

// 2. Zadatak
// Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

const koreni = numbers.map((element) => +Math.sqrt(element).toFixed(2));
console.log(koreni);

// 4. Zadatak
// Kvadrirati one brojeve koje imaju index 0,3,5.

const numbers2 = [-8, -7, -12, 0, 5, 23, 61];

// 1. nacin
const squareSpecial = numbers2.map((element, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return element ** 2;
  } else {
    return element;
  }
});
console.log(squareSpecial);

// 2. nacin
const squareSpecial2 = numbers2.map((element, index) => {
  return index === 0 || index === 3 || index === 5 ? element ** 2 : element;
});
console.log(squareSpecial2);
