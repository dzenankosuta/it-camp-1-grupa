// Javascript number metode:

// toString() - metoda vraca broj kao string.
let x = 55;
console.log(x);
console.log(typeof x);

let y = x.toString();
console.log(y);
console.log(typeof y);

// toString() metoda se moze primeniti na svaki tip podatka.
// Ne samo na number tip podatka.

// toExponential() - metoda nam vraca broj zapisan u obliku
// (123e+5), ciji tip je zapravo string
let z = 1.4;
let w = z.toExponential();
console.log(w);
console.log(typeof w);

// toFixed() metoda ce zaokruziti neki broj na onoliko
// decimala u zavisnosti od toga koji broj se nadje
// kao argument date metode.

let prom = 22.4569;
let prom2 = +prom.toFixed(2);
console.log(prom2);
console.log(typeof prom2);

// toPrecision() metoda ce zapravo pretvoriti nas broj
// u broj koji ukupno ima onoliko cifara u zavisnosti
//  od toga koji broj se nadje kao argument date metode.

prom = 22.4569;
let prom3 = prom.toPrecision(5);
console.log(prom3);
console.log(typeof prom3);

// valueOf() metoda nam vraca vrednost datog argumenta.

let prom4 = 25;
let prom5 = "Sta ako je string.";
let prom6 = true;
console.log(prom4.valueOf());
console.log(prom5.valueOf());
console.log(!prom6.valueOf());

// valueOf() metoda se moze primeniti na svaki tip podatka.
// Ne samo na number tip podatka.

// Globalne JavaScript metode

// Globalne JavaScript metode mogu biti koriscene na sve
// tipove podataka.

// Najpoznatije globalne metode su:

// 1. Number() vraca nam broj, konvertovan iz argumenta.

console.log(Number("55465"));
console.log(Number(false));
console.log(Number(false + true + true));
console.log(Number(" 41    "));
console.log(Number("41 56")); // razmaci nisu dozvoljeni
console.log(Number("41s"));

// 2. parseFloat() metoda analizira argument i vraca broj
// u decimalnom zapisu.

console.log(parseFloat(55465));
console.log(parseFloat(true));
console.log(parseFloat(false));
console.log(parseFloat(false + true + true));
console.log(parseFloat(" 41    "));
console.log(parseFloat("41 56")); // razmaci nisu dozvoljeni
console.log(parseFloat("s41s"));
console.log(parseFloat("55s"));
console.log(parseFloat("14.3"));

// parseFloat() zapravo analizira prve karaktere, sve dok
// ne dodje do razmaka ili nekog znaka koji nije broj.
// I onda pretvori te pocetne brojeve u jedan number.

// Dok u slucaju da je prvi krakter neki znak ili slovo,
// rezultat ce biti NaN.

// 2. parseInt() metoda analizira argument i vraca ceo broj
// u decimalnom zapisu.

console.log(parseInt(55465));
console.log(parseInt(true));
console.log(parseInt(false));
console.log(parseInt(false + true + true));
console.log(parseInt(" 41    "));
console.log(parseInt("41 56")); // razmaci nisu dozvoljeni
console.log(parseInt("s41s"));
console.log(parseInt("55s"));
console.log(parseInt("14.3"));

// Kod metoda parseInt() i parseFloat() su dozvoljeni razmaci,
// i analizira se samo prva "rec".

// Kod Number() metode razmaci nisu dozvoljeni.
