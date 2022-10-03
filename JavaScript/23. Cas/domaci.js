const ograda = () => {
  const d = parseInt(prompt("Unesite duzinu terena: "));
  const s = parseInt(prompt("Unesite sirinu terena: "));
  const r = parseInt(
    prompt("Unesite rastojanje iymedju iviye terena i ograde: ")
  );

  const obimOgrade = 2 * d + 2 * s + 8 * r;

  if (isNaN(d) || isNaN(s) || isNaN(r)) {
    return `Unete vrednosti moraju biti brojevi.`;
  } else if (d < 90 || d > 120) {
    return `Duzina terena mora biti u segmentu [90,120].`;
  } else if (s < 45 || s > 90) {
    return `Sirina terena mora biti u segmentu [45,90].`;
  } else if (r < 2 || r > 10) {
    return `Rastojanje mora biti u segmentu [2,10].`;
  } else {
    return `Za ogradjivanje terena datih dimenzija je potrebno ${obimOgrade} metara.`;
  }
};
console.log(ograda());
