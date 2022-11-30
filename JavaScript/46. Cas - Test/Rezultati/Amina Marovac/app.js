//1.zadatak
// Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string
//'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
// Ako string ima neparan broj znakova, poslednji znak se ne dira.

function myFunction(recenica) {
  let duzinaRecenice = recenica.length;
  let recenica2 = "";
  for (let i = 0; i < duzinaRecenice; i++) {
    if (duzinaRecenice % 2 === 1 && i === duzinaRecenice - 1) {
      recenica2 += recenica[duzinaRecenice - 1];
    } else if (i % 2 === 0) {
      recenica2 += recenica[i + 1];
    } else if (i % 2 === 1) {
      recenica2 += recenica[i - 1];
    }
  }
  return recenica2;
}
console.log(myFunction("Pera ima devojku."));
