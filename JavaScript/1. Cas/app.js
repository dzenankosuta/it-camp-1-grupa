document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf dodat od strane JavaScript_a.";

// Ispisati u konzoli recenicu:
console.log("Danas je bilo pretoplo. Cekamo septembar za nesto svezije vreme.");

// Tipovi podataka u JavaScript_u:

// Za proveru tipa varijable (promenljive) u JavaScript_u se koristi
// typeof operator.

// Postoje:
//    1. Primitivni (Primitive) tipovi podataka;
//    2. Neprimitivni (Non-Primitive) tipovi podataka;

// 1.1 String - Niz karaktera koji se upisuje unutar navodnika.
//              On moze biti zapisan unutar obicnih ili duplih navodnika (nije bitno)
//              Stringovi mogu biti bilo koji karakteri A-Z, 0-9
//     Zapisivanje stringa:
("Danas je toplo.");
"Danas je padala kisa."`Danas je padao sneg.`; // Template literals
String("Danas je duvao jak vetar.");

// 1.2 Number - Predstavlja broj u JavaScript_u.
//              On moze biti zapisan sa decimalom ili bez nje.
//              JavaScript ne razlikuje tipove kod brojeva, vec su svi brojevi Number tipa.
//     Zapisivanje brojeva:
10;
0 - 78;
1.14;
0.9999974563245;
Number(45);

// 1.3 BigInt - Ovaj tip podatka nam sluzi za skladistenje brojeva cija vrednost
//              prelazi granicu Number tipa podatka.
//     Zapisivanje velikih brojeva:
BigInt(945646161616161616185);

// 1.4 Boolean - Predstavlja logicki entitet i on moze imati dve vrednosti:
//               1. true;
//               2. false.
//               Najveca primena ovog tipa podatka se nalazi u kondicionalima,
//               tj. u slucajevima ispitivanja da li je odredjeni uslov zadovoljen ili ne.
//     Zapisivanje Boolean_a:
// Boolean("odredjeni uslov") => kao izlaz dobijamo true ili false

// 1.5 undefined - Kada odredjenu promenljivu deklarisemo ali joj ne dodelimo vrednost,
//                 tada undefined predstavlja i vrednost i tip za tu promenljivu.

// 1.6 null - Tip podatka null se javlja za nepostojecu ili promenljivu koja
//            nije validna.

// 1.7 Symbol - To je novi tip podatka u JavaScript_u.
//              Koristi se za anonimne i jedinstvene vrednosti.

Symbol("Kako je bilo vreme?");

// 2. Neprimitivni tipovi podataka (Non-Primitive data types).
//    Primitivni tipovi podataka se koriste da skladistenje promenljivih (varijabli)
//    koje imaju jednu vrednost.
//    Dok za promenljive koje sadrze vise vrednosti (ili kompleksne vrednosti)
//    koristimo neprimitivne tipove podataka (Non-Primitive data types.)

//    Primeri neprimitivnih tipova podataka:

// 2.1  Array (Nizovi) - Nizovi se koriste za skladistenje vise podataka
//                       unutar jedne promenljive.
//                       Nizovu u JavaScript_u imaju mogucnost skladistenja
//                       elemenata razlicitih tipova podaataka.

// Zapisivanje nizova:
// Niz stringova
["Talib", "Muhamed", "Amina", "Ahmed", "Mervan"][
  // Niz brojeva
  (15, 17, 18, 19, 18)
][
  // Niz koji u sebi sadrzi razlicite tipove podataka
  ("Talib", 15, false, "Ahmed", 19, true)
];
// 2.Nacin zapisivanje nizova (nacin koji nije preporucljiv za koriscenje)
new Array([false, "Ahmed", 19]);

// 2.2 Objects (Objekti) - Objekti su GLAVNA STVAR U PROGRAMSKOM JEZIKU JAVASCRIPT.
//                         Objekti sluze za skladistenje nekih podataka, i oni se zapisuju
//                         po principu ime,vrednost (name,value) par.
//                         Objekti takodje mogu sadrzati razlicite tipove podataka.
//   Zapisivanje objekata:
// {
//   marka: "BMW",
//   godinaProizvodnje: 2006,
//   boja: "crna",
//   kubikaza: "2000ks"
// }
// 2.Nacin zapisivanje objekata (nacin koji nije preporucljiv za koriscenje)
new Object({ punletnost: false, ime: "Ahmed", starost: 19 });

//  2.3 Set (Setovi) - Setovi su slicni nizovima, sa razlikom kod zapisivanja
//                     i izmedju ostalih, najbitnija karakteristika kod setova je
//                     da oni ne mogu imati duplikate.
//     Zapisivanje setova:
new Set(["jabuka", "sljiva", "kruska", "jagoda"]);

//  2.4 Maps (Mape) - Predstavljaju ne primitivni tip podatka, koji je vrlo slican objektu.
//                    Ali zapisivanje se izvrsava na nesto drugaciji nacin.
//     Zapisivanje mape:
new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// Treba imati na umu da svi tipovi podataka koji nisu primitivni tipovi podataka
// imaju Object tip kada ispitujemo preko funkcije typeof.
