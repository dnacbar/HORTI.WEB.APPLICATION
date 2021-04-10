import { UserAccessResult } from "./result/user-access-result";

export class User {
    IdUser = new String;
    DsLogin = new String;
    DsPassword = new String;
    DsPhone = new String;
    IdSession = new String;
    DsToken = new String;
    BoIsProducer = new Boolean;
    BoSessionExpire = new Boolean;

    public ToModel(result: UserAccessResult): void {
        this.IdSession = result.IdSession;
        this.DsLogin = result.Login;
        this.DsToken = result.Token;
    }
}
