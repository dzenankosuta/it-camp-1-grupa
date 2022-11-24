// OBJEKTI SU GLAVNA STVAR U JAVASCRIPTU.
// Objekti su promenljive koje mogu sadrzati vise vrednosti.
// Oni se zapisuju u name:value paru. Jedan takav par se zove svojstvo.

const car = {
  marka: "BMW",
  godiste: 2004,
  boja: "crna",
};

console.log(car); // ispisivanje objekta

// Svojstvima objekta mozemo da pristupimo na 2 nacina:
// 1.
console.log(car.boja);
// 2.
console.log(car["marka"]);

// Objekti takodje mogu sadrzati metode.
// Metode su sadrzane unutar objekta kao definicija funkcije.

const person = {
  JMBG: 1306005783971,
  ime: "Muhamed",
  prezime: "Krkmisevic",
  mesto: "Lug",
  imeIPrezime: function () {
    return this.ime + " " + this.prezime;
  },
};
// this predstavlja referencu na neki objekat.
// this nije promenljiva, vec keyword (rezervisana rec) u JavaScript_u.
// Vrednost this se ne moze promeniti.

console.log(person);
console.log(person.JMBG);
console.log(person.imeIPrezime());

// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek datih ocena).
