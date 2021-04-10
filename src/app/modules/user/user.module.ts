import { SharedModule } from './../_shared/_shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [LoginComponent, UserComponent, PasswordComponent, AccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ModalModule.forChild(),
    SharedModule
  ]
})
export class UserModule { }
