// ARRAY METODE //

// push() metoda na najlaski nacin dodaje elemenrt nizu na poslednjem mestu.

const voce = ["jagoda", "banana", "mandarina", "ananas"]

voce.push("mango")  // vraca duzinu niza nakon sto se doda odredjeni element.

console.log(voce)

// push() metoda moze dodati vise elemenata u nizu.
voce.push("kivi", "pomorandza", "jabuka")
console.log(voce)

// Novi nacin dodavanja elementa na poslednjem mestu.

voce[voce.length] = "kupina"
console.log(voce)

// Jos jedan razlog zasto treba izbegavati new Array() prilikom definisanja niza.
let brNiz = [55]
console.log(brNiz)

let brNiz2 = new Array(44)
console.log(brNiz2)
console.log(brNiz2[23])
console.log(brNiz2.length)

// Za prevodjenje niza unutar stringa se koristi metoda toString()

let voceString = voce.toString()
console.log(voceString)
console.log(typeof voceString)

// Jos jedan nacin prevodjenja niza u string. Sa dodatnim mogucnostima.
// let voceString2 = voce.join()    vraca string prevedn kao kod tostring()
// let voceString2 = voce.join("")  vraca string gde izmedju elemenata niza nema zareza
let voceString2 = voce.join("*")

console.log(voceString2)

// rucno pravljenje join("_") metode

const joinManual = (arr) => {
    let arrString = ""
    for (let element of arr) {
        arrString += element + "_"
    }
    let duzina = arrString.length
    // return arrString.substr(0,duzina-1) jedan nacin
    return arrString.slice(0,duzina-1) // drugi nacin
}

console.log(joinManual(voce))

// pop() metoda se koristi za brisanje poslednjeg elementa niza.

let kupina = voce.pop() // vraca izbrisani element

console.log(voce)
console.log(kupina)

// unshift() metoda dodaje element na prvom mestu u nizu.

let duzina =  voce.unshift("tresnja") // vraca duzinu niza sa unetom tresnjom na pocetku.
console.log(voce)
console.log(duzina)

voce.unshift("tresnja", "bostan", "sljiva") // moze dodati vise elemenata na pocetku niza.
console.log(voce)

// shift() metoda se koristi za brisanje prvog elementa niza.
let izbrisaniElement = voce.shift()
console.log(voce)
console.log(izbrisaniElement)

// Domaci:
// 1. Napraviti funkciju koja iz nekog niza brise sve elemente na parnim pozicijama.
// 2. Napraviti funkciju koja iz nekog niza menja sve elemente na parnim pozicijama,
// recju "paran broj".
