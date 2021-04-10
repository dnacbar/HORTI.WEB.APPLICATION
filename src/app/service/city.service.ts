import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { CityResult } from './../model/result/city-result';
import { UrlCoreQuery } from '../model/helper/service-helper';
import { CitySignature } from './../model/signature/city-signature';
import { Observable, pipe } from 'rxjs';
import { DataService } from './_data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private dataService: DataService) { }

  public GetCities(signature: CitySignature): Observable<CityResult> {
    return this.dataService.GetObject(environment.urlBaseCoreQuery + UrlCoreQuery.city.getCityByIdOrName, signature)
      .pipe(map(x => {
        return Object.assign(new CityResult, x);
      }));
  }

  public GetListOfCities(signature: CitySignature): Observable<CityResult[]> {
    return this.dataService.GetListOfObject(environment.urlBaseCoreQuery + UrlCoreQuery.city.getListOfCities, signature)
      .pipe(map(x => {
        return Object.assign(new Array<CityResult>(), x);
      }));
  }

  public GetFullListOfCities(): Observable<CityResult[]> {
    return this.dataService.GetFullListOfObject(environment.urlBaseCoreQuery + UrlCoreQuery.city.getFullListOfCities)
      .pipe(map(x => {
        return <CityResult[]>x;
      }));
  }
}
