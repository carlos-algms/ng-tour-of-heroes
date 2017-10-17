import { AfterContentInit, Component, Output, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
})
export class AppFormComponent {

  @Output() public formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }
}
