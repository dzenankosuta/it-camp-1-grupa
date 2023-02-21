// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.
// DATA1 = [2, 26, 38, 75, 11, 29];
// DATA2 = ["a", "b", "c", "d", "e"];

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const testTask = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  const newArr2 = newArr.filter((el) => el % 2 === 0);
  newArr2.unshift(10, 20);
  return `Prvi pomocni niz je: ${newArr}, \nDrugi pomocni niz je: ${newArr2}`;
};
console.log(testTask(DATA1, DATA2));
