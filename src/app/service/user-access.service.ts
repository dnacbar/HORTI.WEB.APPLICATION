import { map, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { UserLogoutSignature } from '../model/signature/user-logout-signature';
import { UrlUserQueryHelper } from '../model/helper/url-helper';
import { environment } from '../../environments/environment';
import { UserAccessResult } from '../model/result/user-access-result';
import { UserAccessSignature } from '../model/signature/user-access-signature';
import { DataService } from './_shared/_data.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {
  private userIsAuthenticatedSubject$ = new Subject<boolean>();
  public userIsAuthenticated$ = this.userIsAuthenticatedSubject$.asObservable();

  private passwordReturnSubject$ = new Subject<boolean>();
  public passwordReturn$ = this.passwordReturnSubject$.asObservable();

  private accountReturnSubject$ = new Subject<Boolean>();
  public accountReturn$ = this.accountReturnSubject$.asObservable();

  constructor(private dataService: DataService,
    private userService: UserService) { }

  public authenticateUser(signature: UserAccessSignature): Observable<UserAccessResult> {
    return this.dataService.GetObject(environment.urlBaseUserQuery + UrlUserQueryHelper.userSession.authenticateUserAccess, signature)
      .pipe(map((x: UserAccessResult) => {
        return Object.assign(new UserAccessResult, x);
      }));
  }

  public logoutUser(signature: UserLogoutSignature): Observable<Object> {
    return this.dataService.GetObject(environment.urlBaseUserQuery + UrlUserQueryHelper.userSession.logoutUserAccess, signature);
  }

  public verifyUserIsAuthenticated(): Observable<boolean> {
    return this.dataService.Get(environment.urlBaseUserQuery + UrlUserQueryHelper.userSession.get)
      .pipe(map(() => {
        return true;
      }));
  }

  public verifyUserSessionStorage(): boolean {
    const result = this.userService.getUserStorage();

    return !(result.IdSession == '' && result.Login == '' && result.Token == '');
  }

  // -- Emitter
  public emitUserIsAuthenticated(signature: boolean): void {
    this.userIsAuthenticatedSubject$.next(signature);
  }

  public emitPasswordReturn(): void {
    this.passwordReturnSubject$.next(true);
  }

  public emitAccountReturn(): void {
    this.accountReturnSubject$.next(true);
  }
}
