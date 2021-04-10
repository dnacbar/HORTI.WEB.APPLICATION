import { CitySignature } from './signature/city-signature';
import { CityResult } from './result/city-result';

export class City {
    IdCity = new Number;
    DsCity = new String;
    IdState = new Number;

    public ToModel(result: CityResult): City {
        this.IdCity = result.Id;
        this.DsCity = result.City;
        this.IdState = result.IdState;
        return this;
    }

    public ToSignature(): CitySignature {
        let signature = new CitySignature();
        signature.Id = this.IdCity.toString();
        signature.City = this.DsCity;
        return signature;
    }
}
