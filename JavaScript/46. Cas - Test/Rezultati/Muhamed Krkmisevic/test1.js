//Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr.
//za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

const prviZadatak = () => {
  const recenica = "Pera ima devojku";
  let duzina = recenica.length;
  let recenica1 = "";
  for (let i = 0; i < duzina; i++) {
    if (duzina % 2 === 1 && i === duzina - 1) {
      recenica1 += recenica[i];
    } else if (i % 2 === 1) {
      recenica1 += recenica[i - 1];
    } else if (i % 2 === 0) {
      recenica1 += recenica[i + 1];
    }
  }
  return recenica1;
};
console.log(prviZadatak());
