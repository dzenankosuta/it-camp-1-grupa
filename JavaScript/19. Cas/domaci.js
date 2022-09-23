// 6.	Sva velika slova u stringu treba svesti na mala slova.
// Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'.
//  Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// function toLower() {
//   let recenica = prompt("Unesite recenicu: ");
//   return recenica.toLowerCase();
// }

// console.log(toLower());

// 5.	Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi).
//  Npr. 'anavolimilovana' je palindrom.

const isPalindrom = function () {
  let recenica = prompt("Unesite recenicu: ");
  let duzina = recenica.length;
  let obrnutaRecenica = "";
  for (let i = duzina - 1; i >= 0; i--) {
    obrnutaRecenica += recenica[i];
  }
  if (obrnutaRecenica === recenica) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrom());
