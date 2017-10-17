import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[formContents]'
})
export class FormContentsDirective {

  constructor(public templateRef: TemplateRef<any>) {}

}
