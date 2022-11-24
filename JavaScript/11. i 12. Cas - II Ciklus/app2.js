//  FUNKCIJE
//  DRY (Don't repeat yourself)

// Funkcije predstavljaju blok koda koji se izvrsava samo prilikom pozivanja.

// Nacini zapisivanja funkcija:
// Koriscenjem keyword (rezervisane reci) function

function nazivFunkcije() {
  return 5;
}

console.log(nazivFunkcije());
//  Drugi primer
function zbirTriIPet() {
  return 3 + 5;
}

console.log(zbirTriIPet());

// Treci primer
// Prilikom definisanja funkcije u zagradu stavljamo (prema potrebi) parametre
// koje fukcija koristi unutar sebe.
function zbirDvaBroja(prviBroj, drugiBroj) {
  return prviBroj + drugiBroj;
}

// Prilikom pozivanja funkcije u zagradi stavljamo argumente na osnovu kojih se funkcija izvrsava.
console.log(zbirDvaBroja(5, 14));

// Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.

function povrsina(prviBroj, drugiBroj) {
  if (prviBroj === drugiBroj) {
    return "Povrsina kvadrata iznosi " + prviBroj * drugiBroj;
  } else {
    return "Povrsina pravougaonika iznosi " + prviBroj * drugiBroj;
  }
}

console.log(povrsina(15, 2));
console.log(povrsina(4, 4));

// 2. nacin:

const myfunction = function () {
  // radnja koja se obavlja
};

// Napraviti funkciju koja vraca zbir kvadrata dva broja.
// Druga vrednost je po defaultu 1.
// I nacin
const mySecondFunction = function (prva, druga) {
  if (druga === undefined) {
    return prva ** 2 + 1;
  } else {
    return prva ** 2 + druga ** 2;
  }
};

console.log(mySecondFunction(5));
console.log(mySecondFunction(5, 4));

// II nacin
const mySecondFunction2 = function (prva, druga = 1) {
  return prva ** 2 + druga ** 2;
};

console.log(mySecondFunction2(3));
console.log(mySecondFunction2(3, 3));

// Ako neka funkcija ima defaultnu vrednost, ta vrednost se stavlja na poslednjem mestu,
// ako ih je vise, na poslednjim pozicijama.
// Ne sme se desiti slucaj da prva vrenost bude defaultna a nakon nje ona koja nema
// defaultnu vrednost.

// arrow function:

const arrowFunc = () => {
  // kod za izvrsavanje
};

// Napraviti arrow funkciju koja na ovnovu unetog argumenta vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "ARGUMENT JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "ARGUMENT JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "ARGUMENT JE NULA"
// Ako nije unet broj, ispisuje poruku "ARGUMENT NIJE BROJ"

const myArrowFunc = (broj) => {
  if (typeof broj !== "number") {
    return "ARGUMENT NIJE BROJ";
  } else if (broj > 0) {
    return "ARGUMENT JE POZITIVAN BROJ";
  } else if (broj < 0) {
    return "ARGUMENT JE NEGATIVAN BROJ";
  } else if (broj === 0) {
    return "ARGUMENT JE NULA";
  }
};

console.log(myArrowFunc(9));
console.log(myArrowFunc(-9));
console.log(myArrowFunc(0));
console.log(myArrowFunc("2"));

// Treci zadatak sa testa preko funkcije:

const treciZadatak = function (recenica) {
  let recenica2 = "";
  for (i = 0; i <= recenica.length; i++) {
    if (
      recenica[i] === "a" ||
      recenica[i] === "e" ||
      recenica[i] === "i" ||
      recenica[i] === "o" ||
      recenica[i] === "u"
    ) {
      recenica2 += recenica[i].toUpperCase();
    } else if (i === recenica.length) {
      recenica2 += ".";
    } else {
      recenica2 += recenica[i];
    }
  }
  return recenica2;
};

console.log(treciZadatak("Pocela je nova skolska godina"));

console.log(recenica2); // promenljive koje su definisane unutar function scope nisu
// dostupne u global scope.
