// while petlja nam omogucava iteraciju nekoliko puta (ne moramo znati tacan broj) i uz odredjeni uslov
// izvrsavanje bloka koda koji smo definisali unutar petlje.

// Sintaksa:
// while (uslov) {
// blok koda za izvrsavanje
// }

// Ispisati brojeve od 1 do 5

let broj = 1;

while (broj <= 5) {
  console.log(broj);
  broj++; // ne zaboraviti povecanje(smanjenje) brojaca
}

// Ispisati sve brojeve od 1 do 10 koji su parni
let broj2 = 1;
while (broj2 <= 10) {
  if (broj2 % 2 === 0) {
    console.log(broj2);
  }
  broj2++;
}

broj2 = 2;
while (broj2 <= 10) {
  console.log(broj2);
  broj2 += 2;
}

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:
let broj3 = 1;
let broj4 = Number(prompt("Unesite neki broj: "));
if (isNaN(broj4)) {
  console.log("Niste uneli korektnu vrednost za broj.");
} else {
  while (broj3 <= broj4) {
    console.log(broj3 ** 2);
    broj3++;
  }
}

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

let broj5 = Number(prompt("Unesite prvi broj: "));
let broj6 = Number(prompt("Unesite drugi broj: "));

if (isNaN(broj5) || isNaN(broj6)) {
  console.log("Niste uneli korektne vrednosti za brojeve.");
} else if (broj5 === broj6) {
  console.log("Brojevi moraju biti razliciti.");
} else if (broj5 < broj6) {
  while (broj5 <= broj6) {
    console.log(broj5);
    broj5++;
  }
} else if (broj5 > broj6) {
  while (broj6 <= broj5) {
    console.log(broj6);
    broj6++;
  }
}

// do while petlja predstavlja zapravo obrnuti postupak while petlje.

// Sintaksa:
// do {
// blok koda koji se izvrsava
// } while (uslov)

// Ispisati brojeve od 1 do 5

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Nedostatak do while petlje kroz primer.

let x = 20;
do {
  console.log(x ** 2);
  x++;
} while (x < 10);
