let recenica;
recenica = 'Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa';
for (let i = 0;i <=recenica.length -1; i++){
    if (recenica === 'a ,e , i, o, u ') {
        recenica += recenica[i].toUpperCase()
    }
}
console.log(recenica)