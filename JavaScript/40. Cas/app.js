// JSON - JavaScript Object Notation

// Najcesce se koristi prilikom slanja podataka sa servera do Web stranice.

// Sintaksa vrlo slicna objektu u JavaScriptu:

// Objekat u JavaScriptu:
// const student = {
//   ime: "Ahmed",
//   prezime: "Krkmisevic",
//   brojIndeksa: "035029",
// };

// JSON Format:
// const student2 = {
//   "ime": "Ahmed",
//   "prezime": "Krkmisevic",
//   "brojIndeksa": "035029",
// };

// Objekti su promenljivi! (Mutable)

const person = {
  JMBG: 1404003783933,
  firstName: "Ahmed",
  lastName: "Krkmisevic",
};

// Bilo koja promena na x objekat ce takodje promeniti person objekat.
// Ovo vazi za neprimitivne tipove podataka, tj. novoj promenljivoj x dodeljujemo referencu na objekat person (a ne vrednost).
// Identicko izjednacavanje.
const x = person;
console.log(x);

console.log(x.firstName);

x["firstName"] = "Muhamed";
console.log(x);

console.log(person);

// Brisanje svojstva iz objekta se vrsi preko delete keyword:

// delete person["JMBG"]
delete person.JMBG;
console.log(person);
// delete brise i name i value.

// Vrednost u objektu moze biti:
// neki drugi objekat,
// niz,
// metoda (funkcija)...

// JSON.stringify() metoda nam sluzi za prevodjenje objekta u JSON, nakon toga JSON formata u string.

const stringObjekta = JSON.stringify(person);
console.log(stringObjekta);
console.log(typeof stringObjekta);

// JSON.parse nam vraca (ako moze) objekat iz poslatog argumenta.
console.log(JSON.parse(stringObjekta));
console.log(typeof JSON.parse(stringObjekta));

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
