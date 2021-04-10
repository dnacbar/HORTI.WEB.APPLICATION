import { UserAccessResult } from './../model/result/user-access-result';
import { Injectable } from '@angular/core';
import { KeyStorage } from '../model/helper/storage-helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public setUserStorage(result: UserAccessResult): void {
    window.localStorage.setItem(KeyStorage.userAccess, JSON.stringify(result));
  }

  public getUserStorage(): UserAccessResult {
    return JSON.parse(window.localStorage.getItem(KeyStorage.userAccess) ?? JSON.stringify(new UserAccessResult));
  }

  public removeUserStorage(): void {
    window.localStorage.removeItem(KeyStorage.userAccess);
  }
}
