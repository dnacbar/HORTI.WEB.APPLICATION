import { UserAccessService } from './../../../service/user-access.service';
import { UserService } from './../../../service/user.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public userModel: User = new User();

  constructor(private userService: UserService,
      private userAccessService: UserAccessService) { }

  ngOnInit(): void {
  }

  public userAccount() {
    this.userAccessService.emitUserAccount();
  }

  public createAccount(): void {

  }
}
