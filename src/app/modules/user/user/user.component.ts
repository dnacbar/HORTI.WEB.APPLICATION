import { Router } from '@angular/router';
import { UserAccessService } from '../../../service/user-access.service';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  @ViewChild('userModal', { static: false }) userModal: ModalDirective;

  public password = true;
  public account = true;
  public subject$ = new Subject();

  constructor(private userAccessService: UserAccessService,
    private router: Router) {

    this.userAccessService.userIsAuthenticated$
      .pipe(takeUntil(this.subject$))
      .subscribe((x: boolean) => {
        if (x == true)
          this.hideModal();
      });

    this.userAccessService.userAccount$
      .pipe(takeUntil(this.subject$))
      .subscribe((x: boolean) => {
        this.account = x;
      });

    this.userAccessService.userPassword$
      .pipe(takeUntil(this.subject$))
      .subscribe((x: boolean) => {
        this.password = x;
      });
  }

  ngOnInit(): void {
    this.account = true;
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  hideModal(): void {
    this.router.navigate(['/home']);
  }
}