// Napraviti novi niz sa brojevima vecim od 17. Iteraciju izvrsiti preko for petlje.
const niz = [4, 7, 25, 32, 42, 14, 29, 19];

const niz2 = [];
for (let number of niz) {
  if (number > 17) {
    niz2.push(number);
  }
}
console.log(niz2);

// filter() metoda kreira novi niz sa onim elementima koji su prosli test.
// Preko filter() metode dobijamo novi niz cija je maksimalna duzina jednaka
// duzini niza na koji se primenjuje metoda, a minimalna duzina je 0.
// Odradimo prethodni zadatak na drugi nacin:
//                                   element>17 predstavlja uslov na osnovu kojeg se element dodaje u niz ili ne dodaje.
const niz3 = niz.filter((element) => element > 17);
console.log(niz3);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa parnim elementima.
// const niz = [4, 7, 25, 32, 42, 14, 29, 19];

const niz4 = niz.filter(function (el) {
  return el % 2 === 0;
});
console.log(niz4);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim
// elementima starog niza,
// gde je drugo slovo "e".
const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];

const secondWordE = (el) => {
  return el[1] === "e";
};

const wordE = words.filter(secondWordE);
console.log(wordE);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim
//  elementima cija je duzina <= 6.

const wordMaxLength = words.filter((element) => {
  return element.length <= 6;
});

console.log(wordMaxLength);

// Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".
const newArr = ["Rec", "Dve RECi", 26, true, false, [true, false], 49, true];

const boolArr = newArr.filter((element) => typeof element === "boolean");
console.log(boolArr);

// Provera da li je neka promenljiva niz
console.log(typeof [1, 2, 3]);
console.log([1, 2, 3] instanceof Array);
console.log(Array.isArray([1, 2, 3]));

// 10. Zadatak
// Napraviti niz koji se sastoji iz parnih brojeva,
//  manjih ili jednakih 50 postojeceg niza.
const niz5 = [-14, -5, 22, 34, 55, 54, 29, 12, 6, 7, 10];

const evenAndLessThan50 = niz5.filter(function (element) {
  return element <= 50 && element % 2 === 0;
});
console.log(evenAndLessThan50);

// Domaci zadaci:
// 1. Zadatak
// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti
//  novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// const niz = [-9, -78, 4, 17, -22, -5, 7, 6, 10 ,18]

// 2. Zadatak NAPRAVITI FUNKCIJU
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog
// niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

// const DATA1 = [2, 26, 38, 75, 11, 29];
// const DATA2 = ["a", "b", "c", "d", "e"];
