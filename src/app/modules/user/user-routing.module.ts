import { PasswordComponent } from './password/password.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'account', component: AccountComponent },
      { path: 'password', component: PasswordComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
