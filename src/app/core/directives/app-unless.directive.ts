import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[arriscaAppUnless]'
})
export class AppUnlessDirective {
  private hasView = false;

  constructor(private tempRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  @Input() set arriscaAppUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.tempRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
