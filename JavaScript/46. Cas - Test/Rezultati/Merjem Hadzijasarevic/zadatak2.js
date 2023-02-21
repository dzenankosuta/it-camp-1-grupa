/*
2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
 U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
Funkcija na kraju treba da vrati dva napravljena pomocna niza.
DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];
*/
DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];

function addingArrays() {
  newData = DATA1.concat(DATA2);
  return newData;
}

var newArr = [];
for (i = 0; i < DATA1.length; i++) {
  i % 2 == 0;
  newArr = newArr.push();
}
