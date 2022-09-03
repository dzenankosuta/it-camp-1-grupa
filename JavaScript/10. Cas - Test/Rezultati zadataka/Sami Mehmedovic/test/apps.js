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

// 1. zadatak
let broj1 = Number(prompt('Unesite neki realan broj: '));
if (isNaN(broj1)) {
    console.log('Niste uneli korektnu vrednost!!')
} else {
    console.log(broj1 ** 2)
}


// 2. zadatak
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('FIZZ');
    } else if ( i % 5 === 0) {
        console.log('BUZZ');
    } else if (i % 3 === 0 && i % 5 ===0) {
        console.log('FIZZ BUZZ');
    } else {
        console.log(i);
    }

}

// 3. zadatak
// let recenica;
// recenica = 'Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa'
let recenica = 'Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa';
for (let i = 0; i <= recenica.length -1; i++); {
    if (recenica[i] === 'a , o , e , i ,u') {
        recenica += recenica[i].toUpperCase()
    }
}
console.log(recenica)