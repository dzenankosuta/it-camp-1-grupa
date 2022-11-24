const godine = [
  { starost: 19 },
  { starost: 19 },
  { starost: 19 },
  { starost: 18 },
  { starost: 16 },
  { starost: 18 },
  { starost: 14 },
  { starost: 17 },
];

// Napraviti novi niz(punoletni) koji ce sadrzati one elemente (objekte) cija je starost veca od 17.
const punoletni = godine.filter((element) => element.starost > 17);
console.log(punoletni);

// Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.
