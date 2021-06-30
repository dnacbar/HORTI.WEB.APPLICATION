//import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageHelper } from './model/helper/message-helper';
import { EnumModal } from './model/enum/modal.enum';
import { ModalComponent } from './component/modal/modal.component';
import { ModalService } from './service/modal.service';
import { UserLogoutSignature } from './model/signature/user-logout-signature';
import { EnumHttpStatusCode } from './model/enum/status-code.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { UserAccessService } from './service/user-access.service';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { TimeoutError, Subject } from 'rxjs';
import { Modal } from './model/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public userModel: User = new User();
  public userIsAuthenticated = false;
  public verifyService = false;

  private subject$ = new Subject();

  constructor(private userAccessService: UserAccessService,
    private userService: UserService,
    private modalService: ModalService,
    private router: Router) {

    userAccessService.verifyUserIsAuthenticated()
      .pipe(takeUntil(this.subject$))
      .subscribe((x: boolean) => {
        this.userIsAuthenticated = x;
        this.userModel.ToModel(this.userService.getUserStorage());
        this.verifyService = true;
      }, (e: HttpErrorResponse | TimeoutError) => {
        console.log(e);
        if (e instanceof TimeoutError)
          this.router.navigate(['./error/' + EnumHttpStatusCode.REQUEST_TIMEOUT]);
        else
          this.router.navigate(['./error']);
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  public logoutUser(): void {
    this.userAccessService.logoutUser(Object.assign(new UserLogoutSignature(), this.userService.getUserStorage()))
      .pipe(takeUntil(this.subject$))
      .subscribe(() => {
        this.userService.removeUserStorage();
        this.router.navigate(['/user']);
        this.userIsAuthenticated = false;
      }, (e: HttpErrorResponse | TimeoutError) => {
        if (e instanceof TimeoutError) {
          this.modalService.showModal(ModalComponent, new Modal(null, MessageHelper.timeoutMessage, EnumModal.Warning));
          return;
        }

        this.modalService.showModal(ModalComponent, new Modal(' - ERRO!', MessageHelper.errorMessage, EnumModal.Ok));
      });
  }
}
