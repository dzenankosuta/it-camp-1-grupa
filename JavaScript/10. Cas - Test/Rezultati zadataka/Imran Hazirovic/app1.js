//                      1.zadatak

const broj = Number(prompt( "Unesite neki broj:"));

if (isNaN(broj) ){
    console.log(" Niste uneli korektnu vrednosti za broj.");
} else {
    console.log(broj ** 2);
}
