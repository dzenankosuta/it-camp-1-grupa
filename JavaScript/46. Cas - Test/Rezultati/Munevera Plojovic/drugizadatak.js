// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza. 
// Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve. 
// U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.



DATA1 = [2, 26, 38, 75, 11, 29];
 DATA2 = ["a", "b", "c", "d", "e"];

 function prviZadatak(){
    const newDATA=DATA1.concat(DATA2)
    const newDATA2=newDATA.filter((el)=>el%2==0)
    newDATA2.unshift(10,20)
    console.log(newDATA); 
    console.log(newDATA2); 
   // return `Prvi pomocni: ${[newDATA]}\nDrugi pomocni: ${[newDATA2]}`
}
//console.log(prviZadatak());
 prviZadatak()

