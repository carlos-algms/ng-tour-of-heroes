import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html'
})
export class FormInputComponent implements OnInit, OnDestroy {

  @Input() formGroup: FormGroup;
  @Input() inputId = '';
  @Input() inputLabel = '';
  @Input() inputPlaceholder = '';
  @Input() inputType = 'text';
  @Input() inputHelpText = '';
  @Input() inputName = '';
  @Input() inputInitialValue = '';

  constructor() {
  }

  ngOnInit() {
    this.formGroup.addControl(this.inputName, new FormControl(this.inputInitialValue));
  }

  ngOnDestroy() {
    if (this.formGroup) {
      this.formGroup.removeControl(this.inputName);
    }
  }

}
