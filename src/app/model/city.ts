import { CityResult } from './result/city-result';

export class City {
    IdCity = new Number;
    DsCity = new String;
    IdState = new Number;

    public ToModel(result: CityResult): void {
        this.IdCity = result.Id;
        this.DsCity = result.City;
        this.IdState = result.IdState;
    }
}
