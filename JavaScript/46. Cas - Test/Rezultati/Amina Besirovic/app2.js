// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
//  Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
//  U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];

const niz = (arr1, arr2) => {
    const pomocniNiz = arr1.concat(arr2)
    const pomocniNiz2 = [];
    for (let i of pomocniNiz) {
        if (i % 2 === 0) {
            pomocniNiz[i];
        }
        pomocniNiz2.unshift(10, 20);
        return `Pomocni niz je ${pomocniNiz}, a drugi pomocni niz je ${pomocniNiz2}.`
    }
}

console.log(niz(DATA1, DATA2));
