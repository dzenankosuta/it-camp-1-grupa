// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.
DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];

const drugiZadatak = (niz1, niz2) => {
  const noviNiz1 = niz1.concat(niz2);
  const noviNiz2 = noviNiz1.filter((element) => element % 2 === 0);
  noviNiz1.unshift(10, 20);
  return ` Prvi pomocni niz je ${noviNiz1},a drugi pomocni niz je ${noviNiz2}`;
};
console.log(drugiZadatak(DATA1, DATA2));
