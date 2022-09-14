// trim() metoda brise sve bespotrebne razmake na pocetku i kraju stringa.

let recenica = "      Neka dugacka recenica.       ";
console.log(recenica);
console.log(recenica.length);
let skracenaRecenica = recenica.trim();
console.log(skracenaRecenica);
console.log(skracenaRecenica.length);

// Postoje 3 metode za ekstraktovanje stringova:

// 1. charAt(position)
// 2. charCodeAt(position)
// 3. pristupanje preko []

console.log(skracenaRecenica.charAt(13));
console.log(skracenaRecenica.charCodeAt(13));
console.log(skracenaRecenica[13]);
// Pristupanje nepostojecem indeksu se odrazava razlicito u zavisnosti od toga da li koristimo
// metodu charAt() ili pristupamo preko []
console.log(skracenaRecenica.charAt(126)); // vraca prazan string
console.log(skracenaRecenica[126]); // vraca undefined
