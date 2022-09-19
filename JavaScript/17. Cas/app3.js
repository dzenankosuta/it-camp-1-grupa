function teren() {
  let sirina = +prompt("Unesite sirinu terena: ");
  let duzina = +prompt("Unesite duzinu terena: ");

  if (isNaN(sirina) || isNaN(duzina)) {
    return `Sirina i Duzina moraju biti brojevi.`;
  } else if (sirina < 1 || sirina > 100) {
    return `Sirina mora biti izmedju 1-100`;
  } else if (duzina < 1 || duzina > 100) {
    return `Duzina mora biti izmedju 1-100`;
  } else {
    let ukupno = 2 * sirina + 2 * duzina;
    return `Ukupno metara koje sportista predje: ${ukupno}`;
  }
}

console.log(teren());
