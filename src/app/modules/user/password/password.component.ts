import { UserAccessService } from './../../../service/user-access.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor(private userAccessService: UserAccessService) { }

  ngOnInit(): void {
  }

  public passwordReturnToLogin(): void {
    this.userAccessService.emitPasswordReturn();
  }
}
