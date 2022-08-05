//                              JavaScript Output
//  Postoji nekoliko nacina da prikazemo podatke u JavaScriptu:
// 1. innerHTML
// Primer:
document.getElementById("paragraf").innerHTML =
  "Paragraf dodat preko JavaScript_a.";
// 2. document.write() - Koristi se za testiranje koda.
// 3. alert() - Ova metoda nam salje upozorenje
// Primer:
// alert("Pozdrav");
// 4. console.log() - Najcesce koriscena funkcija za prikazivanje stvari u konzoli.
// Primer:
console.log("Pozdrav iz konzole");

//                             JavaScript Identifiers/Names
//  javaScript names(imena varijabli) moraju pocinjati sa:
// 1. slovom(velikim ili malim),
// 2. dollar sign ($)
// 3. underscore (donja crta) _
// Napomena.
//  Promenjiva ne moze pocinjati brojem.
//  Brojevi se mogu naci kao drugi, treci,... karakter u nazivu promenljive.

//            JavaScript is Case Sensitive!!! (Razlikuje velika i mala slova)
// "a" je razlicito od "A"

//                 JavaScript varijable

//  Postoji nekoliko nacina da deklarisemo varijablu:
// 1. Koriscenjem var kljucne reci (keyword)
var x; // deklaracija
x = 10; // dodela vrednosti promenljivoj x (inicijalizacija)
var x = 10; // odjednom izvrsena deklaracija i inicijalizacija

// 2. Koriscenjem let kljucne reci (keyword)
let x; // deklaracija
x = 10; // dodela vrednosti promenljivoj x (inicijalizacija)
let x = 10; // odjednom izvrsena deklaracija i inicijalizacija

// 3. Koriscenjem const kljucne reci (keyword)
const x = 10; // Kod const kljucne reci odjednom se mora izvrsiti deklaracija i inicijalizacija.

// Varijable (promenljive) su kontejneri za skladistenje vrednosti.
