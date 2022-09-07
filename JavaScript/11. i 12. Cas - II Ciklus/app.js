// if (i % 3 === 0 && i % 5 === 0) {
//   console.log("FIZZ");
// } else if (i % 3 === 0) {
//   console.log("FIIZ BUZZ");
// }

let prom = 5;
let prom2 = "5";

console.log(prom == prom2); // == proverava jednakost vrednosti

console.log(prom === prom2); // == proverava jednakost vrednosti i jednakost tipa

console.log(typeof prom2);

console.log(prom);
console.log(prom2);

let recenica =
  "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";

let recenica2 = "";

for (i = 0; i <= recenica.length; i++) {
  if (
    recenica[i] === "a" ||
    recenica[i] === "e" ||
    recenica[i] === "i" ||
    recenica[i] === "o" ||
    recenica[i] === "u"
  ) {
    recenica2 += recenica[i].toUpperCase();
  } else if (i === recenica.length) {
    recenica2 += ".";
  } else {
    recenica2 += recenica[i];
  }
}

console.log(recenica2);
