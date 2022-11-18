// Differences between interface and type

export interface IUser {
  id: number;
  username: string;
}

export type User = {
  username: string;
};

// Interface can be implemented
// We can assign type[] but we can't assign interface[]
// type UserArray = User[]

// we can't apply |, or other operators to interfaces
// type UserOrSomethingElse = IUser | UserArray;

// Interfaces are used if we need to extend them,
// good for DTO, for objects from the DB

// Types are used for complex operations and types
