// Ts will infer the variable type
// let username = "Pesho";

// console.log(username);

// the ? will make age optional
// function createUser(username: string, age?: number)
function createUser(username: string, age: number = 0) {
  return {
    username,
  };
}

const pesho = createUser("Pesho", 26);
// const gosho = createUser(123); // no specified type, this will work

function id<T>(item: T): T {
  return item;
}

// num will automaticaly become 1 not type number
// if we declare let instead of const num will automaticaly become of type number
// const num = id(1);

// let num = id<{ prop: string; prop1: number}>({ prop: '1', prop1: 1})

// An interface declaration is another way to name an object type:
interface IMyDto {
  prop: string;
  prop1: number;
}

type MyDtoOrNumber = IMyDto | number;
type BooleanArray = boolean[];

let num = id<MyDtoOrNumber>({ prop: "1", prop1: 1 });

// We’ve been using object types and union types by
// writing them directly in type annotations.
// This is convenient, but it’s common to want to use
// the same type more than once and refer to it by a single name.

// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in
// many cases you can choose between them freely.
// Almost all features of an interface are available
// in type, the key distinction is that a type
// cannot be re-opened to add new properties vs an
// interface which is always extendable.

// A type cannot be changed after being created

class MyClass {
  constructor(public name: string, private age: number) {}
}

// we can change property privacy with public or private annotations
const gosho = new MyClass('Gosho', 15);

(gosho as any).age = 1000; 


// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. 
// Using enums can make it easier to document intent, or create a set of distinct cases. 
// TypeScript provides both numeric and string-based enums.

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}