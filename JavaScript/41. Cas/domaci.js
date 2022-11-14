// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

console.log(myCar["menjac"]);
console.log(myCar.servis["datum"]);
console.log(myCar.servis.datum);
console.log(myCar["servis"]["datum"]);

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanjeBrzine = function (brzina) {
  if (this.trenutnaBrzina + brzina > this.maksimalnaBrzina) {
    console.log(`Nije moguce voziti vise od maksimalne brzine.`);
  } else if (brzina < 0 || isNaN(brzina)) {
    console.log(`Niste uneli adekvatno povecanje brzine.`);
  } else {
    this.trenutnaBrzina += brzina;
  }
};

myCar.smanjenjeBrzine = function (brzina) {
  if (this.trenutnaBrzina - brzina < 0) {
    console.log(`Nije moguce voziti sporije od 0 Kmh.`);
  } else if (brzina < 0 || isNaN(brzina)) {
    console.log(`Niste uneli adekvatno smanjenje brzine.`);
  } else {
    this.trenutnaBrzina -= brzina;
  }
};

myCar.ukoci = function () {
  this.trenutnaBrzina = 0;
};
// console.log(myCar);
myCar.povecanjeBrzine(100);
myCar.smanjenjeBrzine(70);
// myCar.smanjenjeBrzine(60);
myCar.ukoci();

console.log(myCar.trenutnaBrzina);
console.log(myCar);
