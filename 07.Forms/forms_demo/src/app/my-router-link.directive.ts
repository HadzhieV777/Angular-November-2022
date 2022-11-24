import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective implements OnInit, OnDestroy {
  @Input() appMyRouterLink!: string;
  @Input() template!: TemplateRef<any>;

  @HostListener('mouseenter') mouseEnterHandler2() {
    console.log('Mouse is entering..')
  }

  @HostListener('mouseleave') mouseLeaveHandler2() {
    console.log('Mouse is leaving..')
  }

  unsubs: (() => void)[] = [];

  viewHasBeenCreated = false;

  constructor(
    private elementRef: ElementRef,
    private vc: ViewContainerRef,

    // Extend this base class to implement custom rendering. By default, Angular renders a template into DOM. You can use
    // custom rendering to intercept rendering calls,
    //  or to render to something other than DOM.
    private renderer: Renderer2
  ) {
    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseover',
        this.mouseOverHandler
      )
    );
    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler
      )
    );
    // this.renderer.setAttribute(
    //   this.elementRef.nativeElement,
    //   'data-test',
    //   '123'
    // );
  }
  ngOnInit(): void {
    console.log(this.appMyRouterLink, this.template);
  }

  mouseOverHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    if (this.viewHasBeenCreated) {
      return;
    }
    this.vc.createEmbeddedView(this.template);
    this.viewHasBeenCreated = true;
  };

  mouseLeaveHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'initial');
    this.vc.clear()
    this.viewHasBeenCreated = false;
  };

  ngOnDestroy(): void {
    this.unsubs.forEach((fn) => fn());
  }
}
