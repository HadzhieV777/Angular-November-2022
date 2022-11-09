// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is a JavaScript object that links producing code and consuming code

// A JavaScript Promise object can be: Pending, Fulfilled, Rejected

// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.

function getValue() {
  return new Promise((res) => {
    setTimeout(() => {
      res('Test');
    }, 2000);
  });
}
