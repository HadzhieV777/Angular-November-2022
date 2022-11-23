import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective {
  constructor(
    private elementRef: ElementRef,
    // Extend this base class to implement custom rendering. By default, Angular renders a template into DOM. You can use
    // custom rendering to intercept rendering calls,
    //  or to render to something other than DOM.
    private renderer: Renderer2
  ) {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'data-test',
      '123'
    );
  }
}
