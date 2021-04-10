import { EnumHttpStatusCode } from './../../../model/enum/status-code.enum';
import { EnumModal } from './../../../model/enum/modal.enum';
import { Modal } from 'src/app/model/modal';
import { ModalComponent } from './../../../components/modal/modal.component';
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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userModel: User = new User();

  constructor(private userService: UserService,
    private loginService: UserAccessService,
    private modalService: ModalService) { }

  ngOnInit(): void {
  }

  public authenticateUser(): void {
    this.loginService.authenticateUser(new UserAccessSignature(this.userModel))
      .pipe(take(1))
      .subscribe((x: UserAccessResult) => {
        if (x == null) {
          return;
        }
        x.IdSession = 'ABC';
        x.isValid();
        this.loginService.emitUserIsAuthenticated(true);
        this.userService.setUserStorage(x);
      }, (e: HttpErrorResponse | TimeoutError) => {
        
        if (e instanceof TimeoutError) {
          this.modalService.showModal(ModalComponent, new Modal(null, 'Serviço indisponível!', EnumModal.Error));
          return;
        }

        if (e.status == EnumHttpStatusCode.BAD_REQUEST || e.status == EnumHttpStatusCode.NOT_FOUND) {
          this.modalService.showModal(ModalComponent, new Modal(null, 'Não foi possível validar o acesso!', EnumModal.Warning));
          return;
        }
        this.modalService.showModal(ModalComponent, new Modal(' - ' + e.status.toString(), 'Falha no serviço!', EnumModal.Error));
      });
  }
}
