// Izdvojiti sve brojeve vece od 18 iz datog niza u novi niz.

const arr1 = [12, 15, 19, 22, 58, 36, -32, -58];

const arr2 = arr1.filter((el) => el > 18);
console.group(arr2);

// Ispisati novi niz koji je sadrzan od elemenata starog niza(arr1) pomnozenih za 3.

const arr3 = arr1.map((el) => {
  return el * 3;
});
console.log(arr3);

// Iz datog niza vratiti duplirane vrednosti parnih brojeva.

const arr4 = [1, 35, 47, 65, 44, 12, 78, 87];

const arr5 = arr4
  .filter((el) => {
    return el % 2 === 0;
  })
  .map((el) => {
    return el * 2;
  });
console.log(arr5);

// reduce() metoda se koristi kada zelimo da dobije za rezultat samo jednu vrednost.
//  Najcesci primeri za reduce() metodu su kada hocemo da dobijemo sumu.

//  Vratiti sumu svihe elemenata datog niza:
const arr6 = [1, 3, 5, 7, 9, 6, 2];

const suma = arr6.reduce((prevValue, currValue) => {
  return prevValue + currValue;
});
console.log(suma);

let arr11 = [12, 15, 19, 22, 58, 36, -32, -58];

let arr12 = arr11.forEach((el, index, array) => {
  return console.log(el, index, array);
});
console.log(arr12);

// Iz datog niza izvojiti sve parne brojeve vece od nule. Zatim vratiti sumu elemenata
//  koji zadovoljavaju odredjene uslove pomnozenih sa 3.

const arr7 = [-56, -32, 55, 12, 14, 13, 45, 63];

const sum2 = arr7
  .filter((el) => {
    return el > 0 && el % 2 === 0;
  })
  .map((el) => el * 3)
  .reduce((prevValue, currValue) => prevValue + currValue);

console.log(sum2);

//  reduce - 2. primer

const arr13 = [420, 990, 1320, 560, 740, 2090];

const racun = arr13.reduce(
  (prevValue, currValue) => prevValue + currValue,
  400
);
console.log(racun);

// Iz datoga niza vratiti sumu elemenata koji su iz intervala (12,32) pomnozenih sa 5.
//  Pocetna vrednost sume treba biti 299.

const arr8 = [-14, 26, 21, 13, 19, 55, 46, 58, 96];
