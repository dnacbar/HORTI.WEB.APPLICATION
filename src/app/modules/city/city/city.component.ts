import { CitySignature } from './../../../model/signature/city-signature';
import { City } from './../../../model/city';
import { CityService } from './../../../service/city.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit, OnDestroy {
  public cityModel = new City();
  private subject$ = new Subject();

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    const signature = new CitySignature();

    this.cityService.GetCity(signature)
      .pipe(takeUntil(this.subject$))
      .subscribe(x => {
      }, e => {
        console.log(e);
      });
  }

  ngOnDestroy() {
    this.subject$.next();
    this.subject$.complete();
  }
}
