// Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva
//  dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.

const isPalindrom = (broj) => {
  const strBroja = broj.toString();
  let obrnutiStrBroja = "";
  for (let i = strBroja.length - 1; i >= 0; i--) {
    obrnutiStrBroja += strBroja[i];
  }
  const obrnutiBroj = +obrnutiStrBroja;
  if (obrnutiBroj === broj) {
    return true;
  } else {
    return false;
  }
};

const highestPalindrom3 = () => {
  let palindroms = [];
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      if (isPalindrom(i * j) && !palindroms.includes(i * j)) {
        palindroms.push(i * j);
      }
    }
  }
  palindroms.sort((a, b) => b - a);
  return palindroms[0];
};

console.log(highestPalindrom3());
