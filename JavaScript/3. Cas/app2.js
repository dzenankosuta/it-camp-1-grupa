//                  Operatori u JavaScript_u
// Operatori u javaScript_u se dele na sledece:
//  1. Aritmeticki operatori;
//  2. Operatori dodele vrednosti;
//  3. JavaScript string operatori;
//  4. Operatori poredjenja;
//  5. Logicki operatori;
//  6. Tipovni operatori.

//  1. Aritmeticki operatori;
//  + Sabiranje:
console.log(5 + 2);
//  - Oduzimanje:
console.log(5 - 2);
//  * Mnozenje:
console.log(5 * 2);
//  ** Stepenovanje
console.log(5 ** 2);
console.log(2 ** 3);
//  / Deljenje:
console.log(10 / 2);
// % Moduo:
console.log(5 % 2);
console.log(12 % 2);
console.log(13 % 5);
// ++ Povecanje za 1:
let x = 5;
x++;
console.log(x);
// -- Smanjenje za 1:
let y = 5;
y--;
console.log(y);

//  2. Operatori dodele vrednosti;
// = Jednakost
let a, b;
a = 10;
b = a;
console.log(a);
console.log(b);
// +=
let c = 15;
c += 5; // c = c + 5
console.log(c);
// -=
var d = 15;
d -= 5;
console.log(d);
// *=
var d = 15;
d *= 5;
console.log(d);
// /=
var d = 15;
d /= 5;
console.log(d);
// %=
var d = 15;
d %= 5;
console.log(d);
// **=
var d = 15;
d **= 5; // d = 15 ** 5
console.log(d);

//  3. JavaScript string operatori;
// Za spajanje stringova mozemo iskoristiti + operator.
// Ako izvrsimo dodavanje stringa nekom broju (broja nekom stringu) preko + operatora dobicemo string.
let m, n;
m = "Danas je bilo";
n = "lepo vreme.";
console.log(m + " " + n);
console.log(55 + m);

// Neke karakteristike vezane za +,-,*,/:
console.log(5 + "5");
console.log(5 - "4");
console.log(5 - "4asd4"); // uvek u slucaju nemogucnosti kovertovanja nekog stringa u broj, JavaScript nam vraca NaN.
console.log(5 * "4");
console.log(5 / "4");
console.log(5 / "danas");

// 4. Operatori poredjenja;

//  ==   - Proverava jednakost vrednosti
let r, t;
r = 56;
t = -56;
console.log(r == t);

//  ===  - Proverava jednakost vrednosti i tipa
let prom1, prom2;
prom1 = 14;
prom2 = "14";
// console.log(prom1 == prom2); bolje je koristiti operator ===
console.log(prom1 === prom2);

//  !=  - Proverava nejednakost vrednosti
let prom3, prom4;
prom3 = 25;
prom4 = "25";
console.log(prom3 != prom4);

//  !==  - Proverava nejednakost vrednosti ili nejednakost tipa
let prom5, prom6;
prom5 = 25;
prom6 = 25;
console.log(prom5 !== prom6);

let prom7, prom8;
prom7 = 26;
prom8 = "25";
console.log(prom7 !== prom8);

//  > - Proverava da li je prva vrednost veca od druge

let prom9, prom10;
prom9 = 52;
prom10 = 25;
console.log(prom9 > prom10);

//  < - Proverava da li je prva vrednost manje od druge

prom9 = 52;
prom10 = 25;
console.log(prom9 < prom10);

//  >= - Proverava da li je prva vrednost veca ili jednaka drugoj vrednosti

prom9 = 50;
prom10 = 50;
console.log(prom9 >= prom10);

//  <= - Proverava da li je prva vrednost manja ili jednaka drugoj vrednosti

prom9 = 46;
prom10 = -46;
console.log(prom9 <= prom10);

//  ?  - ternarni operator
// sintaksa za njega je:
// condition ? exprIfTrue : exprIfFalse

//  5. Logicki operatori;

// &&  - Logicko i
let var1, var2;
var1 = 40;
var2 = 17;
console.log(var1 > 20 && var2 < 20);
console.log(var1 > 20 && var2 > 20);

//  || - Logicko ili
var1 = 40;
var2 = 17;
console.log(var1 > 80 || var2 > 20);
console.log(var1 > 80 || var2 > 15);

//  !  - Logicko ne (not)
let isSunny = false;
console.log(!isSunny);

//  6. Tipovni operatori.
// typeof - Vraca tip promenljive
let var4 = 16.9;
let var5 = "Trenutno je 26stepeni";
var isSunnyy = false;
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof isSunnyy);

// instanceof - Ispituje da li je tip odredjene promenljive instanca od objekta npr.
let obj = {
  ime: "Moje ime",
  prezime: "Moje prezime",
};

console.log(obj instanceof Object);
