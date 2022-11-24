person = {
  ime: "Amina",
  prezime: "Besirovic",
  starost: 18,
  bojaOciju: "plava",
  bojaKose: undefined,
  polozenC: false,
};
osoba = {
  ime: "Amina",
  prezime: "Besirovic",
  starost: 18,
  bojaOciju: "plava",
  bojaKose: undefined,
  polozenC: false,
};
const person2 = person;

// freeze() metoda cini objekat immutabile
person.prezime = "Marovac";
// console.log(person);

// Object.freeze(person);

// person.prezime = "Besirovic"; // ne menja se jer je objekat "zamrznut"
// console.log(person);
// person.godinaRodjenja = 2003;
// console.log(person);

// seal() metoda cini objekat promenljivim ali nije dozvoljeno dodavanje niti brisanje elemenata.

// Object.seal(person);

// person.godinaRodjenja = 2003;
// console.log(person);
person.prezime = "Besirovic";
// console.log(person);
// delete person.bojaKose;
// console.log(person);

// values() metoda vraca niz vrednosti datog objekta.
const vrednosti = Object.values(person);
console.log(vrednosti);

// keys() metoda vraca niz kljuceva (names) datog objekta.
const svojstva = Object.keys(person);
console.log(svojstva);

// entries() metoda vraca niz nizova (svaki podniz je name:value par).
const parovi = Object.entries(person);
console.log(parovi);
const parovi2 = parovi.flat();
console.log(parovi2);

//  is() metoda ispituje identicku jednakost.
console.log(Object.is(person, osoba));
console.log(Object.is(person, person2));
