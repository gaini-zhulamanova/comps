import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer : ViewContainerRef,
    private templateRef : TemplateRef<any>
  ) { }

  // set the alias 'appTimes' => whenever someone sets this property we will run the render function
  // it will be repeated number of times we pass as an argument
  @Input('appTimes') set render(times: number){
    // empty the current container
    this.viewContainer.clear();

    for(let i = 0; i < times; i++){
      // print template defined number of times / by each iteration
      // {} is empty object that serves as context - right now we don't have any context, we don't pass any information
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }

}
