// Arrays (Nizovi)

// Niz (Array) je specijalna promenljiva koja moze skladistiti vise od jedne vrednosti.
// Sintaksa:

const niz1 = ["item1", "item2", "item3"];

// Setimo se pravila da ponovna dodela vrednosti za promenljivu
// "niz1" nije moguca. Dakle, 10 linija koda je nekorektna.
// niz1 = ["item1", "item2"];
console.log(niz1);

// Ali treba napomenuti da mozemo izmeniti (dodati, izbrisati) neke elemente
// niza, kroz primenu brojnih metoda koje cemo raditi ubuduce, bez obzira
// na to sto je niz definisan sa const keyword.

// Sto se tice razmaka, novih redova, oni nece uticati na definisanje niza.

const cars0 = "Mercedes, BMW, Audi, VolksWagen, Volvo";
console.log(cars0[2]);
const cars = ["Mercedes", "BMW", "Audi", "VolksWagen", "Volvo"];

// Pristupanje elementima niza. Slicno kao kod stringova.
// Indeksiranje ide od 0 pa sve do (duzina niza - 1).
console.log(cars[2]);

// Duzinu niza dobijamo pomocu metode length
let duzina = cars.length;
console.log(duzina);

for (let i = 0; i <= duzina - 1; i++) {
  console.log(cars[i]);
}

// Drugi nacin zapisivanja for petlje je namenjen za svaki iterirajuci objekat.

for (let car of cars) {
  console.log(car);
}

let rec = "Iterirajuci";
for (let slovo of rec) {
  console.log(slovo);
}

// Zapravo, mozemo na pocetku definisati prazan niz, pa tek onda mu
// dodeljivati vrednosti.

const cars2 = [];
console.log(cars2);
cars2[0] = "BMW";
console.log(cars2);
cars2[1] = "Audi";
console.log(cars2);
// Prave se rupe u nizu. Nije dobra praksa popunjavanja niza.
cars2[4] = "Mercedes";
console.log(cars2);

console.log(cars2[2]);

// Mozemo vrlo lako zameniti neki element drugim.

const cars3 = ["Mercedes", "BMW", "Audi", "VolksWagen", "Volvo"];
cars3[2] = "Mercedes";
console.log(cars3);

// Videli smo takodje da jedan niz moze sadrzati duplikate.

// Jos jedan nacin definisanja nizova je preko new keyword.
const cars4 = new Array("ponedeljak", "sreda", "petak");
console.log(cars4);

// Za jednostavnost, citljivost i brzinu izvrsavanja bolje je koristiti
// klasicni nacin (preko []) definisanja nizova.

// Niz, definisan na bilo koji nacin ima tip objekat.
console.log(typeof cars3);
console.log(typeof cars4);

// Postoje 2 nacina za proveru da li je data promenljiva niz:
// 1. Array.isArray(cars3)
// 2. cars3 instanceof Array

console.log(Array.isArray(cars3));
console.log(cars3 instanceof Array);

// Niz moze sadrzati elemente razlicitog tipa.

const abdurahman = ["Abdurahman", "Selmanovic", 14, false];
console.log(abdurahman);
console.log(abdurahman[3]);
console.log(typeof abdurahman[3]);

// Niz moze da sadrzi objekte, kao sto su datumi, nizovi, funkcije,...
const niz2 = [
  "Novi Pazar",
  "Srbija",
  new Date(),
  ["centar nit", "it camp", "II ciklus"],
  function () {
    return 5;
  },
];

console.log(niz2);
