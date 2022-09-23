// 7.	Pronaći poziciju poslednjeg razmaka u stringu.
//  Npr. za uneto 'Pera ima devojku', rezultat je 8.

// function lastSpace() {
//   let recenica = prompt("Unesite recenicu: ");
//   const lastSpace = recenica.lastIndexOf(" ");
//   return lastSpace;
// }

// console.log(lastSpace());

// 8.	Ispisati dužinu prve reči unetog stringa.
//  Npr. za uneto 'Pera ima devojku', rezultat je 4.
//  Podrazumeva se da uneti string nema vodeće razmake.

// const firstLength = function () {
//   const recenica = prompt("Unesite recenicu: ");
//   let recenica1 = "";
//   let prviSpace = recenica.indexOf(" ");

//   for (let i = 0; i < prviSpace; i++) {
//     recenica1 += recenica[i];
//   }

//   if (prviSpace == -1) {
//     return recenica.length;
//   }

//   let duzinaPrveReci = recenica1.length;

//   return `Duzina prve reci je ${duzinaPrveReci}`;
// };

// console.log(firstLength());

// 9.	Za uneti string A treba kreirati novi string B koji se sastoji
// od prve i poslednje reči (odvojenih razmakom) unetog stringa.
// Npr. za A='Svuda pođi, kući dođi', dobija se B='Svuda dođi'.
// Podrazumeva se da uneti string nema vodeće ili prateće razmake.

// function thirdWord() {
//   let A = prompt("Unesite prvu recenicu: ");
//   let B = prompt("Unesite drugu recenicu: ");
//   let prvaRec = "";
//   let drugaRec = "";
//   let prviSpace = A.indexOf(" ");
//   let poslednjiSpace = B.lastIndexOf(" ");
//   for (let i = 0; i < prviSpace; i++) {
//     prvaRec += A[i];
//   }
//   for (let i = poslednjiSpace + 1; i < B.length; i++) {
//     drugaRec += B[i];
//   }
//   return prvaRec.concat(" ", drugaRec);
// }

// console.log(thirdWord());

// 10.	Iz unetog stringa treba izdvojiti N znakova sa leve strane.
// Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'.
// Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

function tenth(n) {
  let recenica = prompt("Unesite neku recenicu: ");
  let prvihN = "";
  for (let i = 0; i < n; i++) {
    prvihN += recenica[i];
  }
  if (n > recenica.length) {
    return recenica;
  } else {
    return prvihN;
  }
}

console.log(tenth(18));
