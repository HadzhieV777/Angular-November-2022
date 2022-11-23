import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { createMyValueProvider } from './providers';

if (environment.production) {
  enableProdMode();
}

const myValueProvider = createMyValueProvider((window as any).test)


platformBrowserDynamic([myValueProvider]).bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import { Provider } from '@angular/core';
// class Render {}
// If we want our app to work in the Mark Down env instead of browser env
//  we need to implement an interface with some methods
// interface IRender<T> {
//   // createElement(...args: []): HTMLElement
//   createTextElement(content: string): T;
// }

// class DOMRender implements IRender<HTMLElement> {
//   private createElement(elementType: string, content: string): HTMLElement {
//     const el = document.createElement(elementType);
//     el.textContent = content;
//     return el;
//   }

//   createTextElement(content: string) {
//     return this.createElement('p', content);
//   }
// }

// class MDRender implements IRender<any> {
//   createTextElement(content: string) {
//     return '```' + content + '```';
//   }
// }

// const render = new MDRender(); //DOMRender();

// const providers: Provider[] = [
//   {
//     provide: Render,
//     useClass: DOMRender,
//   },
// ];
