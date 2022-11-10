import { Observable, map, subscribeOn } from 'rxjs';

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
  .map(function (x) {
    return x + 1;
  })
  .map(function (x) {
    return x * 1;
  });

Promise.resolve(1)
  .then(function (value) {
    console.log(value);
  })
  .then()
  .then();

[1, 2, 3]
  .map(function (x) {
    return x + 1;
  })
  .map(function (x) {
    return x * 1;
  });

// Observer is an object with callback functions, that will get called when there is
// interaction to the Observable, i.e., the source has interacted for an example button click, Http request, etc.

function interval(intervalValue: number = 0) {
  // Observables are like promise but can store multiple values
  // An observable is a function that creates an observer and attaches it to the source
  // where values are expected from, for example, clicks, mouse events from a dom element or an Http request, etc.
  return new Observable<number>((observer) => {
    let counter = 0;
    const timerId = setInterval(() => {
      observer.error(new Error('This is observer error.'));
      observer.next(counter++);
      observer.complete();
    }, intervalValue);

    return () => {
      clearInterval(timerId);
    };
  });
}

// Pipe Returns an Observable
// o.pipe(map(x=> x + 1).subscribe(console.log))

// The pipe method will sit in-between the Observable and the Observer
// allowing us to operate on what happens between the beginning and the end:

// To create a pipe method, we need to pass the Observable itself 
// (AKA this in JavaScript) down through the pipe so it has access to the internals

// An operator is a function you pass into a pipe. And pipe returns its own observable. That means:
// An operator has the original observable as the first argument
// An operator returns an observable

const stream$ = interval(5000).pipe(
  map((x) => x + 1),
  map((x) => x + 1),
  map((x) => x + 1)
);

// Observables has lazy evaluation

setTimeout(() => {
  const sub = stream$.subscribe({
    next: (x) => console.log(x),
    error: (err) => console.log(err),
    complete: () => console.log('Observable completed!'),
  });

  setTimeout(() => {
    sub.unsubscribe(); // clear
  }, 1000);
}, 3000);
// o.subscribe(console.log); // subscribe is like the last then in promise

// An observable gets executed when it is subscribed. 
// An observer is an object with three methods that are notified,
//  - next() − This method will send values like a number, string, object etc.
//  - complete() − This method will not send any value and indicates the observable as completed.
//  - error() − This method will send the error if any.


