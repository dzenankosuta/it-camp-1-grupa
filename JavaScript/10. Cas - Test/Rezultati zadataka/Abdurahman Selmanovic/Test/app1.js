// Zadaci

// 1.	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

// 2.	(20) Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:

// (i)	ako je broj deljiv sa 3, potrebno je ispisati ‘FIZZ’ umesto tog broja;
// (ii)	ako je broj deljiv sa 5, potrebno je ispisati ‘BUZZ’ umesto tog broja;
// (iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ‘FIZZ BUZZ’ umesto tog broja.

// 3.	(20)
//  let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 === 0) {
		console.log("FIZZBUZZ");
	} else if (i % 3 == 0) {
		console.log("FIZZ");
	} else if (i % 5 == 0) {
		console.log("BUZZ");
	} else console.log(i);
}
