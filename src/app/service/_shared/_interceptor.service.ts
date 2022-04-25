import { UserAccessResult } from '../../model/result/user-access-result';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { KeyStorageHelper } from '../../model/helper/storage-helper';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (window.localStorage.getItem(KeyStorageHelper.userAccess)) {
      req = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + Object.assign(new UserAccessResult, JSON.parse(window.localStorage.getItem(KeyStorageHelper.userAccess))).Token,
          'Content-Type': 'application/json',
          'DN-MR-WASATAIN-COMMAND-QUERY': ''
        }
      });
    }
    return next.handle(req).pipe(catchError(x => { console.log(x); return throwError(x); }));;
  }
}
