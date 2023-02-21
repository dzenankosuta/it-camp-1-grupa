/*(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza. Napraviti jos jedan pomocni niz koji
ce iz prvog dodatnog niza uzeti parne brojeve. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
Funkcija na kraju treba da vrati dva napravljena pomocna niza.*/
DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];

// let pomocniNiz = [...DATA1, ...DATA2];
// console.log(pomocniNiz);
// let noviNiz = pomocniNiz.filter((element) => {
//   return element % 2 === 0;
// });

// noviNiz.push(20);
// noviNiz.unshift(10);
// console.log(noviNiz);

function Funkcija(arr1, arr2) {
  let pomocniNiz = [...arr1, ...arr2];
  let noviNiz = pomocniNiz.filter((element) => {
    return element % 2 === 0;
  });
  noviNiz.unshift(20);
  noviNiz.unshift(10);
  return pomocniNiz && noviNiz;
}

console.log(Funkcija(DATA1, DATA2));
