import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { FormInputComponent } from './form-input/form-input.component';
import { AppFormComponent } from './app-form/app-form.component';
import { FormInputBaseDirective } from './form-input/form-input-base.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormInputComponent,
    AppFormComponent,
    FormInputBaseDirective
  ],
  exports: [
    FormInputComponent,
    FormGroupDirective,
    AppFormComponent,
    FormInputBaseDirective
  ]
})
export class AppFormsModule { }
