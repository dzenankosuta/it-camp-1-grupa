// //  let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
// Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”


let recenica = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";




recenica =  
"Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";

let recenica5 = "";


for (let i = 0; i <= recenica.length - 1; i++) {
    if (recenica[i] === "a") {
        recenica5 += "A";
    }
    //  else if (recenica[i] === "a") {
    //     recenica5 += ;
    // } else {
    //     recenica5 += recenica[i];
    // }
}

console.log(recenica5);