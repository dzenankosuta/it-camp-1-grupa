// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi
// pocinjati velikim slovima.

// 2. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine
// vece od 17.

niz1 = ["muhamed", "imran", "abdurahman", "harun"];
niz2 = niz1.map((element) => {
  return `${element[0].toUpperCase()}${element.slice(1, element.length)}`;
});
console.log(niz2);

// 2. Zadatak:
// 1. Nacin
const godine = [15, 14, 18, 18, 18, 17, 19, 19];

const punoletni = [];
for (let godina of godine) {
  if (godina > 17) {
    punoletni.push(godina);
  }
}

// 2. Nacin

// Na ovaj nacin nije moguce odraditi adekvatno zadatak jer
// map() metoda nam vraca novi niz sa istom duzinom kao originalni i
// otuda dobijamo undefined elemente.

// const punoletni2 = godine.map((element) => {
//   if (element > 17) {
//     return element;
//   }
// });
// console.log(punoletni2);
