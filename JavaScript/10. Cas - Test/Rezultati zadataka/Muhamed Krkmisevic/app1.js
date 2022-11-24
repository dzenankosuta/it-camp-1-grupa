let prom = Number(prompt("Unesite neki realan broj. "));
if (isNaN(prom)) {
  console.log("Niste uneli realan broj.");
} else {
  console.log(prom * prom);
}
