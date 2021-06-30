import { Observable } from 'rxjs';
import { UrlUserCommandHelper } from './../model/helper/url-helper';
import { environment } from './../../environments/environment.prod';
import { DataService } from './_shared/_data.service';
import { UserCreationSignature } from './../model/signature/user-creation-signature';
import { UserAccessResult } from './../model/result/user-access-result';
import { Injectable } from '@angular/core';
import { KeyStorageHelper } from '../model/helper/storage-helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService: DataService) { }

  public createUser(signature: UserCreationSignature): Observable<Object> {
    return this.dataService.CreateObject(environment.urlBaseUserCommand + UrlUserCommandHelper.user.createUser, signature);
  }

  //-- LOCAL STORAGE
  public setUserStorage(result: UserAccessResult): void {
    window.localStorage.setItem(KeyStorageHelper.userAccess, JSON.stringify(result));
  }

  public getUserStorage(): UserAccessResult {
    return JSON.parse(window.localStorage.getItem(KeyStorageHelper.userAccess) ?? JSON.stringify(new UserAccessResult));
  }

  public removeUserStorage(): void {
    window.localStorage.removeItem(KeyStorageHelper.userAccess);
  }
}