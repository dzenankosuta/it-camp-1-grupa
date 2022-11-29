
// 1.	(20) Uneti string se šifruje tako što se zamenjuje
// redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta
// itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
// Ako string ima neparan broj znakova, poslednji znak se ne dira.

const myFunction = () => {
    let recenica = "Pera ima deovjku";
    let neka = "";
    for (let i = 0; i < recenica.length; i++) {
        if (recenica.length % 2 === 1 && i === recenica.length - 1) {
            neka += recenica[recenica.length - 1];
        } else if (i % 2 === 0) {
            neka += recenica[i + 1];
        } else if (i % 2 === 1) {
            neka += recenica[i - 1];
        }
    }
    return neka;
};
console.log(myFunction());