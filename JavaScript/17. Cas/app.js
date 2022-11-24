// startsWith() metoda nam vraca boolean u zavisnosti od toga da li dati string pocinje recju
// koja je smestena kao argument metode:

let recenica = "Provera stringova.";
console.log(recenica.startsWith("provera"));

// endsWith() metoda nam vraca boolean u zavisnosti od toga da li dati string zavrsava recju
// koja je smestena kao argument metode:

console.log(recenica.endsWith("ingova."));

// JavaScript TEMPLATE LITERALS
// Back-Ticks ``
// Prva prednost u odnosu na navodnike je sto pisanje navodnika unutar stringa nam nece vratiti gresku.
let recenica2 = `Danas je bilo pravo "jesenje" vreme.`;

// Omoguceno je pisanje stringa u vise redova:
let recenica3 = `Fotografisanje je zakazano za utorak,
 a zvezda Pari Sen Žermena je odbila da se slika 
 jer francuski Savez nije uspeo da "modifikuje 
 ugovor o liku i delu" koji Mbape ima sa jednim 
 od svojih sponzora čiji je promoter.`;

// Interpolacija, odnosno mozemo zapisivati string u kombinaciji sa varijablama:
let a = 10;
let b = 14;
let c = `Prva vrednost je ${a}, druga vrednost je: ${b}.`;
console.log(c);
