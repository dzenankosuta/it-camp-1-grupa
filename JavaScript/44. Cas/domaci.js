// Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

const niz = [
  {
    ime: "Vahid",
    prezime: "Gasanin",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "braon",
    polozenC: true,
  },
  {
    ime: "Imran",
    prezime: "Hazirovic",
    starost: 20,
    bojaOciju: "braon",
    bojaKose: "plava",
    polozenC: true,
  },
  {
    ime: "Ahmed",
    prezime: "Krkmisevic",
    starost: 19,
    bojaOciju: "plava",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Muhamed",
    prezime: "Krkmisevic",
    starost: 14,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Abdurahman",
    prezime: "Selimovic",
    starost: 16,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Amina",
    prezime: "Besirovic",
    starost: 18,
    bojaOciju: "plava",
    bojaKose: undefined,
    polozenC: false,
  },
  {
    ime: "Amina",
    prezime: "Marovac",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "braon",
    polozenC: true,
  },
];

const filteredStudents = (par) => {
  const filtered = par.filter(
    (student) => student.bojaOciju === "braon" && student.polozenC === false
  );
  return filtered;
};

console.log(filteredStudents(niz));

person = {
  ime: "Amina",
  prezime: "Besirovic",
  starost: 18,
  bojaOciju: "plava",
  bojaKose: undefined,
  polozenC: false,
};

const { ime, starost, polozenC } = person;
console.log(ime);
console.log(starost);
console.log(polozenC);
