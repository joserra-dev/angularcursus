import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlert]',
  standalone: true,
})
export class AlertDirective {
  constructor() {}

  @HostListener('click') onClick() {
    alert('Heroes app is added to favourites');
  }
}
