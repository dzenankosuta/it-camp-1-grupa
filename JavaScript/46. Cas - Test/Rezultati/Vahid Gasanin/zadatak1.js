/*Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku',
treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.*/

let niz = prompt("Unesite neki string");
let parni = "";
let neparni = "";
let a = niz.split("");
for (let i = 0; i <= a.length - 1; i++) {
  if (i % 2 === 0) {
    parni += a[i];
  } else neparni += a[i];
}
console.log(a);
console.log(parni);
console.log(neparni);
