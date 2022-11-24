// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

// 1.1
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 1.2
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// 2.
for (let i = 50; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 3.
// Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

// 3.
for (let i = 6; i <= 14; i++) {
  console.log(i * 2);
}

// 4.
let suma = 0;
for (let i = 11; i <= 20; i += 2) {
  suma += i;
}

console.log(suma);
