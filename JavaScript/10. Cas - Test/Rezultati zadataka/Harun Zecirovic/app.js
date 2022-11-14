// 1 .
//    traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja 
// (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).


let x = Number(prompt('Unesite neki broj') );
if (isNaN(x)) {
    console.log('Nije unijeta korektna vrijednost za broj')
} else if (x % 1 === 0) {
    console.log(x**2)
}

// 2.
// Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:
// (i)	ako je broj deljiv sa 3, potrebno je ispisati ‘FIZZ’ umesto tog broja;
// (ii)	ako je broj deljiv sa 5, potrebno je ispisati ‘BUZZ’ umesto tog broja;
// (iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ‘FIZZ BUZZ’ umesto tog broja.


// let x = 1
// for (x=1;x<101;x++)
// if (x % 3 === 0 && x % 5 === 0){
//     console.log('FIZZ BUZZ')
// } else if (x % 3 === 0){
//     console.log('FIZZ')
// } else if (x % 5 === 0){
//     console.log('BUZZ')
// } else {
//     console.log(x)
// }


// 3.
// let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

// recenica = 'Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa'

// let recenica2 = ' '

// for (let x = 0; x <= recenica.length ; x++){
//     if (recenica[x] === 'a' || recenica[x] === 'e' || recenica[x] === 'i' ||
//     recenica[x] === 'o' || recenica[x] === 'u'){
//         recenica2 += recenica[x].toUpperCase();
//     }else if (x === recenica.length){
//         recenica2 += '.';
//     }else  {
//         recenica2 += recenica[x]
//     }
// }
// console.log(recenica2)