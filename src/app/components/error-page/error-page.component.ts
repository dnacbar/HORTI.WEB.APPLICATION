import { EnumHttpStatusCode } from './../../model/enum/status-code.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  public enumHttpStatusCode: EnumHttpStatusCode;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (EnumHttpStatusCode.REQUEST_TIMEOUT == Number.parseInt(this.route.snapshot.paramMap.get('error'))) {
      this.enumHttpStatusCode = EnumHttpStatusCode.REQUEST_TIMEOUT;
      console.log(EnumHttpStatusCode.REQUEST_TIMEOUT);
    }
  }

}
