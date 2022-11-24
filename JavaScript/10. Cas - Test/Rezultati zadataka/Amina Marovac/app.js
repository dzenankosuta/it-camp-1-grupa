
1.	//(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja 
//(pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

let broj1=Number(prompt("Unesite neki broj:"));
if(isNaN(broj1) || broj1<1){
    console.log("Niste uneli konkretnu vrednost za broj");
}for(let i=1;i<=broj1;i++){
console.log(broj1*broj1);
}


