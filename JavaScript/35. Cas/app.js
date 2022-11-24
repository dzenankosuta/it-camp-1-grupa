// 1. Zadatak
// From the array of numbers, choose even double even numbers and
// compute the sum using Array's filter, map and reduce methods.

const brojevi = [12, 20, 13, 27, 18, 43, 2];

const firstTask = (arr) => {
  const sum = arr
    .filter((el) => el % 2 === 0)
    .map((el) => el * 2)
    .reduce((prev, curr) => prev + curr);
  return sum;
};

console.log(firstTask(brojevi));

// U Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona, pronaci sumu parnih elemenata.

// Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva elementa.

const secondTask = () => {
  const niz = [1, 2];
  let i = 2;
  while (niz[i - 2] + niz[i - 1] <= 4000000) {
    niz.push(niz[i - 2] + niz[i - 1]);
    i++;
  }
  const sumaParnih = niz
    .filter((el) => el % 2 === 0)
    .reduce((prev, curr) => prev + curr);
  return sumaParnih;
};

console.log(secondTask());

// Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva
//  dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.
