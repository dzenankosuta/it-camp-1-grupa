//2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
//Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
//Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const funkcija1 = (niz1, niz2) => {
  const niz3 = niz1.concat(niz2);
  const niz4 = [];

  niz4.push(10, 20);

  for (element of niz1) {
    if (element % 2 === 0) {
      niz4.push(element);
    }
  }

  return [niz3, niz4];
};

console.log(funkcija1(DATA1, DATA2));
