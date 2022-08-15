// Ispisati brojeve od 1 do 10, jedan ispod drugog
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// Za resavanje ovog (i slicnih primera) je najjednostavnije koristiti petlju (brojac) --LOOP--
//  U JavaScriptu imamo 3 petlje preko kojih mozemo izvrsiti nekoliko linija koda na brzi nacin.

// 1. for petlja:
// U for petlji je svakako dozvoljeno koristiti if naredbu prema potrebi.

// for (statement1; statement2; statement3) {
// blok koda koji se izvrsava u svakoj iteraciji
// }

// statement1 predstavlja definisanje promenljive koja predstavlja iterator.
// statement2 predstavlja uslov, odnosno granicu do koje ce se izvrsavati iteracije.
// statement3 predstavlja promeni vrednosti iteratora (to moze biti povecanje ili smanjenje).

// Ispisati brojeve od 1 do 10, jedan ispod drugog
for (let x = 1; x < 11; x++) {
  console.log(x);
}

let i;
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// Ispisati brojeve od 1 do 10, osim broja 2 i broja 5.
// 1.nacin:
for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// Ako se nadje break rezervisana rec (keyword) unutar petlje, to znaci da od tog trenutka
// petlja prestaje za iteracijama, odnosno zavrsava se.

// Ako se nadje continue rezervisana rec (keyword) unutar petlje, to znaci da se ta iteracija
// preskace, tj. odmah se prelzi na sledecu iteraciju.

// 2.nacin:
for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 1. nacin
for (var z = 1; z <= 20; z++) {
  if (z % 2 === 0) {
    console.log(z);
  }
}

// 1. nacin
for (var z = 2; z <= 20; z += 2) {
  console.log(z);
}

// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.
