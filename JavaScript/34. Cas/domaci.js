// Domaci zadaci:
// 1. Zadatak
// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti
//  novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

const niz = [-9, -78, 4, 17, -22, -5, 7, 6, 10, 18];

const firstTask = (arr) => {
  const filtered = arr.filter((element) => element > 2);
  const mapped = filtered.map((element) => {
    // uslov ? stvar za izvrsavanje : stvar koja se inace izvrsava
    return element < 8 ? (element * 4) / 2 : element * 7;
    // if (element < 8) {
    //     return (element *4 )/2
    // } else {
    //     return element * 7
    // }
  });
  const lessThan10 = mapped.filter((element) => element < 10);
  return lessThan10;
};
console.log(firstTask(niz));

// First task, second way
// Dozvoljeno je odjednom primeniti vise metoda!
const firstTaskS = (arr) => {
  const lessThan10 = arr
    .filter((element) => element > 2)
    .map((element) => {
      return element < 8 ? (element * 4) / 2 : element * 7;
    })
    .filter((element) => element < 10);
  return lessThan10;
};

console.log(firstTaskS(niz));

// 2. Zadatak NAPRAVITI FUNKCIJU
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog
// niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

// const DATA1 = [2, 26, 38, 75, 11, 29];
// const DATA2 = ["a", "b", "c", "d", "e"];

// Kuci
