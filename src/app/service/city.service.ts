import { CityResult } from './../model/result/city-result';
import { UrlQuery } from './_service-helper';
import { CitySignature } from './../model/signature/city-signature';
import { City } from './../model/city';
import { Observable } from 'rxjs';
import { DataService } from './_data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private dataService: DataService) { }

  public GetCities(signature: CitySignature): Observable<CityResult> {
    return this.dataService.GetObject<CityResult>(UrlQuery.city.getCityByIdOrName, signature);
  }

  public GetListOfCities(signature: CitySignature): Observable<Array<CityResult>> {
    return this.dataService.GetListOfObject<CityResult>(UrlQuery.city.getListOfCities, signature);
  }

  public GetFullListOfCities(signature: CitySignature): Observable<Array<CityResult>> {
    return this.dataService.GetFullListOfObject<CityResult>(UrlQuery.city.getFullListOfCity);
  }
}
