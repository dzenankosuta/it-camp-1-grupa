// Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd.
// Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
// Ako string ima neparan broj znakova, poslednji znak se ne dira.

// let recenica = "Zameniti karaktere!";
// let novaRecenica = "";
// for (let i = 0; i < recenica.length; i++) {
//   if (recenica.length % 2 === 1 && i === recenica.length - 1) {
//     novaRecenica += recenica[recenica.length - 1];
//   } else if (i % 2 === 0) {
//     novaRecenica += recenica[i + 1];
//   } else if (i % 2 === 1) {
//     novaRecenica += recenica[i - 1];
//   }
// }

// console.log(novaRecenica);

// Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B,
// tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd.
// Ako je jedan string duži od drugog, na kraju samo dodati znakove viška.
// Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

let rec1 = "PRVA";
let rec2 = "druga rec";
let rec3 = "";
let duzina = rec1.length > rec2.length ? rec1.length : rec2.length;
for (let i = 0; i < duzina; i++) {
  if (rec1[i] === undefined) {
    rec3 += rec2[i];
  } else if (rec2[i] === undefined) {
    rec3 += rec1[i];
  } else {
    rec3 += rec1[i] + rec2[i];
  }
}
console.log(rec3);
