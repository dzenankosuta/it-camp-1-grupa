// TRUTHY AND FALSY VALUES

let isSunny = false;
// isSunny = true;
// if (isSunny === true) {
//   console.log("Napolju je suncano vreme. Ponesite naocare.");
// } else if (isSunny === false) {
//   console.log("Napolju je oblacno vreme.");
// }

if (isSunny) {
  console.log("Napolju je suncano vreme. Ponesite naocare.");
} else if (!isSunny) {
  console.log("Napolju je oblacno vreme.");
}

// Sve FALSY vrednosti su:
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

// Ispitati da li je broj koju unosi korisnik TRUTHY ili FALSY:
function truthyOrFalsy() {
  const vrednost = +prompt("Unesite neku vrednost");
  if (vrednost) {
    return "Uneli ste TRUTHY vrednost.";
  } else {
    return "Uneli ste FALSY vrednost.";
  }
}

console.log(truthyOrFalsy());
