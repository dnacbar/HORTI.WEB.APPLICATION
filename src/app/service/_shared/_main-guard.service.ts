import { EnumHttpStatusCode } from '../../model/enum/status-code.enum';
import { UrlCoreQueryHelper } from '../../model/helper/url-helper';
import { environment } from '../../../environments/environment.prod';
import { DataService } from './_data.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainGuardService implements CanActivate {

  constructor(private dataService: DataService,
    private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.dataService.Get(environment.urlBaseCoreQuery + UrlCoreQueryHelper.main.get)
      .pipe(take(1),
        map(() => { return true; }),
        catchError(e => {
          console.log(e);
          if (e instanceof TimeoutError)
            this.router.navigate(['./error/' + EnumHttpStatusCode.REQUEST_TIMEOUT]);

          return throwError(false);
        }));
  }
}
