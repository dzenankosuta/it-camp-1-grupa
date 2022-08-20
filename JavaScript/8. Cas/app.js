// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

let n = Number(prompt("Unesite neki prirodan broj: "));
let suma = 0;
let brojDeljivih = 0;

if (isNaN(n) || n < 1) {
  console.log("Niste uneli prirodan broj.");
} else {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      suma += i;
      brojDeljivih += 1;
    }
  }

  console.log(
    "Broj deljivih brojeva od 1 do " +
      n +
      " sa 5 je: " +
      brojDeljivih +
      ". " +
      "Suma deljivih brojeva sa 5 je: " +
      suma
  );
}

// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

let brojBrojeva = 0;
let zbirBrojeva = 0;

for (let i = 3; i < 18; i++) {
  if (i % 3 === 0) {
    brojBrojeva += 1;
    zbirBrojeva += i;
  }
}
aritSredina = zbirBrojeva / brojBrojeva;

console.log("Aritmeticka sredina brojeva je: " + aritSredina);

// Domaci zadataci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, ljegov kvadrat i vrednost broja umanjenu za 25.
