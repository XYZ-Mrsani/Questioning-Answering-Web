import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import{FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AuthenticationComponent,
    NewUserComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
