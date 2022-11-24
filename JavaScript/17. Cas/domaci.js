const pokloni = () => {
  const cokoladicaPoklon = +prompt(
    "Unesite broj cokoladica po jednom poklonu: "
  );
  const ukupnoCokoladica = +prompt("Unesite ukupan broj cokoladica: ");
  if (isNaN(cokoladicaPoklon) || isNaN(ukupnoCokoladica)) {
    return "Niste uneli korektne vrednosti";
  } else if (cokoladicaPoklon < 1 || cokoladicaPoklon > 20) {
    return "Broj cokoladica prema jednom poklonu mora biti izmedju 1 i 20.";
  } else if (ukupnoCokoladica < 0 || ukupnoCokoladica > 1000) {
    return "Ukupan broj cokoladica mora biti izmedju 1 i 1000";
  } else {
    return Math.floor(ukupnoCokoladica / cokoladicaPoklon);
  }
};

console.log(pokloni());
