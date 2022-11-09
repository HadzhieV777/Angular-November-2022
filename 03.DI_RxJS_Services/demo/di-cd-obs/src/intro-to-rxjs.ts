// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is a JavaScript object that links producing code and consuming code

// A JavaScript Promise object can be: Pending, Fulfilled, Rejected

// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.

// Promises are like async arrays
function getValue() {
  return new Promise((res) => {
    setTimeout(() => {
      res('Test');
    }, 2000);
  });
}

function getValue2(cb: (...args: any[]) => void) {
  setTimeout(() => {
    cb('Test');
  }, 2000);
}

// cps
getValue2(function (value) {
  console.log(value);
});

// promise chain
getValue()
  .then(function (value) {
    console.log(value);
  })
  .then()
  .then();

// The difference between array and promise is that in the promise the stored value is uknown when the promise is created
// and the value can be mutated when returned

[1]
  .map(function (x) {return x + 1})
  .map(function (x) {return x * 1})