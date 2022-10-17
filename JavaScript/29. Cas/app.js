// JavaScript Array delete
// Preko delete keyword (rezervisane reci) mozemo izbrisati neki element niza.

let voce = ["jagoda", "banana", "mandarina", "ananas"];
// Ovaj nacin brisanja elementa u nizu nam ostavlja prazna mesta.
delete voce[2];

console.log(voce);
// Preporucuje sew koriscenje pop() ili push().

// Spajanje nizova:
// Za spajanje nizova se koristi concat() metoda.
// concat() metoda pravi novi niz koji je sadrzan od elemenata
// onih nizova koji se spajaju.

voce = ["jagoda", "banana", "mandarina", "ananas"];
let povrce = ["krastavica", "krompir", "luk"];

let voceIPovrce = voce.concat(povrce);
console.log(voceIPovrce);

// concat() metoda moze sadrzati vise elemenata...
let salate = ["cezar", "ruska", "pileca"];

let triNiza = salate.concat(voce, povrce);

console.log(triNiza);

// Ako se kao argument concat() metode nadje neki string,
// taj string zapravo predstavlja novi element koji ce biti dodat postojecem nizu.
let pojacanoVoce = voce.concat("tresnja", "visnja");
console.log(pojacanoVoce);

// splice() metoda - se koristi za dodavanje novih elemenata u nizu

voce = ["jagoda", "banana", "mandarina", "ananas"];

// splice metoda uzima namanje 2 argumenta, gde:
//  1. argument predstavlja indeks na kojem ce da se vrse neke promene
// (indeks elementa od kog ce biti izbrisano nekoliko elemeta i od kog
// ce se eventualno dodati nekoliko novih elemenata)
//  2. argument predstavlja broj koliko se zapravo brise elemenata na
// poziciji definisanoj na prvom argumentu.
//  3.,4., ... argumenti predstavljaju elemente koji ce se dodati na poziciji
// koju smo definisali na prvom argumentu.
voce.splice(2, 1, "kivi", "bostan");

console.log(voce);

let niz = [
  "Imran",
  "Muhamed",
  "Abdurahman",
  "Amina",
  "Amina",
  "Mejra",
  "Talib",
];

// Primenom splice metode:
// 1. Izbrisati iz niza sve devojke;
// 2. Izbrisati iz niza sve muskarce;
// 3. Izbrisati iz niza sve "Amina" i
// na mestu prve "Amina" dodati "Harun" i "Muusa"
// 1.
// niz.splice(3, 3);
console.log(niz);
// 2.
// niz.splice(0, 3);
// niz.splice(3, 1);
console.log(niz);
// 3.
// niz.splice(3, 2, "Harun", "Muusa");
console.log(niz);

// splice() metoda vraca niz sa izbrisanim elementima
let noviNiz = niz.splice(3, 3);
console.log(noviNiz);

// slice() metoda nam daje deo niza kao novi niz.

niz = ["Imran", "Muhamed", "Abdurahman", "Amina", "Amina", "Mejra", "Talib"];
// Pravimo novi niz primenjivanjem slice() metode na nas "niz".
let skraceni = niz.slice(2, 6);
console.log(skraceni);
// U slucaju da drugi argument bude izostavljen, daje se ostatak niza.
let skraceni2 = niz.slice(2);
console.log(skraceni2);

// Domaci:
// 1. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 2. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)
