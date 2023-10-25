import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: { '(click)': 'onClick()' },
})
export class HighlightDirective {
  private el: ElementRef | undefined;

  @Input() number = 0;
  @Input() divisibleBy = 1;
  constructor(el: ElementRef) {
    this.el = el;
  }

  onClick() {
    if (this.number % this.divisibleBy === 0) {
      if (this.el) {
        this.el.nativeElement.style.color = 'green';
      } else {
        if (this.el) {
          // this.el.nativeElement.style.color = 'red';
        }
      }
    }
  }
}
