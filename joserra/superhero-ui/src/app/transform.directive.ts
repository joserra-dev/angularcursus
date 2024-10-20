import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransform]',
  standalone: true,
})
export class TransformDirective {
  constructor(
    private element: ElementRef,
    private render: Renderer2,
  ) {
    this.render.setStyle(
      this.element.nativeElement,
      'transition',
      'transform 0.3s ease-in-out',
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.element.nativeElement, 'transform', 'scale(1.3)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.element.nativeElement, 'transform', 'scale(1)');
  }
}
