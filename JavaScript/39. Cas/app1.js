// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Rekurzija - Pozivanje funkcije unutar iste.
// Moze se postici efekat petlje.

function ispisivanje(n) {
  console.log(n);
  if (n - 1 > 0) {
    return ispisivanje(n - 1);
  }
}

ispisivanje(10);

// callback funkcija predstavlja funkciju koja se nadje kao argument neke druge funkcije (metode).

let talib = "Talib";

function main(func) {
  console.log("Ovo je kod koji se izvrsava unutar glavne funkcije.");
  func(talib);
}

// callback funkcija:

function callBack(arg1) {
  console.log(`Pozdrav ljudi, ja sam novi clan grupe, moje ime je ${arg1}.`);
}

main(callBack);

// Napraviti glavnu funkciju koja ispisuje poruku da se radi o oglavnoj funkciji, ali ispod toga neka se izvrsi pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinu 3 broja koji predstavljaju argumente te callback funkcije.

function main2(func) {
  console.log("Ovo je kod koji se izvrsava unutar glavne funkcije.");
  func(1, 3, 3);
}

function averageValue(arg1, arg2, arg3) {
  let average = Number(((arg1 + arg2 + arg3) / 3).toFixed(2));
  console.log(`Aritmeticka sredina datih brojeva je ${average}.`);
}

main2(averageValue);
