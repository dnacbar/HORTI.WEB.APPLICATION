import { User } from './../user';
import { Signature } from "./_signature";

export class UserLogoutSignature extends Signature {
    IdSession = new String;
    Token = new String;
    Login = new String;

    public ToSignature(user: User) {
        this.IdSession = user.IdSession;
        this.Token = user.DsToken;
        this.Login = user.DsLogin;
    }
}