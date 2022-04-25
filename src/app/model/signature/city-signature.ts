import { City } from './../city';
import { Signature } from "./_signature";

export class CitySignature extends Signature {
    City = new String;

    public ToSignature(city: City) {
        this.Id = city.IdCity.toString();
        this.City = city.DsCity;
    }
}
