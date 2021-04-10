import { EnumHttpStatusCode } from './model/enum/status-code.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { UserAccessService } from './service/user-access.service';
import { UserService } from './service/user.service';
import { UrlCoreQuery } from './model/helper/service-helper';
import { DataService } from './service/_data.service';
import { User } from './model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public userModel: User = new User();
  public userIsAuthenticated = false;

  constructor(private dataService: DataService,
    private userAccessService: UserAccessService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.Get(environment.urlBaseCoreQuery + UrlCoreQuery.main.get)
      .pipe(take(1))
      .subscribe(() => {
        this.userIsAuthenticated = this.userAccessService.verifyUserIsAuthenticated();
        this.userModel.ToModel(this.userService.getUserStorage());
      }, (e: HttpErrorResponse | TimeoutError) => {
        console.log(e);
        if (e instanceof TimeoutError) {
          this.router.navigate(['/error/' + EnumHttpStatusCode.REQUEST_TIMEOUT]);
          return;
        }
        this.router.navigate(['/error'])
      });
  }

  public logoutUser(): void {
    this.userService.removeUserStorage();
    this.router.navigate(['/user']);

    //this.loginService.logoutUser(this.userService.getUserStorage())
    //  .pipe(take(1))
    //  .subscribe(() => {
    //  }, (e: HttpErrorResponse) => alert(e));
  }
}
