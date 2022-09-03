let broj = Number(prompt("Unesite neki realan broj: "));

if (isNaN(broj)) {
    console.log("Niste uneli broj.");
} else {
    let broj1 = broj * broj;
    console.log(broj1);
}
