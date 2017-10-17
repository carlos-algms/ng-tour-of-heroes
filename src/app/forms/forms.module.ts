import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { FormInputComponent } from './form-input/form-input.component';
import { AppFormComponent } from './app-form/app-form.component';
import { FormInputBaseDirective } from './form-input/form-input-base.directive';
import { FormContentsDirective } from './app-form/form-contents.directive';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormInputComponent,
    AppFormComponent,
    FormInputBaseDirective,
    FormContentsDirective
  ],
  exports: [
    FormInputComponent,
    FormGroupDirective,
    AppFormComponent,
    FormInputBaseDirective,
    FormContentsDirective
  ]
})
export class AppFormsModule { }
