// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku',
// treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

const UbutajRedom = () => {
  const recenica = "Pera ima devojku";
  let duzina = recenica.length;
  let novaRecenica = "";
  for (let i = 0; i < duzina; i++) {
    if (duzina % 2 === 1 && i === duzina - 1) {
      novaRecenica += recenica[i];
    } else if (i % 2 === 0) {
      novaRecenica += recenica[i + 1];
    } else if (i % 2 === 1) {
      novaRecenica += recenica[i - 1];
    }
  }
  return novaRecenica;
};

console.log(UbutajRedom());
