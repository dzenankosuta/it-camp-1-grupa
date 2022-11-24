const niz = [
  "Vahid",
  "Talib",
  "Imran",
  "Ahmed",
  "Abdurahman",
  "Amina B.",
  "Amina M.",
  "Imran",
  "Muusa",
  "Harun",
];

// indexOf() metoda pretrazuje niz i vraca nam index elementa koji predstavlja argument date metode.
// Ako se element koji pretrazujemo ne nalazi unutar niza, rezultat ce biti -1.

// Napraviti funkciju koja za argument uzima neki niz, i vraca nam poziciju na kojoj se nalazi Imran, dok ako Imran nije prisutan neka nam ispise poruku:
// "Sad ceImran doci."

function isImranHere(arr) {
  if (arr.indexOf("Imran") === -1) {
    return `Sad ce Imran doci.`;
  } else {
    return `Imran se nalazi na ${arr.indexOf("Imran") + 1}. mestu.`;
  }
}

console.log(isImranHere(niz));

// lastIndexOf() metoda pretrazuje niz i vraca nam index poslednjeg pojavljivanja elementa koji predstavlja argument date metode. (U slucaju da se neki element nalazi vise puta u nekom nizu)
// Ako se element koji pretrazujemo ne nalazi unutar niza, rezultat ce biti -1.

function isImranHereMoreThanOnce(arr) {
  if (arr.indexOf("Imran") === -1) {
    return `Sad ce Imran doci.`;
  } else {
    return `Imran se nalazi na ${arr.lastIndexOf("Imran") + 1}. mestu.`;
  }
}
console.log(isImranHereMoreThanOnce(niz));

// includes() metoda funkcionise isto kao kod stringova. Zapravo vraca nam boolean u zavisnosti od toga da li se argument nalaazi unutar niza na koji primenjujemo datu metodu.

console.log(niz.includes("Mejra"));
console.log(niz.includes("Talib"));

// JavaScript keys() i entries() metode nam vracaju indekse datog niza, odnosno kombinaciju indksa i vrednosti.

const indeksi = niz.keys(); // Array Iterator Object

for (let indeks of indeksi) {
  console.log(indeks);
}

const indeksiIVrednosti = niz.entries(); // Array Iterator Object

for (let item of indeksiIVrednosti) {
  console.log(item);
}

// flat() metoda iz niza nizova pravi jedan niz koji je sacinjen od svih elemenata.

const svastara = [
  ["jabuke", "kruske", "madarine", "mango"],
  ["somun", "ruza", "bageta"],
  ["krompir", "bostan", "luk"],
];
const svastaraSredjena = svastara.flat();
console.log(svastaraSredjena);
svastaraSredjena.sort().reverse();
console.log(svastaraSredjena);

// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalzi.
