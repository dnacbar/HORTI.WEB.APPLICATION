import { CityResult } from './result/city-result';
export class City {
    public IdCity: number | undefined;
    public DsCity: string | undefined;
    public IdState: number | undefined;

    public static ToModel(signature: CityResult): City {
        const city = new City();
        city.IdCity = signature.Id;
        city.DsCity = signature.City;
        city.IdState = signature.State;
        return city;
    }
}
