import { UserAccessResult } from "./result/user-access-result";

export class User {
    constructor() {
        this.BoIsProducer = false;
    }
    DsLogin = new String;
    DsUserName = new String;
    DsPassword = new String;
    DsConfirmPassword = new String;
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

    public validatePassword(): boolean {
        return this.verifyPassword() && this.DsPassword == this.DsConfirmPassword;
    }

    private verifyPassword(): boolean {
        if (this.DsPassword.match("/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/"))
            return true;

        return false;
    }
}
