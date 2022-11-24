// for (let a=1; a<=100; a++){
//     if (a % 3 === 0){
//         console.log("FIZZ")
//     } else if (a % 5 === 0){
//         console.log ("BUZZ")
//     } else if (a % 3 === 0 && a % 5 === 0){
//         console.log("FIZZ BUZZ")
//     } else {
//         console.log(a)
//     }
// } 


for (let a=1; a<=100; a++) {
    if  (a % 3 === 0 && a % 5 === 0){
        console.log("FIZZ BUZZ")
    }else if (a % 5 === 0){
        console.log("BUZZ")
    } else if (a % 3 === 0 ) {
        console.log("FIZZ")
    } else {
        console.log(a)
    }
}