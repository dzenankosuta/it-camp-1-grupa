// Number tip podatka

// JavaScript poznaje samo number tip podatka.
// I brojevi mogu biti zapisani sa ili bez decimalnog zapisa.

// U JavaScriptu aritmeticke operaciju nisu uvek 100% tacne. IMATI NA UMU!!!
let a = 0.2;
let b = 0.1;
let c = a + b;
console.log(c);

// Sto se tice extra velikih ili malih slova, oni biti zapisani koriscenjem (exponent) oznake:

let x = 123000000;
console.log(x);
let x2 = 123e6; // 123 * 1 000 000
console.log(x2);

let y = 123e-6; // 123 / 1 000 000
console.log(y);

// Dodavanje brojeva stringovima i obratno:
console.log(18 + "45"); // "1845"
console.log("63" + 44); // "6344"
console.log("sd" + 32); // "sd32"
console.log("401s" - 46); // NaN
console.log(85 / "78a"); // NaN
console.log(47 - "27"); // 20
console.log("lk " * 45); // NaN
console.log(22 - "33"); // -11
console.log(typeof (22 - "33"));
console.log(76 - "67"); // 9

// NaN Not a Number

// NaN je JavaScript rezervisana rec koja ukazuje da broj zapravo nije legalni broj.

//  Ako ispitamo tip NaN rezultat dobijamo number

console.log("lk " * 45);
console.log(typeof ("lk " * 45));

// Postoji metoda za proveru da li je neka vrednost NaN (broj koji nije korektan)
//  U pitanju je isNaN()

console.log(isNaN(67 + "88"));

console.log(isNaN(100 / "Apple"));

// Infinity
// Infinity (-Infinity) je vrednost kada za rezultat dobijemo broj koji je van granica
// maksimalnog broja prema racunanju u JavaScriptu.

console.log(20 / 0);

console.log(-1 / 0);

// Heksadecimalni brojevi

// JavaScript interpretira constante kao heksadecimalne ako im je prefiks 0x

let prom = 0xff;
console.log(prom);

// Brojevi kao objekti

let broj = new Number(14);
console.log(broj);

console.log(broj + 7);
console.log(typeof broj);

let broj2 = 10;
