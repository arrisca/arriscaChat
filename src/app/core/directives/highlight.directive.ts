import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[arriscaHighliter]'
})
export class HighlightDirective {
  @Input('myColor') highlightColor: string;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
