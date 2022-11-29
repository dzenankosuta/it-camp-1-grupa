// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.
DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];
const myFunction = (arr, arr2) => {
	const obaNiza = DATA1.concat(DATA2);
	const parniBrojevi = obaNiza.filter((element) => {
		return element % 2 === 0;
	});
	parniBrojevi.unshift(10, 20);

	return `${obaNiza},\n ${parniBrojevi}`;
};

console.log(myFunction(DATA1, DATA2));
