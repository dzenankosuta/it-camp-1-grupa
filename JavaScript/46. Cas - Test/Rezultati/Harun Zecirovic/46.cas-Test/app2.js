//Napraviti pomocni niz koji ce sadrzati elemente od oba niza. 
//Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza
// uzeti parne brojeve. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.
// DATA1 = [2, 26, 38, 75, 11, 29];
// DATA2 = ["a", "b", "c", "d", "e"];

const DATA1 = [2, 26, 38, 75, 11, 29]
const DATA2 = ['a','b','c','d','e']

const drugi = (arg1,arg2)=> {
    const pomocni = arg1.concat(arg2)
    const pomocnik = pomocni.filter((element) => element%2===0)
    pomocnik.unshift(10,20)
    return `${pomocni}\n ${pomocnik}`
}
console.log(drugi(DATA1,DATA2))
