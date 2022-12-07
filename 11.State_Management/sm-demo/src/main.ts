import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { distinctUntilChanged, filter } from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Sync State Managment
// const initialState = {
//   arr: null,
//   obj: undefined,
//   count: 0,
// };

// function reducer(state: any, action: any) {
//   if (action.type === 'EVENT_1') {
//     return {
//       ...state,
//       arr: action.value
//     }
//   }

//   if (action.type === 'EVENT_2') {
//     return {
//       ...state,
//       obj: action.value
//     }
//   }

//   if (action.type === 'EVENT_3') {
//     return {
//       ...state,
//       count: action.value
//     }
//   }
// }

// // Current state
// const result = [
//   { type: 'EVENT_1', value: [1, 2, 3] },
//   { type: 'EVENT_2', value: { a: 1 } },
//   { type: 'EVENT_3', value: 22 },
// ].reduce(reducer, initialState);

// Async State Managment with BS$$
// import { BehaviorSubject, scan } from 'rxjs';

// interface IState {
//   arr: number[] | null;
//   obj: { test: number } | null;
//   count: number;
//   users: null | any[]
// }

// const initialState = {
//   arr: null,
//   obj: undefined,
//   count: 0,
//   users: null
// };

// function getState(initialState: IState, reducer: any) {
//  const state$$ = new BehaviorSubject<IState | null>(null);
//  const actions$$ = new Subject<any>();
// return {
      //  actions$: actions$$.asObservable(),
//     state$: state$$.asObservable().pipe(
// filter(val => !!val),
// scan(reducer, initialState)),
//     dispatch: (action: any) => {
//       actions$$.next(action);
//       state$$.next(action);
//     },
//   };
// }

// function reducer(state: any, action: any) {
// if (!state) {state = initialState}
//   if (action.type === 'EVENT_1') {
//     return {
//       ...state,
//       arr: action.value,
//     };
//   }

//   if (action.type === 'EVENT_2') {
//     return {
//       ...state,
//       obj: action.value,
//     };
//   }

//   if (action.type === 'EVENT_3') {
//     return {
//       ...state,
//       count: action.value,
//     };
//   }
//   if (action.type === 'LOAD_USERS_SUCCESS') {
//     return {
//       ...state,
//       users: action.value,
//     };
//   }
//   return state
// }

// const { state$, dispatch } = getState(initialState as any, reducer);
// state$.subscribe(console.log);

// state$.pipe(map(state => state.count), distinctUntilChanged()).subscribe(console.log)

// function createSelector(state$: Observable<IState>, mapFn: (state: IState) => IState[keyof IState]: Observable<IState[keyof IState]>) {
//   state$.pipe(map(mapFn), distinctUntilChanged())
// }

// function createEffect(actions$: Observable<any>, actionType: string, op1: OperatorFunction<any, any>) {
//   actions$.pipe(filter(a => a.type === actionType), op1).subscribe(action => {
//        dispatchEvent(action);
// });
// }

// const isLoadingUsers$ = merge(
//   actions$.pipe(
//     filter(a => a.type === "LOAD_USERS"),
//     map(() => true)
//   ),
//   actions$.pipe(
//     filter(a => a.type === "LOAD_USERS_SUCCESS"),
//     map(() => false)
//   ),
// )


// const arrSelector$ = createSelector(state$, s => s.arr)

// dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

// setTimeout(() => {
//   dispatch({ type: 'EVENT_1', value: [1, 2, 3]});
//   setTimeout(() => {
//   dispatch({ type: 'EVENT_3', value: 1000});
//   dispatch({ type: 'LOAD_USERS'});
// }, 5000)
// })

// createEffect(actions$, 'LOAD_USERS',  switchMap(() => [
//    fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => ({ type: 'LOAD_USERS_SUCCESS', value: users }))
// ]))

// createSelector(state$, s => s.users).subscribe(console.log);

// isLoadingUsers$.subscribe(console.log)