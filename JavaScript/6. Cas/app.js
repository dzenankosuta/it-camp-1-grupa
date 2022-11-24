// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// const broj1 = Number(prompt("Unesite prvi broj: "));
// const broj2 = Number(prompt("Unesite drugi broj: "));
// if (isNaN(broj1) || isNaN(broj2)) {
//   console.log("Niste uneli korektne vrednosti za brojeve.");
// } else if (broj1 === broj2) {
//   console.log(
//     "Povrsina kvadrata na osnovu unetih brojeva je: " + broj1 * broj2
//   );
// } else {
//   console.log(
//     "Povrsina pravougaonika na osnovu unetih brojeva je: " + broj1 * broj2
//   );
// }

// 2. Zadatak
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

const x = Number(prompt("Unesite prvi broj: "));
const y = Number(prompt("Unesite drugi broj: "));

if (isNaN(x) || isNaN(y)) {
  console.log("Niste uneli korektne vrednosti za brojeve.");
} else if (y === 0) {
  console.log("Deljenje nulom nije moguce.");
} else {
  console.log("Kolicnik broja " + x + " i broja " + y + " je: " + x / y);
}
