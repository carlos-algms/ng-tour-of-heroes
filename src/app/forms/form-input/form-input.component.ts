import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html'
})
export class FormInputComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() inputId = '';
  @Input() inputLabel = '';
  @Input() inputPlaceholder = '';
  @Input() inputType = 'text';
  @Input() inputHelpText = '';
  @Input() inputModel = '';

  ngOnInit() {}

}
