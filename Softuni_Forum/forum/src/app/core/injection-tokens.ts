import { InjectionToken } from "@angular/core";

export const LocalStorage = new InjectionToken('LocalStorage');


// Creates a token that can be used in a DI Provider.
// Use an InjectionToken whenever the type you are 
// injecting is not reified (does not have a runtime representation) such as when injecting an interface, 
// callable type, array or parameterized type.
// InjectionToken is parameterized on T which is the type of object which will be returned by the Injector. 
// This provides an additional level of type safety.