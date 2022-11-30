import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {
//   BehaviorSubject,
//   Observable,
//   of,
//   ReplaySubject,
//   Subject,
//   subscribeOn,
// } from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// By convencion $ - stream $$ - subject

// Promise.resolve(1000) // promises can hold only 1 value
// of(1000, 200, 300).pipe( // pipes and observables can hold only many value

// )

// new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(1000);
//   });
// });

// const s$ = new Observable((observer) => {
//   observer.next(100);
//   observer.next(200);
//   observer.next(300);

//   observer.error(new Error("Bad error!"))
// })

// s$.pipe(
//   map(a: any => a + 1)
// ).subscribe({
//   next: (value) => console.log(value),
//   error: (error) => console.log(error),
// });

// function interval(delay: number) {
//   let counter = 0;
//   return new Observable(observer => {
//     setInterval(() => {
//       observer.next(counter++)
//     }, delay);

//     return () => {
//       clearInterval(id);
//     }
//   })
// }

// const sub = interval(1000).subscribe(console.log)
// setTimeout(() => {
//   sub.unsubscribe();
// }, 1000)

// const subj$$ = new Subject();

// ReplaySubject
// const rSubject$$ = new ReplaySubject(20); // We can determine the buffer size
// rSubject$$.next(100);

// rSubject$$.subscribe(console.log);
// rSubject$$.next(200);
// rSubject$$.next(300);
// rSubject$$.next(400);

// BehaviorSubject
// const bSubject$$ = new BehaviorSubject(1);
// bSubject$$.subscribe(console.log)

// setTimeout(() => {
//   bSubject$$.subscribe(console.log) // 1
//   bSubject$$.next(100)
//   setTimeout(() => {
//     bSubject$$.subscribe(console.log) // 100
//   }, 1000)
// }, 1000)

// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);

// subj$$.next(100);

// setTimeout(() => {
//   subj$$.subscribe(console.log);

//   setTimeout(() => {
//     subj$$.next(200);
//   }, 1000);
// }, 1000);
