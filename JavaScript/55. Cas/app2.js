// Primer sa intervjua.
const promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => {
  promise.then(() => {
    console.log("2");
  });
  console.log("1");
});

promise.then(() => {
  console.log("3");
});

// Prvo se izvrsavaju sve sinhrone radnje unutar svih promisa a onda dolaze na redu asinhrone operacije.
// Redosled:
// 1
// 3
// 2
