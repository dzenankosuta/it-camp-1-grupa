// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd.
//Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
//Ako string ima neparan broj znakova, poslednji znak se ne dira.

const change = () => {
  const word = "Pera ima devojku";
  let newWord = "";
  let length = word.length;
  for (let i = 0; i < length; i++) {
    if (length % 2 === 1 && i === length - 1) {
      newWord += word[i];
    } else if (i % 2 === 0) {
      newWord += word[i + 1];
    } else if (i % 2 === 1) {
      newWord += word[i - 1];
    }
  }
  return newWord;
};

console.log(change());
