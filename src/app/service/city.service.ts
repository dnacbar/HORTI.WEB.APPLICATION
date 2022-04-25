import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { CityResult } from './../model/result/city-result';
import { UrlCoreQueryHelper } from '../model/helper/url-helper';
import { CitySignature } from './../model/signature/city-signature';
import { Observable, pipe } from 'rxjs';
import { DataService } from './_shared/_data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private dataService: DataService) { }

  public GetCity(signature: CitySignature): Observable<CityResult> {
    return this.dataService.GetObject(environment.urlBaseCoreQuery + UrlCoreQueryHelper.city.getCityByIdOrName, signature)
      .pipe(map(x => {
        return Object.assign(new CityResult, x);
      }));
  }

  public GetListOfCities(signature: CitySignature): Observable<CityResult[]> {
    return this.dataService.GetListOfObject(environment.urlBaseCoreQuery + UrlCoreQueryHelper.city.getListOfCities, signature)
      .pipe(map(x => {
        return Object.assign(new Array<CityResult>(), x);
      }));
  }

  public GetFullListOfCities(): Observable<CityResult[]> {
    return this.dataService.GetFullListOfObject(environment.urlBaseCoreQuery + UrlCoreQueryHelper.city.getFullListOfCities)
      .pipe(map(x => {
        return Object.assign(new Array<CityResult>(), x);
      }));
  }
}
