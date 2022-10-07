// JavaScript Date Objects //

// Datumi se prave uz sintaksu:
new Date();

// Postoje 4 nacina da dobijemo neki datum:

// 1. new Date() - vraca trenutno vreme

let datum = new Date();
console.log(datum);

// 2. new Date(godina, "mesec", dan, sat, minut, sekunda, milisekunda)
// JavaScript  mesece racuna od 0 do 11
// Ovaj nacin je validan ako imamo bar 2 argumenta, a maksimum 7
let datum2 = new Date(1996, 5, 24, 23, 37, 12, 44);
console.log(datum2);

let datum3 = new Date(1996, 5);
console.log(datum3);

// 3. new Date(milisekunde)
// Pocetni datum: 1970-01-01

let datum4 = new Date(54e11); // dodaje 54e11 vrednost na datum 1970-01-01
console.log(datum4);

// 4. new Date(date string)

let datum5 = new Date("2015-03-25");
console.log(datum5);

// Ako u prvom argumentu (godina) stavimo samo dve cifre, JavaScript to posmatra kao
// prosli vek, te automatski tim dvema ciframa prethodi 19..

let datum6 = new Date(20, 7, 21);
console.log(datum6);

// JavaScript skladisti datume kao broj milisekundi.

// Prikazivanje datuma:

// Postoji nekoliko metoda za prikazivanje datuma. Sintaksa je: datum.method()

// 1. datum.toString()
datum6 = new Date(20, 7, 21);
console.log(datum6.toString());

// 2. datum.toUTCString()
console.log(datum6.toUTCString());

// 3. datum.toDateString()
console.log(datum6.toDateString());

// 4. datum.toISOString()
console.log(datum6.toISOString());

// Date.parse(datum) - vraca razliku u milisekundama izmedju datuma koji predstavlja
// argument funkcije i 01-01-1970

console.log(Date.parse(1975, 0, 1));

// Postoje metode za dobijanje parametara nekog datuma,
// kao i metode za menjanje parametara nekog datuma.

// Get Date metode

// 1. getFullYear()

let trenutno = new Date();
console.log(trenutno.getFullYear());

// 2. getMonth()

// 3. getDate()

// 4. getHours()

// 5. getMinutes()

// 6. getSeconds()

// 7. getMiliseconds()

// 8. getTime() - vraca broj milisekundi izmedju 01-01-1970 i datuma (argumenta funkcije)
console.log(trenutno.getTime());
console.log(Date.parse(trenutno));

// 9. getDay() - vraca dan u nedelji 0(nedelja)-6(subota)
let nedelja = new Date(2022, 9, 9, 21, 45, 45);
console.log(nedelja.getDay());

// Date.now()
console.log(Date.now()); // vraca broj milisekundi izmedju 01-01-1970 trenutnog vremena

// Set Date metode

// 1. setFullYear()
trenutno = new Date();
let setYear = trenutno.setFullYear(2017);
console.log(trenutno);

// 2. setMonth()

// 3. setDate()

// 4. setHours()

// 5. setMinutes()

// 6. setSeconds()

// 7. setMiliseconds()

let setSeconds = trenutno.setSeconds(12);
console.log(trenutno);

// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"
