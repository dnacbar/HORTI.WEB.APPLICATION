import { Subject } from 'rxjs';
import { UrlCoreQueryHelper } from '../../model/helper/url-helper';
import { environment } from 'src/environments/environment';
import { DataService } from '../../service/_shared/_data.service';
import { EnumHttpStatusCode } from '../../model/enum/status-code.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  public enumHttpStatusCode: EnumHttpStatusCode;

  private subject$ = new Subject();

  constructor(private route: ActivatedRoute, private dataService: DataService) {

    //this.dataService.Get(environment.urlBaseCoreQuery + UrlCoreQueryHelper.main.get)
    //  .pipe(takeUntil(this.subject$))
    //  .subscribe(() => {
    //    this.userIsAuthenticated = this.userAccessService.verifyUserIsAuthenticated();
    //    this.userModel.ToModel(this.userService.getUserStorage());
    //  }, (e: HttpErrorResponse | TimeoutError) => {
    //    console.log(e);
    //    if (e instanceof TimeoutError) {
    //      this.router.navigate(['/error/' + EnumHttpStatusCode.REQUEST_TIMEOUT]);
    //      return;
    //    }
    //    this.router.navigate(['/error']);
    //  });
  }

  ngOnInit(): void {
    if (EnumHttpStatusCode.REQUEST_TIMEOUT == Number.parseInt(this.route.snapshot.paramMap.get('error'))) {
      this.enumHttpStatusCode = EnumHttpStatusCode.REQUEST_TIMEOUT;
      console.log(EnumHttpStatusCode.REQUEST_TIMEOUT);
    }
  }
}
