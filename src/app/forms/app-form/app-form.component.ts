import { Component, ContentChildren, AfterContentInit, Output, QueryList, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBaseDirective } from '../form-input/form-input-base.directive';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html'
})
export class AppFormComponent implements AfterContentInit  {

  @ContentChildren(FormInputBaseDirective) inputs: QueryList<FormInputBaseDirective>;
  @Output() public form: FormGroup;

  ngAfterContentInit() {
    // this.form = this.toFormGroup([]);
    this.form = new FormGroup({});
    this.inputs.map(i => console.log(i));
  }

  toFormGroup(fields: any[] = [] ) {
    const group: any = {};

    fields.forEach(field => {
      if (field.required) {
        group[field.key] = new FormControl(field.value || '', Validators.required);
      } else {
        group[field.key] = new FormControl(field.value || '');
      }
    });

    return new FormGroup(group);
  }

}
