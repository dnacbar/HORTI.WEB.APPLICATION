import { Router } from '@angular/router';
import { MessageHelper } from './../../../model/helper/message-helper';
import { EnumModal } from './../../../model/enum/modal.enum';
import { ModalComponent } from '../../../component/modal/modal.component';
import { ModalService } from './../../../service/modal.service';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { UserAccessService } from './../../../service/user-access.service';
import { UserService } from './../../../service/user.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { UserCreationSignature } from 'src/app/model/signature/user-creation-signature';
import { TimeoutError } from 'rxjs';
import { Modal } from 'src/app/model/modal';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public userModel: User = new User(null);

  constructor(private userService: UserService,
    private userAccessService: UserAccessService,
    private modalService: ModalService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  public accountReturnToLogin() {
    this.userAccessService.emitAccountReturn();
  }

  public createAccount(): void {
    if (!this.userModel.validatePassword()) {
      this.modalService.showModal(ModalComponent, new Modal(' - Senha inválida!', 'As senhas não combinam ou não passaram pela validação.', EnumModal.Warning));
      return;
    }

    this.userService.createUser(new UserCreationSignature(this.userModel))
      .pipe(take(1))
      .subscribe(() => {
        this.modalService.showModal(ModalComponent, new Modal(`Parabéns ${this.userModel.DsUserName}!`, 'Usuário criado com sucesso.', EnumModal.Ok));
        this.router.navigate(['./user']);
      }, (e: HttpErrorResponse | TimeoutError) => {
        if (e instanceof TimeoutError) {
          this.modalService.showModal(ModalComponent, new Modal(null, MessageHelper.timeoutMessage, EnumModal.Error));
          return;
        }

        this.modalService.showModal(ModalComponent, new Modal(' - ' + e.status.toString(), MessageHelper.errorMessage, EnumModal.Error));
      });
  }
}
