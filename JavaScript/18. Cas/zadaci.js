// 1.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
//  Npr. za string 'Mama ima momu', dobija se rezultat 5.

// function firstTask() {
//   let recenica = prompt("Unesite neku recenicu: ");
//   let duzina = recenica.length;
//   let brojac = 0;

//   for (let i = 0; i < duzina; i++) {
//     if (recenica[i] === "m" || recenica[i] === "M") {
//       brojac++;
//     }
//   }
//   return `Uneta recenica sadrzi ${brojac} puta slovo m(M).`;
// }

// console.log(firstTask());

// 2.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

// const secondTask = function () {
//   let recenica = prompt("Unesite neku recenicu: ");
//   let duzina = recenica.length;
//   let brojac = 0;

//   for (let i = 0; i < duzina; i++) {
//     if (
//       recenica[i] === "1" ||
//       recenica[i] === "2" ||
//       recenica[i] === "3" ||
//       recenica[i] === "4" ||
//       recenica[i] === "5" ||
//       recenica[i] === "6" ||
//       recenica[i] === "7" ||
//       recenica[i] === "8" ||
//       recenica[i] === "9"
//     ) {
//       brojac++;
//     }
//   }
//   return `Uneta recenica sadrzi ${brojac} cifara.`;
// };

// console.log(secondTask());

// 3.	Prebrojati koliko ima malih slova u unetom stringu.

// const thirdTask = function () {
//   let recenica = prompt("Unesite neku recenicu: ");
//   let duzina = recenica.length;
//   let brojac = 0;

//   for (let i = 0; i < duzina; i++) {
//     if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//       brojac++;
//     }
//   }
//   return `U datoj recenici ima ${brojac} malih slova.`;
// };

// console.log(thirdTask());

// 4.	Ispitati da li u unetom stringu ima više malih ili velikih slova.
// Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

function fourthTask() {
  let recenica = prompt("Unesite neku recenicu");
  let malaSlova = 0;
  let velikaSlova = 0;
  let duzina = recenica.length;

  for (let i = 0; i < duzina; i++) {
    if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
      malaSlova += 1;
    } else if (
      recenica[i] === recenica[i].toUpperCase() &&
      recenica[i] !== " "
    ) {
      velikaSlova += 1;
    }
  }
  if (malaSlova > velikaSlova) {
    return `U datoj recenici ima vise malih slova, ima ih ${malaSlova}, a velikih ${velikaSlova}`;
  } else if (malaSlova < velikaSlova) {
    return `U datoj recenici ima vise velikih slova, ima ih ${velikaSlova}, a malih ${malaSlova}`;
  }
}
console.log(fourthTask());
