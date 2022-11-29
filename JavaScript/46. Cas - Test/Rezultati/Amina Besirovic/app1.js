// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
//  Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku',
//  treba dobiti 'ePari amd vejouk'.
//  Ako string ima neparan broj znakova, poslednji znak se ne dira.

function zamenitiRedosled() {
let recenica = "Pera ima devojku"
let recenicaDva = "";
let duzina = recenica.length;

for (let i = 0; i < duzina; i++) {
    if (duzina % 2 === 1 && i === duzina -1) {
        recenicaDva += recenica[duzina -1];
    } else if (i % 2 === 0) {
        recenicaDva += recenica[i + 1];
    } else if (i % 2 === 1) {
        recenicaDva += recenica[i - 1];
    }
        }
        return recenicaDva;
    }


console.log(zamenitiRedosled());
