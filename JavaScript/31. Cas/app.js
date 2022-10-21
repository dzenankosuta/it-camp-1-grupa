// JavaScript Array Iteration //

// Array Iteration metode prolaze kroz svaki element niza.

// forEach() metoda - poziva funkciju za svaki element niza.

const niz = ["Imran", "Talib", "Ahmed", "Abdurahman", "Muhamed"];

niz.forEach((element) => console.log(element)); // menja for petlju za dati niz

for (let element of niz) {
  console.log(element);
}
for (let i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}

niz.forEach((element, index, array) =>
  console.log(
    `${index}:${element} i treci argument je zapravo ceo niz: ${array}`
  )
);

const brojevi = [4, -6, 12, 31, -21, 13, 6, 202, 34.5];

// map() metoda - KREIRA NOVI NIZ, tako sto se iterira niz na koji se primenjuje metoda.
// Vazno je napomenuti da map() metoda ne menja originalni niz.

// Napraviti funkciju koja uzima jedan niz kao argument, a vraca novi niz
// ciji su elementi za 2 veci od elemenata prvog niza.

function nizAddTwo(arr) {
  let noviNiz = [];
  for (let number of arr) {
    noviNiz.push(number + 2);
  }
  return noviNiz;
}
console.log(nizAddTwo(brojevi));

const noviNiz = brojevi.map((element) => element + 2);
console.log(noviNiz);

const noviNiz2 = niz.map(function (element) {
  return element + "_Prezime";
});

console.log(noviNiz2);

// Pomocu map() metode napraviti novi niz koji vraca sve pozitivne brojeve kvadrirane,
// a negativne onakve kakvi jesu.

const brojevi2 = [-4, -9, 5, 6, 9, 15, 19, -14];

const pozitivniNaKvadrat = brojevi2.map((element) => {
  if (element > 0) {
    return element ** 2;
  } else {
    return element;
  }
});
console.log(pozitivniNaKvadrat);

// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine
// vece od 17.
