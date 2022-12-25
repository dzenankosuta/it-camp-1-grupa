// let i const promenljive obezbedjuju block scope.
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

// promenljive definisane preko var keyword su global scope promenljive.
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}
