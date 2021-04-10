import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { UserLogoutSignature } from '../model/signature/user-logout-signature';
import { UrlUserQuery } from '../model/helper/service-helper';
import { environment } from '../../environments/environment';
import { UserAccessResult } from '../model/result/user-access-result';
import { UserAccessSignature } from '../model/signature/user-access-signature';
import { DataService } from './_data.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {
  private userIsAuthenticatedSubject$ = new Subject<boolean>();
  private userPasswordSubject$ = new Subject<boolean>();
  private userAccountSubject$ = new Subject<Boolean>();

  public userIsAuthenticated$ = this.userIsAuthenticatedSubject$.asObservable();
  public userPassword$ = this.userPasswordSubject$.asObservable();
  public userAccount$ = this.userAccountSubject$.asObservable();

  constructor(private dataService: DataService,
    private userService: UserService) { }

  public authenticateUser(signature: UserAccessSignature): Observable<UserAccessResult> {
    return this.dataService.GetObject(environment.urlBaseUserQuery + UrlUserQuery.userSession.authenticateUserAccess, signature)
      .pipe(map(x => {
        return Object.assign(new UserAccessResult, x);
      }));
  }

  public logoutUser(signature: UserLogoutSignature): Observable<Object> {
    return this.dataService.GetObject(environment.urlBaseUserQuery + UrlUserQuery.userSession.logoutUserAccess, signature);
  }

  public verifyUserIsAuthenticated(): boolean {
    const result = this.userService.getUserStorage();

    return !(result.IdSession == '' && result.Login == '' && result.Token == '');
  }


  // -- Emitter
  public emitUserIsAuthenticated(signature: boolean): void {
    this.userIsAuthenticatedSubject$.next(signature);
  }

  public emitUserPassword(): void {
    this.userPasswordSubject$.next(true);
  }

  public emitUserAccount(): void {
    this.userAccountSubject$.next(true);
  }
}
