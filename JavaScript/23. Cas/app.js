// NUMBER PROPERTIES //

// Number properties ne mogu biti primenjene na promenljive.
// Vec samo pristupanjem preko Number.(PROPERTY)

// 1. MAX_VALUE  - vraca najveci moguci broj u JavaScriptu.

console.log(Number.MAX_VALUE);

// 2. MIN_VALUE - vraca najmanji moguci broj u JavaScriptu.

console.log(Number.MIN_VALUE);

// 3. POSITIVE_INFINITY - vraca Infinity (beskonacnost)

console.log(Number.POSITIVE_INFINITY);

// 4. NEGATIVE_INFINITY - vraca -Infinity (beskonacnost)

console.log(Number.NEGATIVE_INFINITY);

// 5. NaN - vraca Not a Number vrednost

console.log(Number.NaN);

// Zadatak:
// Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je
// dati argument palindrom.
const isPalindrom = (broj) => {
  let stringBroj = broj.toString();
  let duzina = stringBroj.length;
  let obrnutiBroj = "";
  for (let i = duzina - 1; i >= 0; i--) {
    obrnutiBroj += stringBroj[i];
  }
  if (stringBroj === obrnutiBroj) {
    return `Dati broj je palindrom.`;
  } else {
    return `Dati broj nije palindrom.`;
  }
};

console.log(isPalindrom(456));
console.log(isPalindrom(45654));
