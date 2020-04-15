import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedFormsModule } from '../shared/shared-forms-module.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedFormsModule
  ]
})
export class LoginModule { }
