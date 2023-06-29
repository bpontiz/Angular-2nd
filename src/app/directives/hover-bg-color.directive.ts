import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBgColor]'
})
export class HoverBgColorDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
