import { MessageHelper } from './../../../model/helper/message-helper';
import { EnumHttpStatusCode } from './../../../model/enum/status-code.enum';
import { EnumModal } from './../../../model/enum/modal.enum';
import { Modal } from 'src/app/model/modal';
import { ModalComponent } from '../../../component/modal/modal.component';
import { ModalService } from './../../../service/modal.service';
import { UserAccessResult } from './../../../model/result/user-access-result';
import { UserAccessService } from '../../../service/user-access.service';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { UserAccessSignature } from './../../../model/signature/user-access-signature';
import { UserService } from './../../../service/user.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userModel: User = new User(null);
  public loaderLogin = 'loaderLogin';
  
  constructor(private userService: UserService,
    private loginService: UserAccessService,
    private modalService: ModalService,
    private ngxUiLoaderService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  public authenticateUser(): void {
    this.ngxUiLoaderService.startLoader(this.loaderLogin);

    this.loginService.authenticateUser(new UserAccessSignature(this.userModel))
      .pipe(take(1))
      .subscribe((x: UserAccessResult) => {
        if (x == null) {
          this.modalService.showModal(ModalComponent, new Modal(null, 'Usuário não encontrado!', EnumModal.Warning));
          return;
        }
        this.userService.setUserStorage(x);
        this.loginService.emitUserIsAuthenticated(true);
        this.ngxUiLoaderService.stopLoader(this.loaderLogin);
      }, (e: HttpErrorResponse | TimeoutError) => {
        this.ngxUiLoaderService.stopLoader(this.loaderLogin);
        if (e instanceof TimeoutError) {
          this.modalService.showModal(ModalComponent, new Modal(null, MessageHelper.timeoutMessage, EnumModal.Error));
          return;
        }

        if (e.status == EnumHttpStatusCode.NOT_FOUND) {
          this.modalService.showModal(ModalComponent, new Modal(null, 'Usuário não encontrado!', EnumModal.Warning));
          return;
        }

        if (e.status == EnumHttpStatusCode.BAD_REQUEST) {
          this.modalService.showModal(ModalComponent, new Modal(null, 'Não foi possível validar o acesso!', EnumModal.Warning));
          return;
        }
        this.modalService.showModal(ModalComponent, new Modal(' - ' + e.status.toString(), MessageHelper.errorMessage, EnumModal.Error));
      });
  }
}
